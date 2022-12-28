import clsx from 'clsx';
import './AudioControls.scss';

interface AudioControlsProps {
  isPlaying: boolean;
  isPrevEnabled: boolean;
  isNextEnabled: boolean;
  onPlayPauseClick: (state: boolean) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export default function AudioControls({
  isPlaying,
  isPrevEnabled,
  isNextEnabled,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: AudioControlsProps) {
  return (
    <div className="audio-controls">
      <button
        type="button"
        className={clsx('prev', {
          disabled: !isPrevEnabled,
        })}
        aria-label="Previous"
        onClick={() => isPrevEnabled && onPrevClick()}
      >
        <span className="icon">
          <i className="fas fa-backward fa-2x"></i>
        </span>
      </button>
      {isPlaying ? (
        <button
          type="button"
          className="pause"
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <span className="icon">
            <i className="fas fa-pause fa-2x"></i>
          </span>
        </button>
      ) : (
        <button
          type="button"
          className="play"
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <span className="icon">
            <i className="fas fa-play fa-2x"></i>
          </span>
        </button>
      )}
      <button
        type="button"
        className={clsx('next', {
          disabled: !isPrevEnabled,
        })}
        aria-label="Next"
        onClick={() => isNextEnabled && onNextClick()}
      >
        <span className="icon">
          <i className="fas fa-forward fa-2x"></i>
        </span>
      </button>
    </div>
  );
}
