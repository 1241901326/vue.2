<template>
    <div>
        <el-button type='text' @click="()=>{this.$router.back()}">返回</el-button>
         <el-table
      :data="customers"
  
      stripe
      style="width: 100%"
    >
      <el-table-column
        align="center"
        prop="id"
        label="编号"
        width="80px"
      />
      <el-table-column
        align="center"
        prop="realname"
        label="姓名"
      />
      <el-table-column
        align="center"
        prop="telephone"
        label="手机号"
      />
      <el-table-column
        align="center"
        prop="status"
        label="状态"
      />
     
         </el-table>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
        data(){
            return{

            }
        },
        computed(){

        },
        created(){
            this.chaxun(this.$route.params.id)
        },
        methods:{
            ...mapActions('customer',['chaxun'])
        }
        
}

</script>
<style  scoped>

</style>