import { DateFormat } from '@fe-observability/ui';
import './Header.scss';

interface HeaderProps {
  imageUrl: string;

  title: string;

  authorLabel: string;

  author: string;

  likes: number;

  messages: number;

  publishedAt: string;
}

export default function Header({
  imageUrl,
  title,
  authorLabel,
  author,
  likes,
  messages,
  publishedAt,
}: HeaderProps) {
  return (
    <div className="header">
      <div className="header_image image is-128x128 is-hidden-mobile">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="header_info">
        <h1 className="title">{title}</h1>
        <div className="header_author">
          <span>{authorLabel} </span>
          <strong>{author}</strong>
        </div>
        <div className="header_social">
          <div className="likes">
            <span>{likes}</span>
            <span className="icon">
              <i className="far fa-heart"></i>
            </span>
          </div>
          <div className="comments">
            <span>{messages}</span>
            <span className="icon">
              <i className="far fa-comment-dots"></i>
            </span>
          </div>

          <div className="publish-date">
            <span className="icon">
              <i className="far fa-clock"></i>
            </span>
            <span>
              <DateFormat date={publishedAt} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
