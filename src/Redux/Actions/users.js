import axios from 'axios'
import { AsyncStorage } from 'react-native'

const url = `https://book-library22.herokuapp.com/users` || 'http://localhost:3000/users'

export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: axios.post(`${url}/register`, data)
    }
}

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/login`, data)
            .then(res => {
                const token = res.data.token;
                AsyncStorage.setItem('token', token);
            })
    }
}

export const profile = () => {
    return {
        type: 'PROFILE_USER',
        payload: axios.get(`${url}/profile`, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
    }
}