<template>
  <div id="search">
    <b-jumbotron
      header="Gitstar Ranking"
      lead="Unofficial Github star ranking for users, organizations and repositories."
    >
      <b-form
        id="searchForm"
        @submit="onSubmit"
      >
        <b-form-input
          id="searchInput"
          v-model="userName"
          type="text"
          placeholder="검색어를 입력하시오."
        />
        <b-button
          id="searchButton"
          type="submit"
        >
          Submit
        </b-button>
      </b-form>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      userName: '',
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.state.userName = this.userName;
    },
  },
};
</script>

<style scoped>
#searchInput {
    display: inline-block;
    width: 30%;
    margin-right: 10px;
}
#searchButton {
    display: inline-block;
    width: auto;
}
</style>
