import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Moon, Sun, X } from "lucide-react";
import { trendingIds, videos, type Video } from "@/data/catalog";
import { PlansDialog, QuickLook, Toast } from "@/components/dialogs";
import { VideoTile } from "@/components/video-tile";
import { cn } from "@/lib/cn";
import { relativeTime } from "@/lib/format";

type Mode = "classic" | "studio";
type Filter = "all" | "fresh" | "private" | "dubbed";
type Sort = "new" | "views";

type Store = {
  mode: Mode;
  theme: "light" | "dark";
  subscriber: boolean;
  saved: string[];
  queue: string[];
  positions: Record<string, number>;
};

const KEY = "card-studio-v1";

const seedPositions = () => {
  const base: Record<string, number> = {};
  for (const video of videos) {
    if (video.resumePosition > 0) base[video.shortId] = video.resumePosition;
  }
  return base;
};

export function Studio() {
  const [mode, setMode] = useState<Mode>("studio");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [subscriber, setSubscriber] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);
  const [queue, setQueue] = useState<string[]>([]);
  const [positions, setPositions] = useState<Record<string, number>>(seedPositions);
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("new");
  const [tag, setTag] = useState<string | null>(null);
  const [creator, setCreator] = useState<string | null>(null);
  const [active, setActive] = useState<Video | null>(null);
  const [plansFor, setPlansFor] = useState<Video | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const toastTimer = useRef<number>(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const data = JSON.parse(raw) as Partial<Store>;
        if (data.mode === "classic" || data.mode === "studio") setMode(data.mode);
        if (data.theme === "dark" || data.theme === "light") setTheme(data.theme);
        if (typeof data.subscriber === "boolean") setSubscriber(data.subscriber);
        if (Array.isArray(data.saved)) setSaved(data.saved);
        if (Array.isArray(data.queue)) setQueue(data.queue);
        if (data.positions && typeof data.positions === "object") {
          setPositions({ ...seedPositions(), ...data.positions });
        }
      }
    } catch {
      /* ignore broken local state */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (!hydrated || playingId) return;
    const payload: Store = { mode, theme, subscriber, saved, queue, positions };
    localStorage.setItem(KEY, JSON.stringify(payload));
  }, [hydrated, playingId, mode, theme, subscriber, saved, queue, positions]);

  useEffect(() => {
    if (!playingId) return;
    const video = videos.find((item) => item.shortId === playingId);
    if (!video) return;
    const timer = window.setInterval(() => {
      setPositions((prev) => {
        const current = prev[video.shortId] ?? video.resumePosition;
        const next = Math.min(video.duration, current + video.duration / 70);
        return { ...prev, [video.shortId]: next };
      });
    }, 200);
    return () => window.clearInterval(timer);
  }, [playingId]);

  useEffect(() => {
    if (!playingId) return;
    const video = videos.find((item) => item.shortId === playingId);
    if (!video) return;
    const position = positions[playingId] ?? 0;
    if (position >= video.duration) setPlayingId(null);
  }, [playingId, positions]);

  const notify = useCallback((message: string) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2200);
  }, []);

  const positionOf = useCallback(
    (video: Video) => positions[video.shortId] ?? video.resumePosition,
    [positions],
  );

  const matches = useCallback(
    (video: Video) => {
      if (filter === "fresh" && !relativeTime(video.createdAt).fresh) return false;
      if (filter === "private" && !video.isPrivate) return false;
      if (filter === "dubbed" && !video.isDubbed) return false;
      if (tag && !video.tags.some((item) => item.tag === tag)) return false;
      if (creator && video.user.username !== creator) return false;
      return true;
    },
    [filter, tag, creator],
  );

  const trending = useMemo(
    () => trendingIds.map((id) => videos.find((video) => video.shortId === id)).filter((video): video is Video => !!video && matches(video)),
    [matches],
  );

  const feed = useMemo(() => {
    const list = videos.filter(matches);
    return [...list].sort((a, b) =>
      sort === "views" ? b.viewCount - a.viewCount : Date.parse(b.createdAt) - Date.parse(a.createdAt),
    );
  }, [matches, sort]);

  const continueWatching = useMemo(
    () => videos.filter((video) => positionOf(video) > 0 && positionOf(video) < video.duration - 0.4),
    [positionOf],
  );

  const savedVideos = useMemo(
    () => saved.map((id) => videos.find((video) => video.shortId === id)).filter((video): video is Video => !!video),
    [saved],
  );

  const queuedVideos = useMemo(
    () => queue.map((id) => videos.find((video) => video.shortId === id)).filter((video): video is Video => !!video),
    [queue],
  );

  function openVideo(video: Video) {
    if (video.isPrivate && !subscriber) {
      setPlansFor(video);
      return;
    }
    setActive(video);
  }

  function toggleSave(id: string) {
    setSaved((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [id, ...prev]));
  }

  function toggleQueue(id: string) {
    setQueue((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  }

  async function share(video: Video) {
    const text = `${video.title} — /v/${video.shortId}`;
    try {
      await navigator.clipboard.writeText(text);
      notify("Link copiado");
    } catch {
      notify(text);
    }
  }

  function playToggle(video: Video) {
    const current = positionOf(video);
    if (playingId === video.shortId) {
      setPlayingId(null);
      return;
    }
    if (current >= video.duration - 0.4) {
      setPositions((prev) => ({ ...prev, [video.shortId]: 0 }));
    }
    setPlayingId(video.shortId);
  }

  function becomeSubscriber() {
    const video = plansFor;
    setSubscriber(true);
    setPlansFor(null);
    if (video) setActive(video);
    notify("Assinante ativo — o privado abre direto");
  }

  const tileProps = {
    variant: mode,
    onOpen: openVideo,
    onSave: toggleSave,
    onQueue: toggleQueue,
    onShare: share,
    onTag: (next: string) => {
      setTag(next);
      setCreator(null);
    },
    onCreator: (name: string) => {
      setCreator(name);
      setTag(null);
    },
  };

  return (
    <main className="mx-auto max-w-6xl px-4 pt-6 pb-16">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-wide text-accent">Card Studio</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-balance text-ink">O card, no formato da capa</h1>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
            {mode === "studio"
              ? "Capa 720×404 em object-cover, sem blur. Passe o mouse na imagem para a prévia, salve, monte uma fila ou dê play na olhada rápida."
              : "O card de hoje: o fogo do ranking come o título, e o compacto corta tudo numa linha só."}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-full border border-line bg-card p-1">
            <Seg label="Atual" on={mode === "classic"} onClick={() => setMode("classic")} />
            <Seg label="Novo" on={mode === "studio"} onClick={() => setMode("studio")} accent />
          </div>
          <button
            type="button"
            aria-pressed={subscriber}
            onClick={() => setSubscriber((value) => !value)}
            className={cn(
              "min-h-11 rounded-full border px-4 text-sm font-medium",
              subscriber ? "border-accent bg-accent-soft text-accent" : "border-line bg-card text-muted",
            )}
          >
            {subscriber ? "Assinante" : "Visitante"}
          </button>
          <button
            type="button"
            aria-label={theme === "dark" ? "Tema claro" : "Tema escuro"}
            onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {(tag || creator) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tag && <FilterChip label={`#${tag}`} onClear={() => setTag(null)} />}
          {creator && <FilterChip label={`@${creator}`} onClear={() => setCreator(null)} />}
        </div>
      )}

      {trending.length > 0 && (
        <Section title="Em alta" hint="Arraste o trilho">
          <Rail>
            {trending.map((video, index) => (
              <VideoTile
                key={video.shortId}
                {...tileProps}
                video={video}
                layout="compact"
                index={index}
                trending
                position={positionOf(video)}
                saved={saved.includes(video.shortId)}
                queued={queue.includes(video.shortId)}
                priority={index < 2}
              />
            ))}
          </Rail>
        </Section>
      )}

      {mode === "studio" && continueWatching.length > 0 && (
        <Section title="Continuar assistindo">
          <Rail>
            {continueWatching.map((video) => (
              <VideoTile
                key={video.shortId}
                {...tileProps}
                video={video}
                layout="compact"
                position={positionOf(video)}
                saved={saved.includes(video.shortId)}
                queued={queue.includes(video.shortId)}
              />
            ))}
          </Rail>
        </Section>
      )}

      {mode === "studio" && savedVideos.length > 0 && (
        <Section title="Ver depois">
          <Rail>
            {savedVideos.map((video) => (
              <VideoTile
                key={video.shortId}
                {...tileProps}
                video={video}
                layout="compact"
                position={positionOf(video)}
                saved
                queued={queue.includes(video.shortId)}
              />
            ))}
          </Rail>
        </Section>
      )}

      {queuedVideos.length > 0 && (
        <Section title="Sua fila" hint={`${queuedVideos.length} na ordem em que você adicionou`}>
          <ul className="flex flex-col gap-2">
            {queuedVideos.map((video, index) => (
              <li key={video.shortId} className="flex items-center gap-3 rounded-xl border border-line bg-card pr-2">
                <button type="button" onClick={() => openVideo(video)} className="flex min-h-11 min-w-0 flex-1 items-center gap-3 text-left">
                  <img src={video.cover} alt="" className="h-14 w-20 rounded-l-xl object-cover" />
                  <span className="text-sm font-medium text-muted tabular-nums">{index + 1}</span>
                  <span className="truncate text-sm font-semibold text-ink">{video.title}</span>
                </button>
                <button
                  type="button"
                  aria-label={`Tirar ${video.title} da fila`}
                  onClick={() => toggleQueue(video.shortId)}
                  className="grid h-11 w-11 place-items-center rounded-full text-muted hover:text-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <section className="mt-10">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-ink">Feed de vídeos</h2>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <FilterBar filter={filter} onChange={setFilter} />
            <label className="sr-only" htmlFor="sort">
              Ordenar
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value as Sort)}
              className="min-h-11 w-full shrink-0 rounded-full border border-line bg-card px-4 text-sm font-medium text-ink sm:w-44"
            >
              <option value="new">Mais recentes</option>
              <option value="views">Mais vistos</option>
            </select>
          </div>
        </div>
        {feed.length === 0 ? (
          <p className="rounded-xl border border-dashed border-line px-4 py-10 text-center text-sm text-muted">
            Nada com esse filtro.{" "}
            <button
              type="button"
              className="font-semibold text-accent"
              onClick={() => {
                setFilter("all");
                setTag(null);
                setCreator(null);
              }}
            >
              Limpar
            </button>
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {feed.map((video) => (
              <VideoTile
                key={video.shortId}
                {...tileProps}
                video={video}
                layout="feed"
                position={positionOf(video)}
                saved={saved.includes(video.shortId)}
                queued={queue.includes(video.shortId)}
              />
            ))}
          </div>
        )}
      </section>

      {active && (
        <QuickLook
          video={active}
          position={positionOf(active)}
          playing={playingId === active.shortId}
          saved={saved.includes(active.shortId)}
          queued={queue.includes(active.shortId)}
          onClose={() => {
            setPlayingId(null);
            setActive(null);
          }}
          onToggle={() => playToggle(active)}
          onSave={() => toggleSave(active.shortId)}
          onQueue={() => toggleQueue(active.shortId)}
        />
      )}
      {plansFor && <PlansDialog video={plansFor} onClose={() => setPlansFor(null)} onPretend={becomeSubscriber} />}
      {toast && <Toast message={toast} />}
    </main>
  );
}

function Seg({ label, on, onClick, accent }: { label: string; on: boolean; onClick: () => void; accent?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={cn(
        "min-h-10 rounded-full px-4 text-sm font-semibold",
        on ? (accent ? "bg-accent text-on-accent" : "bg-ink text-paper") : "text-muted",
      )}
    >
      {label}
    </button>
  );
}

function FilterChip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <button type="button" onClick={onClear} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-3 text-sm font-medium text-paper">
      {label}
      <X className="h-3.5 w-3.5" />
      <span className="sr-only">Limpar filtro</span>
    </button>
  );
}

