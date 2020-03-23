<template>
  <div id="result">
    {{ userName }}
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

};
</script>
