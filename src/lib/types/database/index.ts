import type { Filter, Document } from 'mongodb';

import type { Specie } from './models';

export type FilterSpecie = Filter<Document & Specie>;
