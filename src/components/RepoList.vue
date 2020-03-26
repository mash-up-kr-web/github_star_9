<template>
  <div id="repoList">
    <h1>{{ userName }}</h1>
    <p v-show="!isEmptyRepoList">
      레포지토리가 존재하지 않습니다.
    </p>
    <p v-show="isEmptyRepoList">
      {{ repoNameList }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'RepoList',
  props: {
    userName: String,
  },
  data() {
    return {
      isFetchSuccess: null,
      repoNameList: [],
    };
  },
  watch: {
    userName: {
      handler() {
        this.fecthRepoList();
      },
    },
  },
  computed: {
    isEmptyRepoList() {
      return this.isFetchSuccess;
    },
  },
  methods: {
    fecthRepoList() {
      this.$axios.get(`https://api.github.com/users/${this.userName}/repos`)
        .then((res) => {
          this.isFetchSuccess = true;
          this.repoNameList = [];
          res.data.forEach((element) => {
            this.repoNameList.push(element.name);
          });
        })
        .catch(() => {
          this.isFetchSuccess = false;
        });
    },
  },
};
</script>
