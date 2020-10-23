<template>
  <el-container>
  <el-header>看点资讯平台</el-header>
  <el-container>
    <el-aside >
      <el-menu @select="selectbtn" :router = 'true'>
         <el-menu-item index="/customer">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/category" >
        <i class="el-icon-document"></i>
        <span slot="title">栏目管理</span>
      </el-menu-item>
      <el-menu-item index="/order">
        <i class="el-icon-setting"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
       <el-menu-item index="/product">
        <i class="el-icon-setting"></i>
        <span slot="title">产品管理</span>
      </el-menu-item>
      </el-menu>
    </el-aside>
      <el-main>
        <router-view/>
      </el-main>
  </el-container>
</el-container>
</template>

<script>




export default {

  name: 'app',
  data(){
    return{

    }
   },
  components: {

  
  },
 
  methods:{
    selectbtn(){}
    },
    cteated(){
      console.log(element)
    }

}
</script>

<style>
 .el-menu{
   height: 500px;
 }
.el-header{
  background-color: blue;
   text-align: center;
   line-height: 60px;
   font-size: 30px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
