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
        <el-row class="comment" v-bind:id="comment.id + '-view'" v-bind:class="{ notDisplay: isEdit }" >
            <el-col :span="24">{{comment.body}}</el-col>
        </el-row>
        <el-row v-bind:class="{ notDisplay: isEdit }">
            <el-col :span="6">
                <el-button type="primary" size="small" @click="onEdit"><i class="el-icon-edit"></i>&nbsp;Edit</el-button>
            </el-col>
            <el-col :span="6">
                <el-button type="danger" size="small" @click="onDelete" ><i class="el-icon-delete"></i>&nbsp;Delete</el-button>
            </el-col>
        </el-row>
        <el-row class="comment" v-bind:id="comment.id + '-edit'" v-bind:class="{ notDisplay: !isEdit }">
            <el-input type="textarea" :rows="3"  v-model="commentBody"/>
        </el-row>
        <el-row v-bind:class="{ notDisplay: !isEdit }">
            <el-col :span="6">
                <el-button type="primary" size="small" @click="onSave">Save</el-button>
            </el-col>
            <el-col :span="6">
                <el-button size="small" @click="onCancel">Cancel</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import CommentApi from "@/apis/comment"
export default {
    props:["comment"],
    data() {
      return {
          isEdit: false,
          commentBody: this.comment.body
        }
    },
    methods:{
        onEdit(){
            this.isEdit = true
        },
        async onDelete(){
            let response = await CommentApi.deleteComment(this.comment)
            if(response.status == 200){
                this.$store.dispatch("commentmodule/deleteComment",this.comment)
            }
        },
        async onSave(){
            let newComment = Object.assign({},this.comment)
            newComment.body = this.commentBody
            let response = await CommentApi.updateComment(newComment)
            console.log(response)
            if(response.status == 200){
                console.log("62")
                this.$store.dispatch("commentmodule/updateComment",response.data)
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
.comment{
    margin-bottom: 20px;
}
.notDisplay{
    display: none;
}
</style>

