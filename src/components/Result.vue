<template>
  <div id="result">
    <p v-show="isEmptyUserName">
      검색어를 입력해주세요.
    </p>
    <p v-show="!isEmptyUserName && !isVaildUserName">
      일치하는 사용자가 없습니다.
    </p>
    <repo-list
      :user-name="userName"
      v-show="!isEmptyUserName && isVaildUserName"
    />
  </div>
</template>

<script>
import RepoList from './RepoList.vue';

export default {
  name: 'Result',
  props: {
    userName: String,
  },
  components: {
    RepoList,
  },
  data() {
    return {
      comment: String,
      isFetchSuccess: false,
    };
  },
  watch: {
    userName: {
      handler() {
        this.fecthUserName();
      },
    },
  },
  computed: {
    isEmptyUserName() {
      if (this.userName) return false;
      return true;
    },
    isVaildUserName() {
      return this.isFetchSuccess;
    },
  },
  methods: {
    fecthUserName() {
      this.$axios.get(`https://api.github.com/users/${this.userName}`)
        .then(() => {
          this.isFetchSuccess = true;
        })
        .catch(() => {
          this.isFetchSuccess = false;
        });
    },
  },
};
</script>

<style scoped>
#result {
  margin-left: 30px;
}
</style>
