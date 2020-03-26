<template>
  <div id="home">
    <search @search="setUserName" />
    <result :user-name="userName" />
  </div>
</template>

<script>
import Search from '../components/Search.vue';
import Result from '../components/Result.vue';

export default {
  name: 'Home',
  data() {
    return {
      userName: '',
    };
  },
  components: {
    Search,
    Result,
  },
  methods: {
    setUserName(newUserName) {
      this.userName = newUserName;
    },
  },
};
</script>
