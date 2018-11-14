<template>
    <div class="grid-content bg-color post">
        <h2 v-bind:class="{notdisplay : isEdit}">{{this.$store.state.blogmodule.blog.title}}</h2>
        <p v-bind:class="{notdisplay : isEdit}">{{this.$store.state.blogmodule.blog.body}}</p>
        <el-row v-bind:class="{notdisplay : isEdit}">
            <el-col :span="6">
                <el-button type="primary" size="small" @click="onEdit"><i class="el-icon-edit"></i>&nbsp;Edit</el-button>
            </el-col>
            <el-col :span="6">
                <el-button type="danger" size="small" @click="onDelete"><i class="el-icon-delete"></i>&nbsp;Delete</el-button>
            </el-col>
        </el-row>

        <h2 v-bind:class="{notdisplay : !isEdit}">Title</h2>
        <el-row v-bind:class="{notdisplay : !isEdit}">
            <el-input v-model="title"></el-input>
        </el-row>
        <h2 v-bind:class="{notdisplay : !isEdit}">Body</h2>
        <el-row v-bind:class="{notdisplay : !isEdit}">
            <el-input type="textarea" :rows="4"  v-model="body"/>
        </el-row>
        <el-row v-bind:class="{notdisplay : !isEdit}">
            <el-col :span="6">
                <el-button type="primary" size="small" @click="onSave">Save</el-button>
            </el-col>
            <el-col :span="6">
                <el-button type="danger" size="small" @click="onCancel">Cancel</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import BlogApi from "@/apis/blog";
export default {
    data(){
        return {
            isEdit: false,
            title: this.$store.state.blogmodule.blog.title,
            body: this.$store.state.blogmodule.blog.body
        }
    },
    methods:{
        onEdit(){
            this.isEdit = true
        },
        async onDelete(){
            let response = await BlogApi.deleteBlog(this.$store.state.blogmodule.blog)
            if(response.status == 200){
                this.$store.dispatch("blogmodule/deleteBlog", this.$store.state.blogmodule.blog)
                this.$router.push("/posts")
            }
        },
        async onSave(){
            let newPost = Object.assign({}, this.$store.state.blogmodule.blog)
            newPost.title = this.title
            newPost.body = this.body
            let response = await BlogApi.updateBlog(newPost)
            if(response.status == 200){
                this.$store.dispatch("blogmodule/updateBlog", response.data)
            }
            this.isEdit = false
        },
        onCancel(){
            this.isEdit = false
        }
    }
}
</script>
<style scoped>
h2, p, .el-row{
    margin-bottom: 20px;
}
.notdisplay{
    display: none;
}
</style>


