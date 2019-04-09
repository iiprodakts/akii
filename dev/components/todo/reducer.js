
 import * as types from './types'
 import * as presets from './presets'

export default  (store,data) =>{

    

    console.log('The reducer get runs, we are about to set the state')

        switch(data.type){
            
            case 'TEST_TYPE': {
    
                console.log('THe data from the action')
                console.log(data)
                store.setState(data.component,data.payload)
                
            } 
            break
            case 'SET_TYPE': {
    
                console.log('THe data from the action')
                console.log(data)
                store.setState(data.component,data.payload)
                
            } 
            break
            case 'ADD_ITEM': {
    
                // console.log('THe data from the action')
                // console.log(data)

                presets.updateItem(store,data)
                //self.setState(data.component,data.payload)
                
            } 
            break
            case 'REMOVE_ITEM': {
    
                presets.updateItem(store,data)
            } 
            break
            default:{
    
                self.state = null
            }
    
        }

}













/*const setRed =  (context,data)=>{

    const self = context

    console.log('The reducer Set runs, we are about to set the state')

        switch(data.type){
            
            case 'SET_TYPE': {
    
                console.log('THe data from the action')
                console.log(data)
                self.setState(data.component,data.payload)
                
            } 
            break;
            default:{
    
                self.state = null
            }
    
        }

}


module.exports = [

        {

            type: types.TEST_TYPE,
            reducer: reducer
           
        },
        {

            type: types.SET_TYPE,
            reducer: setRed
           
        }
]
*/




