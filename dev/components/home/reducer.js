
// import * as types from './types'

export default (context,data)=>{

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


// module.exports = [

//         {

//             type: types.TEST_TYPE,
//             reducer: reducer
           
//         }
// ]




