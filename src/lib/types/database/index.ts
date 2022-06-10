import type { Filter, Document } from 'mongodb';

export type CustomFilter<T> = Filter<Document & T>;
