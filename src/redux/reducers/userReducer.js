const initialState={
    user_name: '',
    id: '',
    favorited: false,
    favorites:[],
    updated: false
    
}


const UPDATE_USER= 'UPDATE_USER'
const LOGOUT_USER= 'LOGOUT_USER'
const TOGGLE_FAVORITE= 'TOGGLE_FAVORITE'
const GET_FAVORITES= 'GET_FAVORITES'
const TOGGLE_UPDATED= 'TOGGLE_UPDATED'

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

export function toggleFavorite(toggle){
    return{
        type: TOGGLE_FAVORITE,
        payload: toggle
    }
}

export function getFavorites(favorites){
    return{
        type: GET_FAVORITES,
        payload: favorites
    }
}

export function toggleUpdated(){
    return{
        type: TOGGLE_UPDATED
    }
}

export default function reducer(state= initialState, action){
    switch (action.type){
        case UPDATE_USER:
            const {user_name, id}= action.payload
            return {...state, user_name, id}
        case LOGOUT_USER:
            return{...initialState}
        case TOGGLE_FAVORITE:
            const {favorited}= action.payload
            return{...state, favorited}
        case GET_FAVORITES:
            return{...state, favorites: action.payload}
        case TOGGLE_UPDATED:
             return{...state, updated: true}
        default:
            return state

    }
}

