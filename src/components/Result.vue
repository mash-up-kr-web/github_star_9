<template>
  <div id="result">
    <p v-if="!isVaildUserName">
      일치하는 사용자가 없습니다.
    </p>
    <repo-list
      v-else
      :user-name="userName"
    />
  </div>
</template>

<script>
import RepoList from './RepoList.vue';

export default {
  name: 'Result',
  components: {
    RepoList,
  },
  props: {
    userName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isFetchSuccess: false,
    };
  },
  computed: {
    isVaildUserName() {
      return this.isFetchSuccess;
    },
  },
  watch: {
    userName: {
      immediate: true,
      handler() {
        this.fecthUserName();
      },
    },
  },
  methods: {
    fecthUserName() {
      this.$http.get(`https://api.github.com/users/${this.userName}`)
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
