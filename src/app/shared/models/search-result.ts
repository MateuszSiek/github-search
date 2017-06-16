import {Repository} from "./repository";
import {RequestError} from "./request-error";

export interface SearchResult {
  total_count: number;
  items: Repository[];
  error?: RequestError;
}
