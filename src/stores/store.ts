import axios from "axios";
import { action, computed, flow, observable } from "mobx";

import config from "../config";
import { RepoType } from "../types";

const { API_SERVER_PATH } = config;

type ResponseType = {
   html_url: string;
   full_name: string;
   stargazers_count: number;
   /* etc... */
};

export default class Store {
   static instance: Store | null = null;

   public static getInstance() {
      if (Store.instance === null) {
         Store.instance = new Store();
      }
      return Store.instance;
   }

   @observable data: RepoType[] = [];

   @observable username: string = "";

   @action
   fetchData = flow(function* (this: Store, username: string) {
      const response = yield axios.get(`${API_SERVER_PATH}/users/${username}/repos`);

      if (response.status === 200) {
         this.username = username;
         this.data = response.data.map((el: ResponseType) => ({
            htmlUrl: el.html_url,
            fullName: el.full_name,
            starCounts: el.stargazers_count,
         }));
      }
   });

   @computed
   get totalStars() {
      return this.data.reduce((prev, next: any) => prev + next.starCounts, 0);
   }

   @computed
   get repoCount() {
      return this.data.length;
   }
}
