<template>
    <div class="grid-content bg-color">
        <div class="comment">
            <el-row>
                <el-col :span="2"><b>Name</b> </el-col>
                <el-col :span="22">{{comment.name}}</el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><b>Email</b></el-col>
                <el-col :span="22">{{comment.email}}</el-col>
            </el-row>
        </div>
        <el-row class="comment">
            <el-col :span="24">{{comment.body}}</el-col>
        </el-row>
        <el-row >
            <el-col :span="6">
                <el-button type="primary" size="small"><i class="el-icon-edit"></i>&nbsp;Edit</el-button>
            </el-col>
            <el-col :span="6">
                <el-button type="danger" size="small"><i class="el-icon-delete"></i>&nbsp;Delete</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    props:["comment"]
}
</script>
<style scoped>
.comment{
    margin-bottom: 20px;
}
</style>

