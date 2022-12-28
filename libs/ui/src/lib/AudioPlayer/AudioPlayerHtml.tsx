import { useEffect, useRef, useState } from 'react';
import { TimeFormat } from '../TimeFormat';
import AudioControls from './AudioControls';

import './AudioPlayer.scss';
import Backdrop from './Backdrop';

interface AudioPlayerProps {
  type?: 'lite' | 'full';
  tracks: {
    title: string;
    artist: string;
    image: string;
    audioSrc: string;
    color: string;
  }[];
}

export default function AudioPlayer({
  type = 'lite',
  tracks,
}: AudioPlayerProps) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackStyling, setTrackStyling] = useState<string>('0');
  const [duration, setDuration] = useState(0);

  const { title, artist, image, color, audioSrc } = tracks[trackIndex];

  const audioRef = useRef<HTMLAudioElement>(null);
  const intervalRef = useRef<NodeJS.Timer>();
  const isReady = useRef(false);

  const onPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const onNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!audioRef.current) return;
      if (audioRef.current.ended) {
        onNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current
        .play()
        .then(() => {
          startTimer();
        })
        .catch(console.error);
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      if (!audioRef.current) return;

      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  // Handle setup when changing tracks
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          startTimer();
        })
        .catch(console.error);
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  const onScrub = (value: number) => {
    if (!audioRef.current) return;
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    const duration = audioRef.current?.duration || 0;
    setDuration(duration);
  }, [audioRef.current?.duration]);

  useEffect(() => {
    const currentPercentage = duration
      ? `${(trackProgress / duration) * 100}%`
      : '0%';
    setTrackStyling(
      `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))`
    );
  }, [trackProgress, duration]);

  return (
    <>
      <div className="audio-player">
        <div className="track-info">
          {type === 'full' && (
            <>
              <h2 className="audio-title">{title}</h2>
              <img
                className="artwork"
                src={image}
                alt={`track artwork for ${title} by ${artist}`}
              />
              <h3 className="artist">{artist}</h3>
            </>
          )}
          <AudioControls
            isPlaying={isPlaying}
            isPrevEnabled={trackIndex > 0}
            isNextEnabled={trackIndex < tracks.length - 1}
            onPrevClick={onPrevTrack}
            onNextClick={onNextTrack}
            onPlayPauseClick={setIsPlaying}
          />
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="progress"
            onChange={(e) => onScrub(e.target.valueAsNumber)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
          />
        </div>
        <Backdrop
          trackIndex={trackIndex}
          activeColor={color}
          isPlaying={isPlaying}
        />
        <div className="time-info">
          <div className="current-time">
            <TimeFormat time={trackProgress * 1000} />
          </div>
          <div className="duration">
            <TimeFormat time={duration * 1000} />
          </div>
        </div>
      </div>
      <audio ref={audioRef}>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
    </>
  );
}
