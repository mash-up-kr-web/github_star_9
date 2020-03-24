<template>
  <div id="result">
    <p v-if="isEmptyUserName()">
      메시지를 입력해주세요.
    </p>
    <div v-else>
      <p v-if="!isVaildUserName()">
        일치하는 사용자가 존재하지 않습니다.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
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
      this.$axios.get(`https://api.github.com/users/${this.userName}`)
        .then(() => true)
        .catch(() => false);
    },
  },
};
</script>
