import ReactMarkdown from 'react-markdown';
import './Info.scss';

interface InfoProps {
  descriptionLabel: string;

  description: string;
}

export default function Info({ descriptionLabel, description }: InfoProps) {
  return (
    <div className="info">
      <h1 className="is-size-1">{descriptionLabel}</h1>
      <article>
        <ReactMarkdown>{description}</ReactMarkdown>
      </article>
    </div>
  );
}
