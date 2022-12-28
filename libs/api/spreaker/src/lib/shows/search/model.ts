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

const ShowSearchItemErrorDto = z.object({
  show_id: z.string(),
  title: z.string(),
  site_url: z.string(),
  image_url: z.string().optional(),
  author_id: z.number(),
});

export type ShowSearchItemErrorDto = TypeOf<typeof ShowSearchItemErrorDto>;

export const SearchShowsResponseErrorDto = ResponseListSchemaDto(
  ShowSearchItemErrorDto
);

export type SearchShowsResponseErrorDto = TypeOf<
  typeof SearchShowsResponseErrorDto
>;

export interface ShowSearchHttpClient {
  search: (
    query: string,
    pagination?: Pagination
  ) => Promise<SearchShowsResponseDto>;
  searchWithError: (
    query: string,
    pagination?: Pagination
  ) => Promise<SearchShowsResponseErrorDto>;
}
