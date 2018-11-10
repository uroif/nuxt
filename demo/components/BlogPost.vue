<template>
    <el-row >
        <el-col :span="24" :offset="0">
            <div class="grid-content bg-purple post" v-bind:id="post.id">
                <h2>{{post.title}}</h2>
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
  .el-row {
    margin-bottom: 20px;
  }

  .bg-purple {
    background: #d3dce6;
  }

</style>


