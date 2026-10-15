// @/components/video/VideoCardCompact.jsx
import { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useImage } from '@/hooks/ui';
import { useAppNavigation } from '@/hooks/navigation';
import { useAuth } from '@/context/useAuth';
import { isActiveSubscriber } from '@/utils/subscription.utils.jsx';
import { Flame, Play } from 'lucide-react';
import { useVideoCardHover } from '@/hooks/useVideoCardHover';
import { formatDuration } from '@/utils/duration.utils';
import { useRelativeTime, useCompactNumber } from '@/hooks/shared';
import VideoBadges from '@/components/video/ui/VideoBadges';


/**
 * A compact card component to display video information.
 * @param {Object} video - Video data (shortId, title, cover, private, fixed, etc.)
 * @param {boolean} [trending=false] - Whether to show the trending flame icon
 * @param {number} index - The index of the video in the list
 */
const VideoCardCompact = memo(({ video, index, trending = false, hasDraggedRef }) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const location = useLocation();
  const { goToVideoPage, goToPlansModal } = useAppNavigation();
  const { imageSrc } = useImage({ pathImg: video?.cover });
  const isSuperAdmin = user?.adminPermissions?.role === 'super_admin';
  const isOwner = !!user && user.id === video?.user?.id;
  const canPrefetch = !video?.isPrivate || isActiveSubscriber(user) || isSuperAdmin || isOwner;
  const { handleMouseEnter, handleMouseLeave, handleTouchStart, handleTouchEnd } = useVideoCardHover(canPrefetch ? video?.shortId : null);
  const formatRelativeTime = useRelativeTime();
  const formatCompactNumber = useCompactNumber();

  const handleCardClick = useCallback(() => {
    if (hasDraggedRef?.current) {
      hasDraggedRef.current = false;
      return;
    }
    if (video.isPrivate && !isActiveSubscriber(user) && !isSuperAdmin && !isOwner) {
      goToPlansModal(video.shortId, location);
      return;
    }
    goToVideoPage(video.shortId);
  }, [goToVideoPage, goToPlansModal, video, user, isSuperAdmin, isOwner, location, hasDraggedRef]);

  const handleImageDragStart = (e) => e.preventDefault();

  return (
    <div
      className="group relative flex-shrink-0 w-64 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800
       bg-white dark:bg-zinc-950 shadow-sm hover:shadow-md transition-all duration-200 select-none cursor-pointer mb-2"
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick(e)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Accent glow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-(--ant-red)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Cover */}
      <div className="relative h-36 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={t('video:coverAlt', { title: video.title, defaultValue: 'Video' })}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            draggable={false}
            onDragStart={handleImageDragStart}
          />
        ) : (
          <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Duração - canto inferior direito da capa */}
        {video.duration != null && (
          <span className="absolute bottom-1.5 right-1.5 z-10 text-xs inline-flex items-center px-2 py-0.5 rounded-md font-semibold bg-black/70 text-white backdrop-blur-sm">
            {formatDuration(video.duration)}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h4 className="text-[1rem] font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-1">
          {Boolean(trending) && index < 3 && (
            <Flame
              fill="currentColor"
              size={16}
              className={`flex-shrink-0 animate-flame ${index === 0 ? 'text-red-500' :
                index === 1 ? 'text-orange-500' :
                  'text-yellow-500'
                }`}
            />
          )}
          <span className="truncate">{video.title}</span>
        </h4>

        {(video.createdAt || video.viewCount != null) && (
          <div className="text-[0.83rem] text-zinc-500 dark:text-zinc-400 mt-0.5 flex items-center gap-1">
            <Play size={11} className="flex-shrink-0" />
            <span>{formatCompactNumber(video.viewCount)}</span>
            <span>·</span>
            <span className={(Date.now() - new Date(video.createdAt).getTime()) < 86400000 ? 'text-blue-400' : ''}>
              {formatRelativeTime(video.createdAt)}
            </span>
          </div>
        )}

        {/* Labels */}
        <VideoBadges
          size="sm"
          isPrivate={video?.isPrivate}
          isPinned={video?.isFixed && !trending}
          isDubbed={video?.isDubbed}
        />
      </div>
    </div>
  );
});

export { VideoCardCompact };