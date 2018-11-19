<template>
    <el-container>
        <user-detail></user-detail>
        <user-list></user-list>
    </el-container>
</template>
<script>
import UserApi from "@/apis/user"
import UserDetail from "@/components/user/userdetail"
import UserList from "@/components/user/userlist"
export default {
    components:{
        UserDetail,
        UserList
    },
    validate ({ params }) {
        // Must be a number
        return /^\d+$/.test(params.id)
    },
    async fetch({store, params}){
        let response
        response = await UserApi.getUserById(params.id)
        store.dispatch('usermodule/insertUser', response.data)
    }
}
</script>

