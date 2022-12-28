import { Link } from 'react-router-dom';

interface FooterProps {
  title: string;

  site?: string | null;

  author: string;
}

export default function Footer({ title, site, author }: FooterProps) {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>{title}</strong> by{` `}
          <Link to={site || '#'} target="_blank" rel="noreferrer">
            {author}
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
