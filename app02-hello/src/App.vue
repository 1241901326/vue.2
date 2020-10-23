<template>
  <el-container>
  <el-header>看点资讯平台</el-header>
  <el-container>
    <el-aside >
      <el-menu @select="selectbtn">
         <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="2" >
        <i class="el-icon-document"></i>
        <span slot="title">栏目管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
       
      </el-menu>
    </el-aside>
    <el-main >
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">{{this.viewname}}</a></el-breadcrumb-item>
        
      </el-breadcrumb>
      <!-- 动态路由 -->
        <component v-bind:is='view'></component>
    </el-main>
  </el-container>
</el-container>
</template>

<script>

import categrop from './views/categrop'
import customer from './views/customer'
import order from './views/order'

export default {

  name: 'app',
  data(){
    return{
       view:'customer',
       viewname:'顾客管理'
    }
   },
  components: {
   categrop,
   customer,
   order,
  
  },
 
  methods:{
    selectbtn(index){
      
      switch  (index){
        case "1" :
           this.view = 'customer';
           this.viewname='顾客管理'
            break;
        case "2" :
           this.view = 'categrop';
           this.viewname='栏目管理'

            break;
            case "3" :
               this.view = 'order';
           this.viewname='订单管理'

              break;
              default:
                break;
      }
    },
   
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
