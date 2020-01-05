export interface Team {
  author: string;
  name: string;
  participants: [];
  createdAt?: number;
  id: string;
}

export type Teams = Array<Team>;
