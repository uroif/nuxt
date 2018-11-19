<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main><nuxt/></el-main>
  </el-container>
</template>

<style scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
   
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  .el-container {
    width: 1000px;
    margin: auto;
  }
</style>
