import { httpClient } from '@fe-observability/utils/http';
import { episodesHttpClient } from './episodes/client';
import { EpisodesHttpClient } from './episodes/model';
import { showsHttpClient } from './shows/client';
import { ShowsHttpClient } from './shows/model';
import { usersHttpClient } from './users/client';
import { UsersHttpClient } from './users/model';

const baseUrl = 'https://api.spreaker.com/v2';

export interface SpreakerHttpClient {
  shows: ShowsHttpClient;
  episodes: EpisodesHttpClient;
  users: UsersHttpClient;
}

export const spreakerHttpClient: SpreakerHttpClient = {
  shows: showsHttpClient(baseUrl, httpClient),
  episodes: episodesHttpClient(baseUrl, httpClient),
  users: usersHttpClient(baseUrl, httpClient),
};
