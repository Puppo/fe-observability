import { TypeOf, z } from 'zod';
import { ResponseSchemaDto } from '../../common';

export const UserDto = z.object({
  user_id: z.number(),
  fullname: z.string(),
  site_url: z.string(),
  image_url: z.string(),
  image_original_url: z.string(),
  username: z.string(),
  description: z.string().nullable(),
  kind: z.string(),
  plan: z.string(),
  followers_count: z.number(),
  followings_count: z.number(),
  contact_email: z.string().nullable(),
  website_url: z.string().optional(),
  facebook_permalink: z.string().optional(),
  twitter_username: z.string().optional(),
});

export type UserDto = TypeOf<typeof UserDto>;

export const UserResponseDto = ResponseSchemaDto(
  z.object({
    user: UserDto,
  })
);

export type UserResponseDto = TypeOf<typeof UserResponseDto>;

export interface UserGetByIdHttpClient {
  getById: (id: number) => Promise<UserResponseDto>;
}
