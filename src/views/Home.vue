<template>
  <div id="home">
    <search />
    <router-view :user-name="userName" />
  </div>
</template>

<script>
import Search from '../components/Search.vue';

export default {
  props: {
    userName: {
      type: String,
      default: '',
    },
  },
  name: 'Home',
  components: {
    Search,
  },
};
</script>
