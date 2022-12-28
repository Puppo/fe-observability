import { HttpClient } from '@fe-observability/utils/http';
import { UserGetByIdHttpClient, UserResponseDto } from './model';

export function userGetByIdHttpClient(
  baseUrl: string,
  httpClient: HttpClient
): UserGetByIdHttpClient {
  const getById = async (id: number) => {
    const response = await httpClient.get(
      `${baseUrl}/users/${id}`,
      UserResponseDto
    );
    return response;
  };

  return {
    getById,
  };
}
