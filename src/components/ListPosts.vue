<template>
  <div class="container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>UserID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{post.userId}}</td>
            <td>{{post.id}}</td>
            <td>{{post.title}}</td>
            <td>{{post.body}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted() {
    this.$store.dispatch('loadPosts')
  },
  computed: mapState([
    'posts'
  ]),
  
}
</script>

<style>

</style>