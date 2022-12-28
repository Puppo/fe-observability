import { TypeOf, ZodSchema } from 'zod';

export interface HttpClient {
  get: <TSchema extends ZodSchema<unknown>>(
    url: string,
    schema: TSchema,
    opts?: {
      headers?: Record<string, string>;
      query?: Record<string, string>;
    }
  ) => Promise<TypeOf<TSchema>>;
}
