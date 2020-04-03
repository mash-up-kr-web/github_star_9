export interface Repository {
  name: string;
  star: number;
}

export interface UserInfo {
  username: string;
  repositories: Repository[];
  starCount: number;
}
