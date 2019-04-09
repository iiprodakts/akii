
import * as types from './types'





const setData =  (data)=>{


    // console.log('I get a call')
    let name = 'action'

    const self = data

    self.reducer({

        type: types.TEST_TYPE,
        component: 'todo',
        payload: {

            name: name,
            surname: 'Mashele',
            nickname: 'Khonyonyo',
            status: 'single',
            future:'Very successful, multimillionaire by the 30th birthday'
        }
    })
}

const getData =  (data)=>{


    // console.log('I get a call')
    let name = 'action'

    const self = data

    self.reducer({

        type: types.SET_TYPE,
        component: 'todo',
        payload: {

            test1: 'test',
            way: 'Way',
            blah: 'Blah',
            walah: 12,
            obj: {

                state: 'broke',
                level: 'higher'
            },
            skills:[
                'psychologist',
                'programmer',
                'scientist'
            ]
        }
    })
}


const addItem =  (store,data)=>{


   

    // const self = data

    store.reducer({

        type: types.ADD_ITEM,
        component: 'todo',
        payload: {...data,task: 'add'}
    })
}

const removeItem =  (store,data)=>{


   

    // const self = data

    store.reducer({

        type: types.REMOVE_ITEM,
        component: 'todo',
        payload: {...data,task: 'remove'}
    })
}


module.exports = [

        {
            type: types.TEST_TYPE,
            action: getData
        },

        {
            type: types.SET_TYPE,
            action: setData
        },

        {
            type: types.ADD_ITEM,
            action: addItem
        },

        {
            type: types.REMOVE_ITEM,
            action: removeItem
        }
    
]
