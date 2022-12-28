import { HttpClient } from '@fe-observability/utils/http';
import { showsGetByIdHttpClient } from './getById/client';
import { ShowsHttpClient } from './model';
import { showsSearchHttpClient } from './search/client';

export function showsHttpClient(
  baseUrl: string,
  httpClient: HttpClient
): ShowsHttpClient {
  return {
    ...showsSearchHttpClient(baseUrl, httpClient),
    ...showsGetByIdHttpClient(baseUrl, httpClient),
  };
}
