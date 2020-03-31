<template>
  <div id="repoListItem">
    {{ repoName }}
    {{ repoStar }}
  </div>
</template>

<script>
export default {
  name: 'RepoListItem',
  props: {
    repoName: {
      type: String,
      default: '',
    },
    repoStar: {
      type: Number,
      default: 0,
    },
  },
};
</script>
