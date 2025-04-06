import { knex } from 'knex';
import type { KnexOptions } from './interfaces';

export const createKnexConnection = (options: KnexOptions): any =>
  knex(options);
