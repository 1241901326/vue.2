<template>
    <div class="customer">
        <!-- 按钮 -->
        <el-button type="primary" size="small" @click="toAddHandler">添加</el-button>
    <!--<el-button type="danger" size="small" @click='bacthDeletehandler'>批量</el-button>-->
        <!-- 搜索 -->
        <div class="select">
          <el-input v-model="list.status" clearable="true" placeholder="请输入状态" />
            <div class="btn">
        <el-button type="primary" size="small" @click="submitHanlderbyStatus">查询</el-button>
      </div>
        </div>

        <!-- 表格 -->
        <el-table
      :data="custermers"
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
      <el-table-column
        align="center"
        fixed="right"
        label="操作"
        width="150"
      >
       <template v-slot="scope">
           <el-button type='text' size = 'small' @click="deleteHandler(scope.row.id)">删除</el-button>
           <el-button type='text' size = 'small' @click="editHandler(scope.row)">编辑</el-button>
           <el-button type='text' size = 'small' @click="detailsHandler(scope.row.id)">详情</el-button>
       </template>
      </el-table-column>
        </el-table>
        
        <!-- 分页 -->
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>

         <!-- 模态框 -->
        
<el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form ref="ruleForm" :model="form"  label-width="120px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" clearable="true" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="姓名" prop="realname">
          <el-input v-model="form.realname" clearable="true" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="手机号" prop="telephone">
          <el-input v-model="form.telephone" clearable="true" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" clearable="true" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="form.status" placeholder="请选择状态">
            <el-option label="禁用" value="禁用" />
            <el-option label="启用" value="启用" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submit('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            
            list:{},
            dialogFormVisible:false,
            form:{},
            title:'添加顾客信息'
        }
    },
    created(){
        this.findAllcustermer()
    },
    computed:{
        ...mapState('customer',['customers'])
    },
    methods:{
         //提交
         submit(){

         },
        //关闭
        close(){
            this.dialogFormVisible = false;
        },
      ...mapActions('custermer', ['findAllcustermer']),
        // 添加
    toAddHandler(){
        this.dialogFormVisible = true;
    },
    // 编辑
    editHandler(){},
    // 详情
    detailsHandler(){},
    // 删除
    deleteHandler(){},
    //查询
    submitHanlderbyStatus(){}
    }
}
</script>
<style  scoped>
.select{
    width:200px;
    margin-left: 5em;
    margin-top: -2em;
    margin-bottom:1em;
}
.btn{
    margin-left: 13em;
    margin-top: -34px;
}
</style>