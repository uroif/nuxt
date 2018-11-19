<template>
    <el-aside width="20%">
        <el-menu class="el-menu-vertical-demo" @select="handleSelect" background-color="#D3DCE6" text-color="#333" active-text-color="#ffd04b">
            <el-menu-item  v-for="user in this.$store.state.usermodule.users" 
            v-bind:key="user.id" 
            v-bind:index="user.id.toString()">
                <!-- <nuxt-link :to="`/posts?userId=${user.id}`">userId = {{user.id}}</nuxt-link> -->
                <span>userId = {{user.id}}</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>
<script>
import UserApi from "@/apis/user";
export default {
    methods:{
        async handleSelect(userId) {
            let response
            response = await UserApi.getUserById(userId)
            this.$store.dispatch('usermodule/insertUser', response.data)
            this.$router.push({ path: `/users/${userId}` })
        }
    }
}
</script>
<style scoped>
.el-menu{
    margin-top: 20px;
}
</style>

