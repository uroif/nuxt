<template>
  <div class="container">
    <post-list/>
    <user-list/>
  </div>
</template>

<script>
import PostList  from "@/components/blog/postlist.vue";
import UserList  from "@/components/blog/userlist.vue";
import BlogApi from "@/apis/blog";
export default {
  components: {
    PostList,
    UserList
  },
  async fetch({ store, query }){
    let response
    if(query.userId){
      response =  await BlogApi.getBlogsByUserId(query.userId)
    }else{
      response =  await BlogApi.getBlogs()
    }
    store.dispatch('blogmodule/insertBlogs', response.data)
  },
  created(){
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: left;
  align-items: left;
  text-align: left;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
