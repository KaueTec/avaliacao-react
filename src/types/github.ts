export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

export interface SearchResult {
  total_count: number;
  items: Repository[];
}