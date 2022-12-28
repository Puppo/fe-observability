import { TypeOf, z } from 'zod';
import { ResponseSchemaDto } from '../../common';

const ShowDto = z.object({
  description: z.string(),
  title: z.string(),
  facebook_url: z.string().url().optional().nullable(),
  image_original_url: z.string().url(),
  image_url: z.string().url(),
  show_id: z.number(),
  site_url: z.string().url().optional().nullable(),
  skype_name: z.string().optional().nullable(),
  sms_number: z.string().optional().nullable(),
  tel_number: z.string().optional().nullable(),
  twitter_name: z.string().optional().nullable(),
  website_url: z.string().optional().nullable(),
  author: z.object({
    description: z.string().optional().nullable(),
    fullname: z.string(),
    image_original_url: z.string().url(),
    image_url: z.string().url(),
    kind: z.string(),
    site_url: z.string().url().optional().nullable(),
    username: z.string(),
    user_id: z.number(),
  }),
});

export type ShowDto = TypeOf<typeof ShowDto>;

export const ShowResponseDto = ResponseSchemaDto(
  z.object({
    show: ShowDto,
  })
);

export type ShowResponseDto = TypeOf<typeof ShowResponseDto>;

export interface ShowGetByIdHttpClient {
  getById: (id: number) => Promise<ShowResponseDto>;
}
