<template>
  <section class="container">
    <BlogPost v-for="post in this.posts" v-bind:key="post.id" v-bind:post="post"/>
    
  </section>
</template>

<script>
import BlogPost  from "~/components/BlogPost.vue";
import { getBlogs, getBlogById} from "@/apis/blog";
export default {
  data(){
    return{
      posts:[
        {
          id:'1',
          'title':'title1',
          'body':'body body bodybodybody bodybodybodybody bodybodybodybody'
        }
      ]
    }
  },
  components: {
    BlogPost
  },
  created(){
    // this.posts = getBlogs()
    console.log(this.posts)
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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

.links {
  padding-top: 15px;
}
</style>
