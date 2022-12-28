import { EpisodeGetByIdHttpClient } from './getById/model';
import { EpisodesListByShowHttpClient } from './listByShow/model';

export type EpisodesHttpClient = EpisodesListByShowHttpClient &
  EpisodeGetByIdHttpClient;
