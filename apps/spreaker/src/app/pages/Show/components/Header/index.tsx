import './Header.scss';

interface HeaderProps {
  image: string;

  title: string;

  description: string;
}

export default function Header({ image, title, description }: HeaderProps) {
  return (
    <section className="header hero is-medium is-warning is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="image is-128x128 is-hidden-mobile">
            <img src={image} alt={title} />
          </div>
          <div>
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">“{description}“</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
