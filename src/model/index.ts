export interface Repository {
  name: string;
  star: number;
  description: string;
  link: string;
}

export interface UserInfo {
  username: string;
  repositories: Repository[];
  starCount: number;
}
