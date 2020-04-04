export interface Repository {
  name: string;
  star: number;
  description: string;
}

export interface UserInfo {
  username: string;
  repositories: Repository[];
  starCount: number;
}
