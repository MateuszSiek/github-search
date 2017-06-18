import { Owner } from "./owner";

export interface Repository {
  id: number;
  name: string;
  description: string;
  full_name: string;
  owner: Owner;
  private: boolean;
  html_url: string;

  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;

  has_issues: boolean;
  open_issues_count: number;

  created_at: number;
  updated_at: number;
}
