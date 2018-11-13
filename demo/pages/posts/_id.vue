<template>
    <el-main>
        <el-row>
            <el-col :span="10" >
                <div class="grid-content bg-color ">
                    <span>User Id</span>
                    <el-select v-model="userId"  @change="onChangeUserId">
                        <el-option v-for="user in this.$store.state.usermodule.users" :key="user.id" :label="user.id" :value="user.id">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="10">
                <div class="grid-content bg-color ">
                    <span>Post Id</span>
                    <el-select v-model="postId"  @change="onChangePostId">
                        <el-option v-for="postId in this.postIds" :key="postId" :label="postId" :value="postId">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-color ">
                    <el-button type="primary" @click="onClickFilterButton">Filter</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <post-detail />
            </el-col>
        </el-row>
        <h2>Comments</h2>
        <el-row v-for="comment in this.$store.state.commentmodule.comments" v-bind:key="comment.id">
            <el-col :span="24">
                <comment v-bind:comment="comment"/>
            </el-col>
        </el-row>
        <h2>Leave a comment</h2>
        <el-row>
            <el-col :span="24">
                <comment-creator/>
            </el-col>
        </el-row>
    </el-main>
</template>
<script>
import BlogApi from "@/apis/blog"
import CommentApi from "@/apis/comment"
import PostDetail from "@/components/blog/postdetail"
import Comment from "@/components/blog/comment"
import CommentCreator from "@/components/blog/commentcreator"
export default {
    data(){
        return {
            userId: '',
            postIds: [],
            postId: ''
        }
    },
    components: {
        PostDetail,
        Comment,
        CommentCreator
    },
    validate ({ params }) {
        // Must be a number
        return /^\d+$/.test(params.id)
    },
    async fetch({store, params}){
        let response
        response = await BlogApi.getBlogs()
        store.dispatch('blogmodule/insertBlogs', response.data)
        response = await BlogApi.getBlogById(params.id)
        store.dispatch('blogmodule/insertBlog', response.data)
        response = await CommentApi.getCommentsByPostId(params.id)
        store.dispatch('commentmodule/insertComments', response.data)
    },
    methods:{
        onChangeUserId(){
            let posts = this.$store.state.blogmodule.blogs
            posts = posts.filter(post => post.userId == this.userId)
            this.postIds = posts.map(post => post.id)
            this.postId = ''
        },
        onChangePostId(){
        },
        async onClickFilterButton(){
            if(this.postId=='')
                return
            this.$router.push(`/posts/${this.postId}`)
            let response = await BlogApi.getBlogById(this.postId)
            this.$store.dispatch('blogmodule/insertBlog', response.data)
            response = await CommentApi.getCommentsByPostId(this.postId)
            this.$store.dispatch('commentmodule/insertComments', response.data)
        }
    }
}
</script>
<style scoped>
.container {
  display: flex;
}
.el-row {
    margin-bottom: 20px;
}
.bg-color {
    background: #d3dce6;
}
.grid-content {
    padding: 20px;
}
h2, p{
    margin-bottom: 20px;
}

</style>


