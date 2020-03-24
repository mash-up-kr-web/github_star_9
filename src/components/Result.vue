<template>
  <div id="result">
    <p v-if="isEmptyUserName()">
      메시지를 입력해주세요.
    </p>
    <div v-else>
      <p v-if="!isVaildUserName()">
        일치하는 사용자가 존재하지 않습니다.
      </p>
      <repo-list v-else />
    </div>
  </div>
</template>

<script>
import RepoList from './RepoList.vue';

export default {
  name: 'Result',
  data() {
    return {
      vaildUserName: null,
    };
  },
  components: {
    RepoList,
  },
  computed: {
    userName() {
      return this.$store.state.userName;
    },
  },
  methods: {
    isEmptyUserName() {
      if (this.userName) return false;
      return true;
    },
    isVaildUserName() {
      this.fecthUserName();
      return this.vaildUserName;
    },
    fecthUserName() {
      this.$axios.get(`https://api.github.com/users/${this.userName}`)
        .then(() => {
          this.vaildUserName = true;
        })
        .catch(() => {
          this.vaildUserName = false;
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
