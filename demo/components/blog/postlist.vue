<template>
    <el-main>
        <el-row v-for="post in this.$store.state.blogmodule.blogs" v-bind:key="post.id">
            <el-col :span="24" :offset="0">
                <div class="grid-content bg-purple post">
                    <h2>{{post.title}}</h2>
                    <p>{{post.body}}</p>
                </div>
            </el-col>
        </el-row>
    </el-main>
</template>
<script>
export default {
    data(){
        return{}
    }
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


