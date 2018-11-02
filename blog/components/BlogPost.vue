<template>
    <el-row :gutter="20">
        <el-col :span="18" :offset="3">
            <div class="grid-content post" v-bind:id="post.id">
                <h3>{{post.title}}</h3>
                <p>{{post.body}}</p>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data(){
        return{}
    },
    props: ['post']
}
</script>
<style scoped>
    .post{
        border: 1px solid;
    }
</style>


