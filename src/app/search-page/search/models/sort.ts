export enum Direction {
  ASC = 1,
  NONE = 0,
  DESC = -1
}

export interface SortInputField {
  field: string;
  display: string;
}

export interface SortObject {
  field: string;
  direction: Direction;
}
