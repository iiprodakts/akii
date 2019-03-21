
import * as types from './types'





const getData =  (data)=>{


    // console.log('I get a call')
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



module.exports = [

        {
            type: types.TEST_TYPE,
            action: getData
        }
    
]
