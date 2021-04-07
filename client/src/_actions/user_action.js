import axios from 'axios'
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
}from './types'

//email과 password를 parameter를 통해서 받음
export function loginUser(dataToSubmit){

    //서버에서 받은 data를 request에 저장하고
    const request = axios.post('/api/users/login',dataToSubmit)
        .then(response => response.data )
    
    //return을 통해 reducer로 보낸다
    //reducer는 이전 state과 action object를 받은 후 
    //next state를 return한다!

    return {
        type:LOGIN_USER,
        payload: request
    }
}


export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}


export function auth() {

    const request = axios.get('/api/users/auth')
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}
