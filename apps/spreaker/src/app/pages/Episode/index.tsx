import {
  EpisodeDto,
  spreakerHttpClient,
  UserDto,
} from '@fe-observability/api/spreaker';
import { AudioPlayer, ErrorBoundary } from '@fe-observability/ui';
import { usePackageInfo } from '@fe-observability/utils/package-info';

import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import Author from './components/Author';
import Header from './components/Header';
import Info from './components/Info';

function Episode() {
  const { episodeId: episodeIdParam } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const audioPlayerType: 'js' | 'html' =
    query.get('audioPlayer') === 'js' ? 'js' : 'html';
  const [episodeId, setEpisodeId] = useState<number | null>(null);
  const [episode, setEpisode] = useState<EpisodeDto | null>(null);
  const [user, setUser] = useState<UserDto | null>(null);

  useEffect(() => {
    const episodeId = (episodeIdParam && parseInt(episodeIdParam, 10)) || null;
    setEpisodeId(episodeId);
  }, [episodeIdParam]);

  useEffect(() => {
    if (!episodeId) return;
    setEpisode(null);
    spreakerHttpClient.episodes
      .getById(episodeId)
      .then(({ response: { episode } }) => {
        return spreakerHttpClient.users
          .getById(episode.author_id)
          .then(({ response: { user } }) => {
            return { episode, user };
          });
      })
      .then(({ episode, user }) => {
        setEpisode(episode);
        setUser(user);
      })
      .catch(console.error);
  }, [episodeId]);

  return !episode || !user ? null : (
    <>
      <section className="hero is-warning">
        <div className="hero-body">
          <div className="container">
            <Header
              imageUrl={episode?.image_url}
              title={episode?.title}
              authorLabel={'by'}
              author={user.username}
              likes={episode?.likes_count}
              messages={episode?.messages_count}
              publishedAt={episode.published_at}
            />
            <div className="episode-player">
              <AudioPlayer
                kind={audioPlayerType}
                tracks={[
                  {
                    title: episode.title,
                    artist: user.username,
                    image: episode.image_url,
                    audioSrc: episode.playback_url,
                    color: '#f5f5f5',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container">
          <div className="columns is-three-quarters-tablet">
            <div className="column">
              <Info
                descriptionLabel="Description"
                description={episode.description}
              />
            </div>
            <div className="column is-one-quarter">
              <Author
                author={{
                  id: user.user_id,
                  username: user.username,
                  imageUrl: user.image_url,
                  fullName: user.fullname,
                  description: user.description,
                  twitterUsername: user.twitter_username,
                  facebookLink: user.facebook_permalink,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function EpisodeWithErrorBoundary() {
  const { name, version, environment } = usePackageInfo();
  return (
    <ErrorBoundary
      name="Episode"
      packageName={name}
      packageVersion={version}
      environment={environment}
    >
      <Episode />
    </ErrorBoundary>
  );
}
