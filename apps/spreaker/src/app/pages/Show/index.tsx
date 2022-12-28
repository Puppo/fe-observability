import {
  EpisodeListItemDto,
  ShowDto,
  spreakerHttpClient,
} from '@fe-observability/api/spreaker';
import { ErrorBoundary } from '@fe-observability/ui';
import { usePackageInfo } from '@fe-observability/utils/package-info';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Episode from './components/Episode';
import Footer from './components/Footer';
import Header from './components/Header';

function Show() {
  const { showId: showIdParam } = useParams();
  const [showId, setShowId] = useState<number | null>(null);
  const [show, setShow] = useState<ShowDto | undefined>(undefined);
  const [episodes, setEpisodes] = useState<EpisodeListItemDto[]>([]);

  useEffect(() => {
    setShow(undefined);
    const showId = (showIdParam && parseInt(showIdParam, 10)) || null;
    setShowId(showId);
  }, [showIdParam]);

  useEffect(() => {
    if (!showId) return;
    setShow(undefined);
    spreakerHttpClient.shows
      .getById(showId)
      .then(({ response }) => {
        setShow(response.show);
      })
      .catch(console.error);
  }, [showId]);

  useEffect(() => {
    if (!showId) return;
    setEpisodes([]);
    spreakerHttpClient.episodes
      .list(showId)
      .then(({ response }) => {
        setEpisodes(response.items);
      })
      .catch(console.error);
  }, [showId]);

  return !show ? null : (
    <>
      <Header
        title={show.title}
        description={show.description}
        image={show.image_url}
      ></Header>

      <section className="container episodes">
        <div className="show-episodes">
          {episodes.map((episode) => (
            <Episode
              key={episode.episode_id}
              episode={{
                episode_id: episode.episode_id,
                title: episode.title,
                duration: episode.duration,
                link: `/shows/${showId}/episodes/${episode.episode_id}`,
              }}
            />
          ))}
        </div>
      </section>

      <Footer
        title={show.title}
        site={show.site_url}
        author={show.author.fullname}
      />
    </>
  );
}

export default function ShowWithErrorBoundary() {
  const { name, version, environment } = usePackageInfo();
  return (
    <ErrorBoundary
      name="Show"
      packageName={name}
      packageVersion={version}
      environment={environment}
    >
      <Show />
    </ErrorBoundary>
  );
}
