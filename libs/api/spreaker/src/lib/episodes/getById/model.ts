import { TypeOf, z } from 'zod';
import { ResponseSchemaDto } from '../../common';

const EpisodeDto = z.object({
  episode_id: z.number(),
  type: z.string(),
  title: z.string(),
  duration: z.number(),
  show_id: z.number(),
  author_id: z.number(),
  site_url: z.string().url(),
  image_url: z.string().url(),
  image_original_url: z.string().url(),
  published_at: z.string(),
  download_enabled: z.boolean(),
  download_url: z.string().url(),
  playback_url: z.string().url(),
  description: z.string(),
  plays_count: z.number(),
  plays_ondemand_count: z.number(),
  plays_live_count: z.number(),
  downloads_count: z.number(),
  likes_count: z.number(),
  messages_count: z.number(),
});

export type EpisodeDto = TypeOf<typeof EpisodeDto>;

export const EpisodeResponseDto = ResponseSchemaDto(
  z.object({
    episode: EpisodeDto,
  })
);

export type EpisodeResponseDto = TypeOf<typeof EpisodeResponseDto>;

export interface EpisodeGetByIdHttpClient {
  getById: (id: number) => Promise<EpisodeResponseDto>;
}
