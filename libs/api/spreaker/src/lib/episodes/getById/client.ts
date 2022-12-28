import { HttpClient } from '@fe-observability/utils/http';
import { EpisodeGetByIdHttpClient, EpisodeResponseDto } from './model';

export function episodesGetByIdHttpClient(
  baseUrl: string,
  httpClient: HttpClient
): EpisodeGetByIdHttpClient {
  const getById = async (id: number) => {
    const response = await httpClient.get(
      `${baseUrl}/episodes/${id}`,
      EpisodeResponseDto
    );
    return response;
  };

  return {
    getById,
  };
}
