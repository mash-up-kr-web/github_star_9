import axios from "axios";
import { action, computed, flow, observable } from "mobx";

import config from "../config";

const { APISERVERPATH } = config;

export default class Store {
  public static NAME = "store";

  @observable data = [];

  @observable username: string = "";

  @action
  fetchData = flow(function* (this: Store, username: string) {
    const response = yield axios.get(`${APISERVERPATH}/users/${username}/repos`);

    if (response.status === 200) {
      this.username = username;
      this.data = response.data;
    }
  });

  @computed
  get totalStars() {
    return this.data.reduce((prev, next: any) => prev + next.stargazers_count, 0);
  }

  @computed
  get repoCount() {
    return this.data.length;
  }
}
