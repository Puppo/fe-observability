import { TypeOf, z } from 'zod';
import { Pagination, ResponseListSchemaDto } from '../../common';

const EpisodeListItemDto = z.object({
  episode_id: z.number(),
  type: z.union([
    z.literal('DRAFT'),
    z.literal('RECORDED'),
    z.literal('LIVE'),
    z.literal('EXTERNAL'),
  ]),
  title: z.string(),
  duration: z.number(),
  show_id: z.number(),
  author_id: z.number(),
  site_url: z.string().url(),
  image_url: z.string().url().optional(),
  image_original_url: z.string().url().optional(),
  published_at: z.string(),
  download_enabled: z.boolean(),
});

export type EpisodeListItemDto = TypeOf<typeof EpisodeListItemDto>;

export const EpisodeListByShowResponseDto =
  ResponseListSchemaDto(EpisodeListItemDto);

export type EpisodeListByShowResponseDto = TypeOf<
  typeof EpisodeListByShowResponseDto
>;

export interface EpisodesListByShowHttpClient {
  list: (
    showId: number,
    pagination?: Pagination
  ) => Promise<EpisodeListByShowResponseDto>;
}
