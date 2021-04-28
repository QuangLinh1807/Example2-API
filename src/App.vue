<template>
  <div id="app">
    <app-list-posts
    ></app-list-posts>
    <app-pagination
      :currentPage="currentPage"
      :isNext="isNext"
      :isPrev="isPrev"
      :totalPage="totalPage"
      :numberRow="numberRow"
      :prevPage="prevPage"
      :nextPage="nextPage"
    ></app-pagination>
  </div>
</template>

<script>

import ListPosts from './components/ListPosts.vue'
import Pagination from './components/Pagination.vue'
import { mapGetters, mapActions } from "vuex";
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
        isNext: false
    }
  },
  methods: {
    ...mapActions(["loadPosts"]),
    prevPage(){
      this.currentPage--;
    },
    nextPage(){
      if(this.currentPage===this.totalPage-1){
        return;
      }
      this.currentPage++;
    },
    conditionChange(){
      if(this.currentPage === 0){
        this.isPrev = true;
      }
      if(this.currentPage > 0){
        this.isPrev = false;
      }
      if(this.currentPage === this.totalPage - 1){
        this.isNext = true;
      }
      else{
        this.isNext = false;
      }
    }
  },
  created() {
    this.loadPosts();
    this.numberRow = 10;
    this.totalPage = 10
  },
  watch: {
    "currentPage": ()=>{
      this.conditionChange();
    },
    "numberRow": ()=>{
      this.totalPage = this.posts.length / this.numberRow;
      this.currentPage = 0;
    }
  },
  computed: {
    contenntPage(){
      const startIndex = this.currentPage * this.numberRow;
      let endIndex = startIndex + this.numberRow;
      return this.posts.lice(startIndex, endIndex);
      
    },
    getLoading() {
      return this.$store.state.loading;
    },
    ...mapGetters(["posts"]),
  }
}
</script>

<style>

</style>
