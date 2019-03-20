
import * as types from './types'


export const home = {


    type: types.TEST_TYPE,
    reducer: (context,data)=>{

        const self = context

        console.log('The reducer runs, we are about to set the state')
   
        switch(data.type){
            
           case 'TEST_TYPE': {
   
               self.setState(data.component,data.payload)
               
           } 
           break;
           default:{
   
               self.state = state
           }
   
        }
   
   }
} 