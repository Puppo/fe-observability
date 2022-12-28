import { TimeFormat } from '@fe-observability/ui';
import { Link } from 'react-router-dom';
import './Episode.scss';

interface EpisodeProps {
  episode: {
    episode_id: number;
    title: string;
    duration: number;
    link: string;
  };
}

export default function Episode({ episode }: EpisodeProps) {
  return (
    <Link to={episode.link} className="episode">
      <div className="icon">
        <span className="icon is-large">
          <i className="far fa-2x fa-play-circle"></i>
        </span>
      </div>
      <div className="name">
        <span>{episode.title}</span>
      </div>
      <div className="duration">
        <span>
          <TimeFormat time={episode.duration} />
        </span>
      </div>
    </Link>
  );
}
