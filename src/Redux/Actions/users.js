import axios from 'axios'
import { AsyncStorage } from 'react-native'

const url = `https://book-library22.herokuapp.com/users`

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

    }
}

export const profile = () => {
    return {
        type: 'PROFILE_USER',
        payload: axios.get(`${url}/profile`)
    }
}