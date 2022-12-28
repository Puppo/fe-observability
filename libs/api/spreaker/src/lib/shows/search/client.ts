import { HttpClient } from '@fe-observability/utils/http';
import { ZodSchema } from 'zod';
import { Pagination } from '../../common';
import {
  SearchShowsResponseDto,
  SearchShowsResponseErrorDto,
  ShowSearchHttpClient,
} from './model';

export function showsSearchHttpClient(
  baseUrl: string,
  httpClient: HttpClient
): ShowSearchHttpClient {
  const search =
    <Schema extends ZodSchema<unknown>>(schema: Schema) =>
    async (
      query: string,
      { offset, limit }: Pagination = { offset: 0, limit: 10 }
    ) => {
      const response = await httpClient.get(`${baseUrl}/search`, schema, {
        query: {
          type: 'shows',
          q: query,
          offset: offset.toString(),
          limit: limit.toString(),
        },
      });
      return response;
    };

  return {
    search: search(SearchShowsResponseDto),
    searchWithError: search(SearchShowsResponseErrorDto),
  };
}
