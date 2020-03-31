<template>
  <div id="repoList">
    <h1>{{ userName }}</h1>
    <h2>{{ totalRepoCount }}</h2>
    <h2>{{ totalRepoStarCount }}</h2>
    <p v-if="isEmptyRepoList">
      레포지토리가 존재하지 않습니다.
    </p>
    <repo-list-item
      v-else
      v-for="(repoListItem,idx) in repoList"
      :key="idx"
      :repo-name="repoListItem.name"
      :repo-star="repoListItem.stargazers_count"
    />
  </div>
</template>

<script>
import RepoListItem from './RepoListItem.vue';

export default {
  name: 'RepoList',
  components: {
    RepoListItem,
  },
  props: {
    userName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      repoList: [],
    };
  },
  computed: {
    isEmptyRepoList() {
      return !this.repoList;
    },
    totalRepoCount() {
      return this.repoList.length;
    },
    totalRepoStarCount() {
      return this.repoList
        .map((element) => element.stargazers_count, [])
        .reduce((x, y) => x + y, 0);
    },

  },
  watch: {
    userName: {
      immediate: true,
      handler() {
        this.fecthRepoList();
      },
    },
  },
  methods: {
    fecthRepoList() {
      this.$http.get(`https://api.github.com/users/${this.userName}/repos`)
        .then((res) => {
          this.repoList = res.data;
        });
    },
  },
};
</script>
