import { HttpClient } from '@fe-observability/utils/http';
import { Pagination } from '../../common';
import {
  EpisodeListByShowResponseDto,
  EpisodesListByShowHttpClient,
} from './model';

export function episodesListByShowHttpClient(
  baseUrl: string,
  httpClient: HttpClient
): EpisodesListByShowHttpClient {
  const list = async (showId: number, pagination?: Pagination) => {
    const response = await httpClient.get(
      `${baseUrl}/shows/${showId}/episodes`,
      EpisodeListByShowResponseDto,
      {
        query: {
          type: 'episodes',
          offset: pagination?.offset.toString() || '',
          limit: pagination?.limit.toString() || '',
        },
      }
    );
    return response;
  };

  return {
    list,
  };
}
