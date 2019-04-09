

export const updateItem = (store,data)=>{

     console.log('The store')
     console.log(store)
     console.log(data)
     var target =  store.state[data.component][data.payload.id]['items']

      if(data.payload.task === 'remove'){

         console.log('Preset')
         console.log(data.payload.payload)
         target[data.payload.payload] = undefined
         store.setState(data.component,{[data.payload.id]:{items:target}})

      }else{

         console.log('The addition')
         target.push(data.payload.payload)
         store.setState(data.component,{[data.payload.id]:{items:target}})

      }


}