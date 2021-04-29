import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    posts: [],
    loading: true,
  },
  actions: {
    loadPosts: async ({ commit, state }) => {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data)
        .then((posts) => {
          commit("SET_POSTS", posts);
          state.loading = false;
        });
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
  },
});
