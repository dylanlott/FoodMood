const initialState={
    user_name: '',
    id: ''
    
}


const UPDATE_USER= 'UPDATE_USER'
const LOGOUT_USER= 'LOGOUT_USER'

//build out reducer

export function updateUser(user){
    return{
        type: UPDATE_USER,
        payload: user
    }
}

export function logoutUser(){
    return{
        type: LOGOUT_USER,
        
    }
}

export default function reducer(state= initialState, action){
    switch (action.type){
        case UPDATE_USER:
            const {user_name, id}= action.payload
            return {...state, user_name, id}
        case LOGOUT_USER:
            return{...initialState}
        default:
            return state

    }
}

