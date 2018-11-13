<template>
    <div class="grid-content bg-color post">
        <h2>{{this.$store.state.blogmodule.blog.title}}</h2>
        <p>{{this.$store.state.blogmodule.blog.body}}</p>
        <el-row>
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
}
</script>
<style scoped>
h2, p{
    margin-bottom: 20px;
}
</style>


