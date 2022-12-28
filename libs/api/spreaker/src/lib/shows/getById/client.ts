import { HttpClient } from '@fe-observability/utils/http';
import { ShowGetByIdHttpClient, ShowResponseDto } from './model';

export function showsGetByIdHttpClient(
  baseUrl: string,
  httpClient: HttpClient
): ShowGetByIdHttpClient {
  const getById = async (id: number) => {
    const response = await httpClient.get(
      `${baseUrl}/shows/${id}`,
      ShowResponseDto
    );
    return response;
  };

  return {
    getById,
  };
}
