<template>
      <!-- 顾客管理 -->
      <div class="customer">
          <!-- 按钮 -->
          <div class="btns">
               <el-button type="primary" size='small' @click="toAdd">添加</el-button>
               <el-button type="danger" size='small'>批量删除</el-button>
          </div>
          <!-- 表格 -->
          {{ids}}
           <div class="tals">
             <el-table
                    :data="tableData"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                    >
                    <el-table-column
                    prop="id"
                    type='selection'
                    width="55">
                     </el-table-column>
                    <el-table-column
                    prop="nickname"
                    label="网名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="role"
                    label="角色"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="password"
                    label="密码">
                    </el-table-column>
                     <el-table-column>
                         <template v-slot:default="slot">
                             <a href="" @click.prevent="todeletehandle(slot.row.id)">删除</a>&nbsp;&nbsp;&nbsp;&nbsp;
                             <a href="" @click.prevent='toupdate(slot.row)'>修改</a>
                         </template>
                          </el-table-column>
                </el-table>
               </div>
                <!-- 模态框 -->
                <el-dialog title="收货地址" :visible="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                    </el-dialog>
      
      </div>
   

</template>
 <script>
    import $ from 'jquery'
    export default {
        data(){
            return{
                tableData:[],
                ids:[],
                form:{},
                dialogFormVisible: false
            }
        },
        created(){
            this.reloadData()
        },
        methods:{
            //创建按钮
            onSubmit(){

            },
            //添加按钮
            toAdd(){
                this.dialogFormVisible = true

            },
            //当复选按钮发生变化
            handleSelectionChange(val){
                this.ids =val.map(item=>item.id);
            },
            todeletehandle(id){
                alert(id)
            },
            toupdate(row){
                alert(row)
                console.log(JSON.stringify(row))
            },
            reloadData(){
                var url = 'http://47.106.244.1:8099/manager/user/findAllUser'
                $.get(url,(result)=>{
                    this.tableData = result.data
                })
            }
        }
    }
 </script>
<style scoped>
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
