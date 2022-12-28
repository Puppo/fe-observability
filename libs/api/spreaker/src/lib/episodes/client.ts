import { HttpClient } from '@fe-observability/utils/http';
import { episodesGetByIdHttpClient } from './getById/client';
import { episodesListByShowHttpClient } from './listByShow/client';
import { EpisodesHttpClient } from './model';

export function episodesHttpClient(
  baseUrl: string,
  httpClient: HttpClient
): EpisodesHttpClient {
  return {
    ...episodesListByShowHttpClient(baseUrl, httpClient),
    ...episodesGetByIdHttpClient(baseUrl, httpClient),
  };
}
