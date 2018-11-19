<template>
    <el-main>
        <div v-for="user in this.$store.state.usermodule.users" :key="user.id">
            <user-card :user="user"/>  
        </div>
    </el-main>
</template>
<script>
import UserCard from "@/components/user/usercard";
export default {
    components:{
        UserCard
    }
}
</script>
<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }

  .bg-color {
    background: #d3dce6;
  }
  .grid-content {
    padding: 20px;
  }
  .el-main{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
  }
</style>

