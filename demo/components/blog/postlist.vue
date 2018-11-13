<template>
    <el-main>
        <el-row v-for="post in this.$store.state.blogmodule.blogs" v-bind:key="post.id">
            <el-col :span="24">
                <nuxt-link :to="`/posts/${post.id}`">
                    <div class="grid-content bg-color post">
                        <h2>{{post.title}}</h2>
                        <p>{{post.body}}</p>
                    </div>
                </nuxt-link>
            </el-col>
        </el-row>
    </el-main>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
    .grid-content{
        padding: 20px;
    }
  .bg-color {
    background: #d3dce6;
  }
    a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
    }
    .post{
        transition: all 0.2s linear;
    }
    .post:hover{
        transform: translateY(-5px);
        box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.2);
    }
</style>


