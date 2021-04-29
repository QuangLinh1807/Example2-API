<template>
  <div id="app">
    <app-list-posts :contentPage="contentPage"></app-list-posts>
    <app-pagination
      :currentPage="currentPage"
      :isNext="isNext"
      :isPrev="isPrev"
      :totalPage="totalPage"
      :numberRow="numberRow"
      :totalItemPage="totalItemPage"
      :prevPage="prevPage"
      :nextPage="nextPage"
    ></app-pagination>
  </div>
</template>

<script>
import ListPosts from "./components/ListPosts.vue";
import Pagination from "./components/Pagination.vue";
import { mapActions } from "vuex";
export default {
  components: {
    appListPosts: ListPosts,
    appPagination: Pagination,
  },
  data() {
    return {
      currentPage: 0,
      totalPage: 10,
      numberRow: 10,
      isPrev: true,
      isNext: false,
      totalItemPage: [
        {
          id: 1,
          value: 10,
        },
        {
          id: 2,
          value: 20,
        },
        {
          id: 3,
          value: 40,
        },
      ],
    };
  },
  methods: {
    ...mapActions(["loadPosts"]),
    prevPage() {
      this.currentPage--;
    },
    nextPage() {
      if (this.currentPage === this.totalPage - 1) {
        return;
      }
      this.currentPage++;
    },
    conditionChange() {
      if (this.currentPage === 0) {
        this.isPrev = true;
      }
      if (this.currentPage > 0) {
        this.isPrev = false;
      }
      if (this.currentPage === this.totalPage - 1) {
        this.isNext = true;
      } else {
        this.isNext = false;
      }
    },
  },
  created() {
    this.loadPosts();
    this.numberRow = 10;
    this.totalPage = 10;
  },
  watch: {
    currentPage: function() {
      this.conditionChange();
    },
    numberRow: function() {
      this.totalPage = this.$store.state.posts.length / this.numberRow;
      this.currentPage = 0;
    },
  },
  computed: {
    contentPage() {
      const startIndex = this.currentPage * this.numberRow;
      let endIndex = startIndex + this.numberRow;
      return this.$store.state.posts.slice(startIndex, endIndex);
    },
    getLoading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style></style>
