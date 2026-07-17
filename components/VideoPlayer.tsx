function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

function getGoogleDriveId(url: string): string | null {
  const match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export default function VideoPlayer({ src }: { src: string }) {
  const ytId = getYouTubeId(src);
  const driveId = getGoogleDriveId(src);

  if (ytId) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--border)]">
        <iframe
          src={`https://www.youtube.com/embed/${ytId}`}
          title="Project demo video"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  if (driveId) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--border)]">
        <iframe
          src={`https://drive.google.com/file/d/${driveId}/preview`}
          title="Project demo video"
          className="absolute inset-0 w-full h-full"
          allow="autoplay"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <video src={src} controls className="w-full rounded-lg border border-[var(--border)]" />
  );
}