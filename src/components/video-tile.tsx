import { useState, type MouseEvent, type ReactNode } from "react";
import { BadgeCheck, Bookmark, Flame, Languages, ListPlus, Lock, Pin, Play, Share2 } from "lucide-react";
import type { Video } from "@/data/catalog";
import { cn } from "@/lib/cn";
import { compactNumber, formatDuration, relativeTime } from "@/lib/format";

export type TileProps = {
  video: Video;
  variant: "classic" | "studio";
  layout: "compact" | "feed";
  index?: number;
  trending?: boolean;
  position: number;
  saved: boolean;
  queued: boolean;
  priority?: boolean;
  onOpen: (video: Video) => void;
  onSave: (id: string) => void;
  onQueue: (id: string) => void;
  onShare: (video: Video) => void;
  onTag: (tag: string) => void;
  onCreator: (username: string) => void;
};

const flameClass = ["text-red-500", "text-orange-500", "text-amber-400"];

export function VideoTile(props: TileProps) {
  if (props.variant === "classic") return <ClassicTile {...props} />;
  return <StudioTile {...props} />;
}

function Meta({ video }: { video: Video }) {
  const time = relativeTime(video.createdAt);
  return (
    <p className="flex items-center gap-1 text-sm text-muted">
      <Play className="h-3 w-3 shrink-0" aria-hidden />
      <span className="tabular-nums">{compactNumber(video.viewCount)}</span>
      <span aria-hidden>·</span>
      <span className={time.fresh ? "text-fresh" : undefined}>{time.label}</span>
    </p>
  );
}

function ClassicBadges({ video, trending }: { video: Video; trending?: boolean }) {
  const chip = "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold text-on-accent";
  const showPin = video.isFixed && !trending;
  if (!video.isPrivate && !video.isDubbed && !showPin) return null;
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {video.isPrivate && (
        <span className={cn(chip, "bg-accent")}>
          <Lock className="h-3 w-3" aria-hidden /> Privado
        </span>
      )}
      {showPin && (
        <span className={cn(chip, "bg-ink text-paper")}>
          <Pin className="h-3 w-3" aria-hidden /> Fixado
        </span>
      )}
      {video.isDubbed && (
        <span className={cn(chip, "bg-violet-700")}>
          <Languages className="h-3 w-3" aria-hidden /> Dublado
        </span>
      )}
    </div>
  );
}

function ClassicTile({ video, layout, index = 0, trending, position, priority, onOpen, onTag, onCreator }: TileProps) {
  const resume = position > 0 && position < video.duration;
  const open = () => onOpen(video);

  if (layout === "compact") {
    return (
      <article className="w-64 shrink-0 snap-start">
        <button
          type="button"
          onClick={open}
          className="group flex w-full flex-col overflow-hidden rounded-xl border border-line bg-card text-left shadow-sm transition hover:shadow-md"
        >
          <ClassicCover video={video} position={position} tall={false} priority={priority} />
          <div className="p-3">
            <h3 className="flex items-center gap-1 text-base font-bold tracking-tight text-ink">
              {trending && index < 3 && (
                <Flame className={cn("h-4 w-4 shrink-0", flameClass[index])} fill="currentColor" aria-hidden />
              )}
              <span className="truncate">{video.title}</span>
            </h3>
            <div className="mt-1">
              <Meta video={video} />
            </div>
            <ClassicBadges video={video} trending={trending} />
          </div>
        </button>
        <span className="sr-only">{resume ? "Com progresso" : ""}</span>
      </article>
    );
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-card shadow-sm transition hover:shadow-md">
      <button type="button" onClick={open} className="block text-left">
        <ClassicCover video={video} position={position} tall priority={priority} />
      </button>
      <div className="flex flex-1 flex-col px-3 pt-2.5 pb-3">
        {video.tags.length > 0 && (
          <p className="line-clamp-2 text-sm leading-snug">
            {video.tags.map((tag) => (
              <button
                key={tag.id}
                type="button"
                onClick={() => onTag(tag.tag)}
                className="mr-2 inline min-h-11 text-fresh hover:underline"
              >
                #{tag.tag}
              </button>
            ))}
          </p>
        )}
        <button type="button" onClick={open} className="text-left">
          <h3 className="line-clamp-2 text-lg font-bold leading-snug tracking-tight text-balance text-ink">
            {video.title}
          </h3>
        </button>
        <div className="mt-1">
          <Meta video={video} />
        </div>
        <ClassicBadges video={video} trending={trending} />
        <button
          type="button"
          onClick={() => onCreator(video.user.username)}
          className="mt-2 inline-flex min-h-11 w-fit items-center gap-2"
        >
          <Avatar name={video.user.username} />
          <span className="text-sm font-medium text-ink hover:underline">{video.user.username}</span>
          {video.user.verified && <BadgeCheck className="h-4 w-4 text-fresh" aria-label="Verificado" />}
        </button>
      </div>
    </article>
  );
}

