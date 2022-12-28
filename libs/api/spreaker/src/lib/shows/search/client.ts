import { HttpClient } from '@fe-observability/utils/http';
import { Pagination } from '../../common';
import { SearchShowsResponseDto, ShowSearchHttpClient } from './model';

export function showsSearchHttpClient(
  baseUrl: string,
  httpClient: HttpClient
): ShowSearchHttpClient {
  const search = async (
    query: string,
    { offset, limit }: Pagination = { offset: 0, limit: 10 }
  ) => {
    const response = await httpClient.get(
      `${baseUrl}/search`,
      SearchShowsResponseDto,
      {
        query: {
          type: 'shows',
          q: query,
          offset: offset.toString(),
          limit: limit.toString(),
        },
      }
    );
    return response;
  };

  return {
    search,
  };
}
