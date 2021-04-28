import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios,axios)

export default new Vuex.Store({
    state:{
        posts:[],
        loading: true
    },
    actions:{
        loadPosts({commit, state}){
            axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.data)
            .then(posts=>{
                commit('SET_POSTS',posts);
                state.loading = false;
            })
        }
    },
    mutations:{
        SET_POSTS(state,posts){
            state.posts = posts
        }
    }
})
