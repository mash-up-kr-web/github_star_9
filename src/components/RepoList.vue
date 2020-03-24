<template>
  <div id="repoList">
    <h1>{{ userName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'RepoList',
  computed: {
    userName() {
      return this.$store.state.userName;
    },
  },
};
</script>
