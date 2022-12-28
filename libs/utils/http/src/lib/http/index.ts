import { fetchHttpClient } from './fetchHttpClient';

export type { HttpClient } from './model';
export const httpClient = fetchHttpClient();