function ClassicCover({
  video,
  position,
  tall,
  priority,
}: {
  video: Video;
  position: number;
  tall: boolean;
  priority?: boolean;
}) {
  const resume = position > 0 && position < video.duration;
  const pct = Math.min(100, (position / video.duration) * 100);
  return (
    <div className={cn("relative overflow-hidden bg-frame", tall ? "h-56" : "h-36")}>
      <img
        src={video.cover}
        alt=""
        draggable={false}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      <span
        className={cn(
          "absolute right-2 z-10 rounded-md bg-frame/80 px-2 py-0.5 text-xs font-semibold text-on-accent tabular-nums",
          resume ? "bottom-3" : "bottom-2",
        )}
      >
        {formatDuration(video.duration)}
      </span>
      {resume && (
        <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-paper/40">
          <div className="h-full bg-accent" style={{ width: `${pct}%` }} />
        </div>
      )}
    </div>
  );
}

function StudioTile(props: TileProps) {
  const { video, layout, index = 0, trending, position, saved, queued, priority, onOpen, onSave, onQueue, onShare, onTag, onCreator } =
    props;
  const [hot, setHot] = useState(false);
  const [scrub, setScrub] = useState(0.5);
  const done = position >= video.duration - 0.4 && video.duration > 0;
  const resume = position > 0 && !done;
  const pct = Math.min(100, (position / Math.max(video.duration, 1)) * 100);
  const time = relativeTime(video.createdAt);

  function move(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const next = (event.clientX - rect.left) / rect.width;
    setScrub(Math.min(1, Math.max(0, next)));
  }

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card shadow-sm transition duration-200 hover:border-accent/30 hover:shadow-md",
        layout === "compact" ? "w-72 shrink-0 snap-start" : "w-full",
      )}
    >
      <div
        className="relative aspect-video overflow-hidden bg-frame"
        onMouseEnter={() => setHot(true)}
        onMouseLeave={() => {
          setHot(false);
          setScrub(0.5);
        }}
        onMouseMove={move}
      >
        <img
          src={video.cover}
          alt={video.title}
          draggable={false}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="h-full w-full object-cover transition-transform duration-150"
          style={hot ? { transform: `scale(1.06) translate3d(${(0.5 - scrub) * 3}%, 0, 0)` } : undefined}
        />
        <button type="button" className="absolute inset-0 z-20" aria-label={`Abrir ${video.title}`} onClick={() => onOpen(video)} />

        {trending && index < 3 && (
          <span className="pointer-events-none absolute top-2 left-2 z-30 inline-flex items-center gap-1 rounded-md bg-ink/80 px-1.5 py-0.5 text-xs font-semibold text-paper">
            <Flame className="h-3.5 w-3.5 text-accent" fill="currentColor" aria-hidden />
            {index + 1}
          </span>
        )}

        {video.isPrivate && (
          <span className="pointer-events-none absolute top-2 right-2 z-30 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink/75 text-paper">
            <Lock className="h-3.5 w-3.5" aria-hidden />
          </span>
        )}

        <span
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 z-30 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-md transition duration-200",
            hot ? "scale-100 opacity-100" : "scale-95 opacity-0",
          )}
        >
          <Play className="h-4 w-4" fill="currentColor" aria-hidden />
        </span>

        <span
          className={cn(
            "pointer-events-none absolute right-2 z-30 rounded-md bg-ink/75 px-2 py-0.5 text-xs font-semibold text-paper tabular-nums",
            resume || hot ? "bottom-3" : "bottom-2",
          )}
        >
          {done ? "Visto" : formatDuration(video.duration)}
        </span>

        {hot && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-0.5 bg-paper/35">
            <div className="h-full bg-accent" style={{ width: `${scrub * 100}%` }} />
          </div>
        )}
        {resume && !hot && (
          <div
            className="absolute inset-x-0 bottom-0 z-30 h-1 bg-paper/40"
            role="progressbar"
            aria-valuenow={Math.round(pct)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="h-full bg-accent" style={{ width: `${pct}%` }} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 px-3 pt-2.5 pb-2">
        {layout === "feed" && video.tags.length > 0 && (
          <p className="line-clamp-2 text-sm leading-snug">
            {video.tags.map((tag) => (
              <button
                key={tag.id}
                type="button"
                onClick={() => onTag(tag.tag)}
                className="mr-2 inline min-h-11 text-fresh hover:underline"
              >
                #{tag.tag}
              </button>
            ))}
          </p>
        )}

        <button type="button" onClick={() => onOpen(video)} className="text-left">
          <h3
            className={cn(
              "line-clamp-2 text-balance font-semibold leading-snug tracking-tight text-ink",
              layout === "compact" ? "text-base" : "text-lg",
            )}
          >
            {video.title}
          </h3>
        </button>

        <p className="flex items-center gap-1 text-sm text-muted">
          <Play className="h-3 w-3 shrink-0" aria-hidden />
          <span className="tabular-nums">{compactNumber(video.viewCount)}</span>
          <span aria-hidden>·</span>
          <span className={time.fresh ? "text-fresh" : undefined}>{time.label}</span>
        </p>

        <StudioBadges video={video} trending={trending} />

        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <button
            type="button"
            onClick={() => onCreator(video.user.username)}
            className="inline-flex min-h-11 min-w-0 items-center gap-2"
          >
            <Avatar name={video.user.username} />
            <span className="truncate text-sm font-medium text-ink hover:underline">{video.user.username}</span>
            {video.user.verified && <BadgeCheck className="h-4 w-4 shrink-0 text-accent" aria-label="Verificado" />}
          </button>
          <div className="flex shrink-0">
            <IconButton label={saved ? "Remover dos salvos" : "Ver depois"} pressed={saved} onClick={() => onSave(video.shortId)}>
              <Bookmark className="h-4 w-4" fill={saved ? "currentColor" : "none"} />
            </IconButton>
            <IconButton label={queued ? "Tirar da fila" : "Adicionar à fila"} pressed={queued} onClick={() => onQueue(video.shortId)}>
              <ListPlus className="h-4 w-4" />
            </IconButton>
            <IconButton label="Compartilhar" onClick={() => onShare(video)}>
              <Share2 className="h-4 w-4" />
            </IconButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function StudioBadges({ video, trending }: { video: Video; trending?: boolean }) {
  const chip = "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium";
  const showPin = video.isFixed && !trending;
  if (!video.isPrivate && !video.isDubbed && !showPin) return null;
  return (
    <div className="mt-1 flex flex-wrap gap-1.5">
      {video.isPrivate && (
        <span className={cn(chip, "border-accent/30 bg-accent-soft text-accent")}>
          <Lock className="h-3 w-3" aria-hidden /> Privado
        </span>
      )}
      {video.isDubbed && (
        <span className={cn(chip, "border-line text-muted")}>
          <Languages className="h-3 w-3" aria-hidden /> Dublado
        </span>
      )}
      {showPin && (
        <span className={cn(chip, "border-line text-muted")}>
          <Pin className="h-3 w-3" aria-hidden /> Fixado
        </span>
      )}
    </div>
  );
}

function IconButton({
  label,
  pressed,
  onClick,
  children,
}: {
  label: string;
  pressed?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "grid h-11 w-11 place-items-center rounded-full transition",
        pressed ? "text-accent" : "text-muted hover:bg-paper hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-xs font-semibold text-paper" aria-hidden>
      {name.slice(0, 1).toUpperCase()}
    </span>
  );
}
