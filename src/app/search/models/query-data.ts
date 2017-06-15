import { Direction } from "./sort";

export interface QueryData {
  query: string;
  page: number;
  sort: {
    field: string;
    direction: Direction;
  }
}
