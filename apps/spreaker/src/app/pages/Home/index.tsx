import {
  ShowSearchItemDto,
  spreakerHttpClient,
} from '@fe-observability/api/spreaker';
import { InputSearch, InputSearchOption } from '@fe-observability/ui';
import { useEffect, useState } from 'react';

import './Home.scss';

export default function Home() {
  const [searchTerms, setSearchTerms] = useState<string | undefined>(undefined);
  const [shows, setShows] = useState<InputSearchOption<ShowSearchItemDto>[]>(
    []
  );

  useEffect(() => {
    setShows([]);
    if (!searchTerms) return;
    spreakerHttpClient.shows
      .search(searchTerms)
      .then((response) => {
        const shows = response.response.items.map((item) => ({
          value: item.show_id,
          label: item.title,
          model: item,
          link: `/shows/${item.show_id}`,
        }));
        setShows(shows);
      })
      .catch(console.error);
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
