import { useEffect } from 'react';

interface BackdropProps {
  activeColor: string;
  trackIndex: number;
  isPlaying: boolean;
}

export default function Backdrop({
  activeColor,
  trackIndex,
  isPlaying,
}: BackdropProps) {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-color', activeColor);
  }, [trackIndex]);

  return <div className={`color-backdrop ${isPlaying ? 'playing' : 'idle'}`} />;
}
