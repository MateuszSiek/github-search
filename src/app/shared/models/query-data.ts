import { SortObject } from "../../search/models/sort";

export interface QueryData {
  query: string;
  page: number;
  sort: SortObject
}
