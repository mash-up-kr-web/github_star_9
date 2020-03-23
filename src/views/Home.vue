<template>
  <div id="home">
    <search />
    <result />
  </div>
</template>

<script>
import Search from '../components/Search.vue';
import Result from '../components/Result.vue';

export default {
  name: 'Home',
  components: {
    Search,
    Result,
  },
};
</script>
