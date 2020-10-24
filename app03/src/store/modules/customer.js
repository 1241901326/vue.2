
import {get,post} from '../../utils/axios'
export default {
    namespaced:true,
    state:{
        //定义状态
        customers:[],
        total: '',
        customer_d:[]
        
      

    },
    getter:{

    },
    mutations:{
        set_total(state,data){
            state.total = data.total;
            state.customers = data.list
        },
        set_customer(state,data){
            state.customers = data;
        },
        set_customer_d(state,data){
            state.customer_d = data
        }
        // set_form(state,data){
        //     state.form = data;
        // }
    },
    actions:{
        // 查询所有顾客
        findAllCustomer(context){
           return get('/customer/findAll') 

           .then((result)=>{
               context.commit('set_customer',result.data)

           })
        },
     
      //分页查询
        // async loadType (context,params){
        //     let res =await get ('/customer/query',params)

        //     context.commit('set_total',res.data)
        //     return res
        // }
        //保存顾客信息
             submitCustomers(context,form){
              
                
                return (post('/customer/saveOrUpdate',form)
                .then((result)=>{
                    // context.commit('resetMsg',result.statusText);
                     context.dispatch('findAllCustomer')
                     
                    // console.log(result.statusText)
                })
                    
                
                )},
               

                //删除
                async todeletHandler(context,id){

                    let res = await  get('/customer/deleteById',{id})
                    .then((result)=>{
                        context.diapatch('findAllCustomer')
                    })
                    
                    return  res
                    
                },
                chaxun(context, id) {
                    
                     return get('/customer/findCustomerById',{id})
                     .then((res) => {
                        console.log(res.data)
                  context.commit('set_customer', res.data)
                  context.state.customers.push('res.data')
                    })
                  }
            
        
        
    }
}