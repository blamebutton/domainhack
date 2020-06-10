export type DomainState = {
  input: string;
  matched: Match[];
  list: string[];
}

export type Match = {
  prefix?: string;
  domain?: string;
}
