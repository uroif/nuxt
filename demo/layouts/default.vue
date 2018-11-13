<template>
<div id="container">
  <el-container>
  <el-header>
    <el-row>
      <el-col :span="4"><div class="grid-content">Logo</div></el-col>
      <el-col :span="10" :offset="10">
        <div class="grid-content">
          <el-menu class="el-menu-demo" @select="handleSelect" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1"><nuxt-link to="/" >Home</nuxt-link></el-menu-item>
            <el-menu-item index="2"><nuxt-link to="/users" >Users</nuxt-link></el-menu-item>
            <el-menu-item index="3"><nuxt-link to="/posts" >Posts</nuxt-link></el-menu-item>
            <el-menu-item index="4"><nuxt-link to="/albums" >Albums</nuxt-link></el-menu-item>
            <el-menu-item index="5"><nuxt-link to="/todos" >Todos</nuxt-link></el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </el-header>
  <el-container>
    <nuxt/>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
  methods:{
    handleSelect(menuId) {
      switch(menuId) {
        case 1:
            this.$router.push({ path: '/' })
            break;
        case 2:
            this.$router.push({ path: `/users` })
            break;
        case 3:
            this.$router.push({ path: `/posts` })
            break;
        case 4:
            this.$router.push({ path: `/albums` })
            break;
        case 5:
            this.$router.push({ path: `/todos` })
            break;
      }
    }
  }
}
</script>


<style>
#container{
  width: 1000px;
  margin: auto;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  /* font-family:  Arial, sans-serif */
}

.el-header, .el-footer {
    background-color: #545c64;
    color: #FFF;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }


</style>
