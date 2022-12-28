import { TypeOf, z } from 'zod';
import { Pagination, ResponseListSchemaDto } from '../../common';

const ShowSearchItemDto = z.object({
  show_id: z.number(),
  title: z.string(),
  site_url: z.string(),
  image_url: z.string().optional(),
  author_id: z.number(),
});

export type ShowSearchItemDto = TypeOf<typeof ShowSearchItemDto>;

export const SearchShowsResponseDto = ResponseListSchemaDto(ShowSearchItemDto);

export type SearchShowsResponseDto = TypeOf<typeof SearchShowsResponseDto>;

export interface ShowSearchHttpClient {
  search: (
    query: string,
    pagination?: Pagination
  ) => Promise<SearchShowsResponseDto>;
}
