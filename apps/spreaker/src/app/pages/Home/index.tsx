import {
  ShowSearchItemDto,
  ShowSearchItemErrorDto,
  spreakerHttpClient,
} from '@fe-observability/api/spreaker';
import {
  ErrorBoundary,
  InputSearch,
  InputSearchOption,
  useAsyncError,
} from '@fe-observability/ui';
import { usePackageInfo } from '@fe-observability/utils/package-info';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Home.scss';

function Home() {
  const throwAsyncError = useAsyncError();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const homeType: 'error' | 'ok' =
    query.get('responseType') === 'error' ? 'error' : 'ok';
  const [searchTerms, setSearchTerms] = useState<string | undefined>(undefined);
  const [shows, setShows] = useState<
    InputSearchOption<ShowSearchItemDto | ShowSearchItemErrorDto>[]
  >([]);

  useEffect(() => {
    setShows([]);
    if (!searchTerms) return;
    const searchFn =
      homeType === 'error'
        ? spreakerHttpClient.shows.searchWithError
        : spreakerHttpClient.shows.search;
    searchFn(searchTerms)
      .then((response) => {
        const shows = response.response.items.map((item) => ({
          value: item.show_id,
          label: item.title,
          model: item,
          link: `/shows/${item.show_id}`,
        }));
        setShows(shows);
      })
      .catch((e) => {
        throwAsyncError(e);
      });
  }, [searchTerms]);

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerms(e.target.value);
  }

  return (
    <div className="home">
      <div className="home_content">
        <div className="home_content_logo"></div>
        <form className="home_content_widget">
          <InputSearch
            placeholder="Search for a podcast"
            onChange={onSearchChange}
            options={shows}
          />
        </form>
      </div>
    </div>
  );
}

export default function HomeWithErrorBoundary() {
  const { name, version, environment } = usePackageInfo();
  return (
    <ErrorBoundary
      name="Home"
      packageName={name}
      packageVersion={version}
      environment={environment}
    >
      <Home />
    </ErrorBoundary>
  );
}
