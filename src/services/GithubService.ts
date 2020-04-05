import { Octokit } from "@octokit/rest";

import { Repository } from "~/utils/model/Repository";

class GithubService {
  private octokit: Octokit;

  constructor() {
    this.octokit = new Octokit();
  }

  public async getRepos(username: string) {
    const res =
      (await this.getReposFromOrg(username)) ||
      (await this.getReposFromUsername(username));

    return res?.data.map((repo: RepoResult) => ({
      name: repo.name ?? "untitled",
      url: repo.url,
      stargazersCount: repo.stargazers_count,
    })) as Repository[];
  }

  private async getReposFromOrg(org: string) {
    try {
      const res = await this.octokit.repos.listForOrg({
        org,
      });
      return res;
    } catch (e) {
      return undefined;
    }
  }

  private async getReposFromUsername(username: string) {
    try {
      const res = await this.octokit.repos.listForUser({
        username,
      });
      return res;
    } catch (e) {
      return undefined;
    }
  }
}

export default GithubService;
