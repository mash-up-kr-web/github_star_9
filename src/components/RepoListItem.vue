<template>
  <div id="repoListItem">
    <div id="repoName">
      {{ repoName }}
    </div>
    <div id="repoStar">
      ★{{ repoStar }}
    </div>
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

<style scoped>
#repoListItem {
  border: 1px solid rgba(0,0,0,.1);
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
}
#repoName{
  display: inline-block;
  width: 93%;
  font-size: 20px;
}
#repoStar{
  display: inline-block;
  width: 7%;
  font-size: 20px;
}
</style>
