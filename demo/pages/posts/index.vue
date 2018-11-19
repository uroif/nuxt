<template>
  <el-container>
    <post-list/>
    <user-list/>
  </el-container>
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
  }
}
</script>