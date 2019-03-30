

export const updateItem = (store,data)=>{

     console.log('The store')
     console.log(store)
     console.log(data)
     var target =  store.state[data.component][data.payload.id]['items']

     if(data.payload.task.hasOwnProperty('remove')){

        target.splice(data.payload.index,data.payload.len)
        store.setState(data.component,{[data.payload.id]:target})

     }else{

        target.push(data.payload.payload)
        store.setState(data.component,{[data.payload.id]:{items:target}})

     }



}