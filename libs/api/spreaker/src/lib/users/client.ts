import { HttpClient } from '@fe-observability/utils/http';
import { userGetByIdHttpClient } from './getById/client';
import { UsersHttpClient } from './model';

export function usersHttpClient(
  baseUrl: string,
  httpClient: HttpClient
): UsersHttpClient {
  return {
    ...userGetByIdHttpClient(baseUrl, httpClient),
  };
}
