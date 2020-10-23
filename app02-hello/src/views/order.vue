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
     
                <el-dialog title="收货地址" :visible="dialogFormVisible" @close="dialogFormVisible = false">
                               {{form}}
                    <el-form :model="form">
                        <el-form-item label="网名" :label-width="formLabelWidth">
                        <el-input v-model="form.realname" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="角色" :label-width="formLabelWidth">
                        <el-input v-model="form.role" autocomplete="off">
                            <!-- <el-option label="区域一" value="user"></el-option>
                            <el-option label="区域二" value="root"></el-option> -->
                        </el-input>
                         <el-form-item label="密码" :label-width="formLabelWidth">
                        <el-input v-model="form.password" autocomplete="off"></el-input>
                        </el-form-item>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="addHandler">确 定</el-button>
                    </div>
                    </el-dialog>
      
      </div>
   

</template>
 <script>
      new Vue({
            el:'#app',
            data:{
                  form:{},
                  forms:[]
            }
      })
 </script>
<style scoped>
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
