
import * as types from './types'


export const testAction = {

    
    type: types.TEST_TYPE,
    action: (data)=>{


        console.log('I get a call')
        let name = 'action'
    
        const self = data
    
        self.reducer({
    
            type: types.TEST_TYPE,
            component: 'home',
            payload: {
    
                name: name,
                surname: 'Mashele',
                nickname: 'Khonyonyo'
            }
        })
    }
} 
