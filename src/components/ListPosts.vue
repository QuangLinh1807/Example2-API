<template>
  <div class="container">
    <h1 class="text-center">List Posts</h1>
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
        <tr v-for="post in contentPage" :key="post.id">
          <td>{{ post.userId }}</td>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  props: {
    contentPage: {
      type: Array,
      requied: true,
    },
  },
};
</script>

<style></style>
