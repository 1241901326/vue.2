import axios from '@/utils/axios'
export default {
    namespaced:true,
    state:{
        custermers:[]

    },
    getter:{

    },
    mutations:{

    },
    actions:{
        // 查询所有顾客
        findAllCustomer(){
            axios.get('/customer/findAll').then((res)=>{
                console.log(res.data);
                custermers.data = res.data
            })
        }
    }
}