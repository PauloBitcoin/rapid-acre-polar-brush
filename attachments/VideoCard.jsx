// @/components/video/VideoCard.jsx
import { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useImage } from '@/hooks/ui';
import { useAppNavigation } from '@/hooks/navigation';
import { useAuth } from '@/context/useAuth';
import { isActiveSubscriber } from '@/utils/subscription.utils.jsx';
import { Play } from 'lucide-react';
import VideoBadges from '@/components/video/ui/VideoBadges';
import VerifiedBadge from '@/components/ui/VerifiedBadge';
import UserAvatar from '@/components/ui/UserAvatar';
import { useVideoCardHover } from '@/hooks/useVideoCardHover';
import { formatDuration } from '@/utils/duration.utils';
import { useRelativeTime, useCompactNumber } from '@/hooks/shared';

const VideoCard = ({ video, priority = false }) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const location = useLocation();
  const { goToUserPage, goToVideoPage, getVideoPlayUrl, goToTagPage, goToPlansModal } = useAppNavigation();

  const { imageSrc: coverSrc } = useImage({ pathImg: video?.cover });
  const formatRelativeTime = useRelativeTime();
  const formatCompactNumber = useCompactNumber();
  const isSuperAdmin = user?.adminPermissions?.role === 'super_admin';
  const isOwner = !!user && user.id === video?.user?.id;
  const canPrefetch = !video?.isPrivate || isActiveSubscriber(user) || isSuperAdmin || isOwner;
  const { handleMouseEnter, handleMouseLeave, handleTouchStart, handleTouchEnd } = useVideoCardHover(canPrefetch ? video?.shortId : null);

  const handleVideoClick = useCallback((e) => {
    e.preventDefault();
    if (video.isPrivate && !isActiveSubscriber(user) && !isSuperAdmin && !isOwner) {
      goToPlansModal(video.shortId, location);
      return;
    }
    goToVideoPage(video.shortId);
  }, [goToVideoPage, goToPlansModal, video, user, isSuperAdmin, isOwner, location]);

  const handleUploaderClick = useCallback((e) => {
    e.preventDefault();
    goToUserPage(video.user?.username);
  }, [goToUserPage, video]);

  const hasResumeProgress = video?.resumePosition > 0 && video?.duration > 0;

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 shadow-sm hover:shadow-md transition-all duration-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {/* Accent glow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-(--ant-red)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Cover */}
      <a
        title={video.title}
        href={getVideoPlayUrl(video.shortId)}
        onClick={handleVideoClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative block h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-900 shrink-0"
      >
        {coverSrc ? (
          <img
            src={coverSrc}
            alt={t('video:coverAlt', { title: video.title, defaultValue: 'Video' })}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading={priority ? 'eager' : 'lazy'}
            fetchpriority={priority ? 'high' : 'auto'}
          />
        ) : (
          <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Duração - canto inferior direito da capa */}
        {video.duration != null && (
          <span
            className={`absolute right-2 z-10 text-[0.83rem] inline-flex items-center px-2 py-0.5 rounded-md font-semibold bg-black/70 text-white backdrop-blur-sm ${hasResumeProgress ? 'bottom-3' : 'bottom-2'}`}
          >
            {formatDuration(video.duration)}
          </span>
        )}

        {/* Resume progress */}
        {hasResumeProgress && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/40 z-10">
            <div
              role="progressbar"
              aria-valuenow={Math.min(100, Math.round((video.resumePosition / video.duration) * 100))}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-full bg-(--ant-red) transition-all"
              style={{ width: `${Math.min(100, (video.resumePosition / video.duration) * 100)}%` }}
            />
          </div>
        )}
      </a>

      {/* Info */}
      <div className="flex flex-col px-3 pt-2.5 pb-1 gap-0.5">
        {/* Tags - no máximo 2 linhas */}
        {Array.isArray(video?.tags) && video.tags.length > 0 && (
          <p className="text-[0.8rem] leading-snug line-clamp-2">
            {video.tags.map((tag) => (
              <button
                key={tag.id ?? tag.tag}
                onClick={() => goToTagPage(tag.tag)}
                className="inline mr-2 text-blue-500 dark:text-blue-400 hover:underline transition-colors"
              >
                #{tag.tag}
              </button>
            ))}
          </p>
        )}

        <a
          title={video.title}
          href={getVideoPlayUrl(video.shortId)}
          onClick={handleVideoClick}
        >
          <h3 className="font-bold text-[1.1rem] leading-snug tracking-tight text-zinc-900 dark:text-white line-clamp-2">
            {video.title}
          </h3>
        </a>
        <div className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
          <Play size={12} className="flex-shrink-0" />
          <span>{formatCompactNumber(video.viewCount)}</span>
          <span>·</span>
          <span className={(Date.now() - new Date(video.createdAt).getTime()) < 86400000 ? 'text-blue-400' : ''}>
            {formatRelativeTime(video.createdAt)}
          </span>
        </div>

        {/* Labels */}
        <VideoBadges
          size="md"
          isPrivate={video?.isPrivate}
          isPinned={video?.isFixed}
          isDubbed={video?.isDubbed}
          className="mt-1.5"
        />
      </div>

      {/* User */}
      {video.user?.username && (
        <div className="px-3 pb-2 pt-1.5">
          <a
            href={`/@${video.user.username}`}
            onClick={handleUploaderClick}
            className="inline-flex items-center gap-2 w-fit cursor-pointer"
          >
            <UserAvatar user={video.user} size="sm" />
            <div className="flex items-center gap-1 min-w-0">
              <span className="text-md font-medium text-black dark:text-zinc-100 hover:underline transition-colors break-words">
                {video.user.username}
              </span>
              <VerifiedBadge verified={video.user.verified} size="sm" trending={false} />
            </div>
          </a>
        </div>
      )}

    </div>
  );
};

export default memo(VideoCard);
export { VideoCard };