<template>
    <el-card>
        <div class="info">
            <el-row :gutter="10">
                <el-col :span="8">
                    <div class="grid-content bg-color">
                        <b>User ID</b>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content bg-color">
                        {{user.id}}
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="8">
                    <div class="grid-content bg-color">
                        <b>Username</b>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content bg-color">
                        <a :href="`/users/${user.id}`">{{user.username}}</a>
                    </div>
                </el-col>
            </el-row>
        </div>

        <el-row class="block">
            <el-col :span="24">
                <div class="grid-content bg-color">
                    <el-button type="primary" @click="onClickPostsListButton">Posts list</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row class="block">
            <el-col :span="24">
                <div class="grid-content bg-color">
                    <el-button type="primary">Albums list</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row class="block">
            <el-col :span="24">
                <div class="grid-content bg-color">
                    <el-button type="primary">Todos list</el-button>
                </div>
            </el-col>
        </el-row>
    </el-card>
</template>
<script>
export default {
    props:["user"],
    methods:{
        onClickPostsListButton(){
            this.$router.push(`/posts?userId=${this.user.id}`)
        }
    }
}
</script>
<style scoped>
.info, .block{
    margin-bottom: 20px;
}
.info:hover{
    cursor: ;
}
.block:last-child{
    margin-bottom: 0;
}
.el-button{
    width: 100%;
}
.el-card{
    width: 300px;
    margin: 10px;
}
</style>

