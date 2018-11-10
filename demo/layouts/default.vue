<template>
<div id="container">
  <el-container>
  <el-header>
    <el-row>
      <el-col :span="8"><div class="grid-content">Logo</div></el-col>
      <el-col :span="8" :offset="8">
        <div class="grid-content">
          <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1"><a href="/" >Home</a></el-menu-item>
            <el-menu-item index="2"><a href="/users" >Users</a></el-menu-item>
            <el-menu-item index="3"><a href="/posts" >Posts</a></el-menu-item>
            <el-menu-item index="4"><a href="/albums" >Albums</a></el-menu-item>
            <el-menu-item index="5"><a href="/todos" >Todos</a></el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </el-header>
  <el-container>
    <el-main><nuxt/></el-main>
    <el-aside width="400px">Aside</el-aside>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    };
  }
}
</script>


<style>
#container{
  width: 1200px;
  margin: auto;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
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
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }


</style>
