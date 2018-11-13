<template>
    <el-aside width="33.3333%">
        <el-menu class="el-menu-vertical-demo" @select="handleSelect" background-color="#D3DCE6" text-color="#333" active-text-color="#ffd04b">
            <el-menu-item index="0">
                <!-- <nuxt-link :to="`/posts`">All users</nuxt-link> -->
                <span>All users</span>
            </el-menu-item>
            <el-menu-item v-bind:index="user.id" v-for="user in this.$store.state.usermodule.users" v-bind:key="user.id">
                <!-- <nuxt-link :to="`/posts?userId=${user.id}`">userId = {{user.id}}</nuxt-link> -->
                <span>userId = {{user.id}}</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>
<script>
import BlogApi from "@/apis/blog";
export default {
    methods:{
        async handleSelect(userId) {
            let response
            if(userId!=0){
                this.$router.push({ path: `/posts?userId=${userId}` })
                response =  await BlogApi.getBlogsByUserId(userId)
            }else{
                this.$router.push({ path: `/posts` })
                response =  await BlogApi.getBlogs()
            }
            this.$store.dispatch('blogmodule/insertBlogs', response.data)
        }
    }
}
</script>
<style scoped>
.el-menu{
    margin-top: 20px;
}
.el-menu-item{
    margin-bottom: 20px;
    /* background-color: #545c64; */
}
</style>

