import { z, ZodSchema } from 'zod';

export const ResponseListSchemaDto = <T extends ZodSchema<unknown>>(
  schema: T
) =>
  z.object({
    response: z.object({
      items: z.array(schema),
    }),
    next_url: z.string().optional(),
  });
