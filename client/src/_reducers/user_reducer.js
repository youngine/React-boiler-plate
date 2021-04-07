import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types'

//reducer
//이전 state와 action객체를 받아서 next state를 return
 
export default function(state = {}, action){
    switch (action.type) {
        case LOGIN_USER:
                //...state==위에 선언된 상태 그대로 가져옴 빈상태..
            return { ...state, loginSuccess: action.payload }
            break;
        case REGISTER_USER:
            return {...state, register: action.payload }
            break;
        case AUTH_USER:
            return {...state, userData: action.payload }
            break;    
        default:
            return state;
    }
 }