import { TypeOf, ZodSchema } from 'zod';
import { HttpClient } from './model';

export const fetchHttpClient: () => HttpClient = () => {
  const get = async <TSchema extends ZodSchema<unknown>>(
    url: string,
    schema: TSchema,
    opts?: {
      headers?: Record<string, string>;
      query?: Record<string, string>;
    }
  ): Promise<TypeOf<TSchema>> => {
    const query = opts?.query || {};
    const queryParams = new URLSearchParams(query);
    const queryString =
      queryParams.toString().length > 0 ? `?${queryParams.toString()}` : '';
    const response = await fetch(url + queryString, {
      headers: opts?.headers,
    });

    const json = await response.json();
    return schema.parse(json);
  };

  return {
    get,
  };
};
