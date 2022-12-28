import { z, ZodSchema } from 'zod';

export const ResponseSchemaDto = <T extends ZodSchema<unknown>>(schema: T) =>
  z.object({
    response: schema,
  });
