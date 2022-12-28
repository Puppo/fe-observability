import Contact from '../Contact';

interface AuthorProps {
  author: {
    id: number;
    username: string;
    imageUrl: string;
    fullName: string;
    description: string | null;
    twitterUsername?: string;
    facebookLink?: string;
  };
}

export default function Author({ author }: AuthorProps) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by4">
          <img src={author.imageUrl} alt={author.fullName} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{author.fullName}</p>
            {author.description && (
              <p className="subtitle is-6">{author.description}</p>
            )}
          </div>
        </div>

        <div className="content">
          <p>
            {author.twitterUsername ? (
              <>
                <Contact
                  icon="fab fa-twitter"
                  url={`http://twitter.com/${author.twitterUsername}`}
                  text={author.twitterUsername}
                />
                <br />
              </>
            ) : null}
            {author.facebookLink ? (
              <Contact
                icon="fab fa-facebook"
                url={author.facebookLink}
                text={author.fullName}
              />
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
}
