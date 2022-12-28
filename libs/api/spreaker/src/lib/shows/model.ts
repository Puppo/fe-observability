import { ShowGetByIdHttpClient } from './getById/model';
import { ShowSearchHttpClient } from './search/model';

export type ShowsHttpClient = ShowSearchHttpClient & ShowGetByIdHttpClient;
