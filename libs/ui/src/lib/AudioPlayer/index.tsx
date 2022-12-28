import AudioPlayerHtml from './AudioPlayerHtml';
import AudioPlayerJs from './AudioPlayerJs';

interface AudioPlayerProps {
  kind: 'js' | 'html';
  type?: 'lite' | 'full';
  tracks: {
    title: string;
    artist: string;
    image: string;
    audioSrc: string;
    color: string;
  }[];
}

export function AudioPlayer({ kind, ...props }: AudioPlayerProps) {
  return kind === 'js' ? (
    <AudioPlayerJs {...props} />
  ) : (
    <AudioPlayerHtml {...props} />
  );
}
