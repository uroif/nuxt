<template>
  <section>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-color">
          @Element-UI
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-color">
          <el-select v-model="tagIds" 
          multiple filterable 
          reserve-keyword  remote :remote-method="remoteMethod"
          @change="onChange" @updatePopper="onUpdatePopper" >
            <el-option v-for="tag in this.tagList" :key="tag.name" :label="`${tag.name}(${tag.posts_number})`" :value="tag.name">
             <span >{{ tag.name }}({{tag.posts_number}})</span>
            </el-option>
          </el-select>  
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-color">Not use CSS framework</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-color"><select-component :tagsProps="this.$store.state.tags"/></div></el-col>
    </el-row>
  </section>
</template>

<script>
const axios = require('axios')
const BASE_URL = 'http://localhost:3002'
import SelectComponent from "@/components/select";
export default {
  data(){
    return {
      tagList: this.$store.state.tags,
      tagIds: []
    }
  },
  components:{
    SelectComponent
  },
  async fetch({store}){
    let response = await axios.get(`${BASE_URL}/tags`)
    store.dispatch('getTags',response.data)
  },
  methods:{
    onChange(){
    },
    remoteMethod(query){
      console.log('query '+ query)
      if(query!=''){
        let tags = this.$store.state.tags
        this.tagList = tags.filter(tag => tag.name.toLowerCase().includes(query.toLowerCase()))
        if(this.tagList.length == 0){
          this.tagList.push({"name":"Enter to create new tag","posts_number":""})
        }
      }else{
        this.tagList = this.$store.state.tags
      }
    },
    onUpdatePopper(s){
      console.log("something")
    }
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
  .el-select{
    display: block;
  }
  .bg-color {
    background: #d3dce6;
  }
  .grid-content {
    padding: 20px;
  }
</style>
