import { useEffect } from "react";
import { BadgeCheck, Lock, Pause, Play, X } from "lucide-react";
import type { Video } from "@/data/catalog";
import { formatDuration } from "@/lib/format";

export function QuickLook({
  video,
  position,
  playing,
  onClose,
  onToggle,
  onSave,
  saved,
  onQueue,
  queued,
}: {
  video: Video;
  position: number;
  playing: boolean;
  onClose: () => void;
  onToggle: () => void;
  onSave: () => void;
  saved: boolean;
  onQueue: () => void;
  queued: boolean;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  const pct = Math.min(100, (position / Math.max(video.duration, 1)) * 100);
  const ended = position >= video.duration - 0.4 && position > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-3 sm:items-center" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-title"
        className="grid max-h-[92dvh] w-full max-w-3xl overflow-hidden rounded-2xl bg-card shadow-xl sm:grid-cols-2"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-video bg-frame">
          <img src={video.cover} alt="" className="h-full w-full object-cover" />
          <button
            type="button"
            onClick={onToggle}
            className="absolute bottom-3 left-3 z-20 inline-flex min-h-11 items-center gap-2 rounded-full bg-paper px-4 text-sm font-semibold text-ink"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" fill="currentColor" />}
            {ended ? "De novo" : playing ? "Pausar" : position > 0 ? "Continuar" : "Assistir"}
          </button>
          <div className="absolute inset-x-0 bottom-0 z-20 h-1 bg-paper/40">
            <div className="h-full bg-accent" style={{ width: `${ended ? 100 : pct}%` }} />
          </div>
        </div>
        <div className="flex flex-col gap-3 overflow-y-auto p-5">
          <div className="flex items-start justify-between gap-3">
            <h2 id="quick-title" className="text-xl font-semibold leading-snug text-balance text-ink">
              {video.title}
            </h2>
            <button type="button" onClick={onClose} aria-label="Fechar" className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted hover:bg-paper">
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-muted tabular-nums">
            {formatDuration(position)} / {formatDuration(video.duration)}
          </p>
          <p className="text-pretty text-sm leading-relaxed text-ink">{video.blurb}</p>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-ink">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-xs text-paper">
              {video.user.username.slice(0, 1).toUpperCase()}
            </span>
            {video.user.username}
            {video.user.verified && <BadgeCheck className="h-4 w-4 text-accent" aria-label="Verificado" />}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            <button type="button" onClick={onSave} className="min-h-11 rounded-full bg-ink px-4 text-sm font-semibold text-paper">
              {saved ? "Salvo" : "Ver depois"}
            </button>
            <button type="button" onClick={onQueue} className="min-h-11 rounded-full border border-line px-4 text-sm font-semibold text-ink">
              {queued ? "Na fila" : "Adicionar à fila"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlansDialog({ video, onClose, onPretend }: { video: Video; onClose: () => void; onPretend: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-3 sm:items-center" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="plans-title"
        className="w-full max-w-md overflow-hidden rounded-2xl bg-card shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-video bg-frame">
          <img src={video.cover} alt="" className="h-full w-full object-cover" />
          <span className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-on-accent">
            <Lock className="h-3 w-3" /> Privado
          </span>
        </div>
        <div className="flex flex-col gap-3 p-5">
          <h2 id="plans-title" className="text-xl font-semibold text-balance text-ink">
            Esse vídeo pede assinatura
          </h2>
          <p className="text-pretty text-sm leading-relaxed text-muted">
            O card continua levando visitante para os planos. Assinante, dono e admin entram direto — igual na sua regra atual.
          </p>
          <button type="button" onClick={onPretend} className="min-h-11 rounded-full bg-accent px-4 text-sm font-semibold text-on-accent">
            Virar assinante e assistir
          </button>
          <button type="button" onClick={onClose} className="min-h-11 rounded-full text-sm font-medium text-muted">
            Agora não
          </button>
        </div>
      </div>
    </div>
  );
}

export function Toast({ message }: { message: string }) {
  return (
    <div className="fixed top-20 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper shadow-lg" role="status">
      {message}
    </div>
  );
}