function FilterBar({ filter, onChange }: { filter: Filter; onChange: (filter: Filter) => void }) {
  const items: { id: Filter; label: string }[] = [
    { id: "all", label: "Todos" },
    { id: "fresh", label: "Novos" },
    { id: "private", label: "Privados" },
    { id: "dubbed", label: "Dublados" },
  ];
  return (
    <div className="inline-flex flex-wrap rounded-full border border-line bg-card p-1">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          aria-pressed={filter === item.id}
          onClick={() => onChange(item.id)}
          className={cn(
            "min-h-11 rounded-full px-3 text-sm font-medium",
            filter === item.id ? "bg-ink text-paper" : "text-muted",
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function Section({ title, hint, children }: { title: string; hint?: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h2 className="text-xl font-semibold tracking-tight text-ink">{title}</h2>
        {hint && <p className="text-sm text-muted">{hint}</p>}
      </div>
      {children}
    </section>
  );
}

function Rail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, x: 0, left: 0, moved: false });
  const blockClick = useRef(false);

  return (
    <div
      ref={ref}
      className="rail flex cursor-grab items-stretch gap-4 overflow-x-auto pb-3 active:cursor-grabbing"
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse" || event.button !== 0 || !ref.current) return;
        drag.current = { active: true, x: event.clientX, left: ref.current.scrollLeft, moved: false };
      }}
      onPointerMove={(event) => {
        if (!drag.current.active || !ref.current) return;
        const dx = event.clientX - drag.current.x;
        if (Math.abs(dx) < 8) return;
        drag.current.moved = true;
        if (!ref.current.hasPointerCapture(event.pointerId)) {
          ref.current.setPointerCapture(event.pointerId);
        }
        ref.current.scrollLeft = drag.current.left - dx;
      }}
      onPointerUp={() => {
        blockClick.current = drag.current.moved;
        drag.current.active = false;
      }}
      onClickCapture={(event) => {
        if (!blockClick.current) return;
        event.preventDefault();
        event.stopPropagation();
        blockClick.current = false;
      }}
    >
      {children}
    </div>
  );
}
