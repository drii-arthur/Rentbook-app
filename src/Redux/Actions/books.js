import axios from 'axios'
let url = 'https://book-library22.herokuapp.com'
export const getBook = () => {
    return {
        type: 'GET_BOOKS',
        payload: axios.get(`${url}/book/`)
    }
}
// import { AsyncStorage } from 'react-native'

// let url = `https://book-library22.herokuapp.com/book`
// export const getBook = () => {
//     return {
//         type: 'GET_BOOKS',
//         payload: axios.get(`${url}`)
//     }
// };
// // export const getBook = (genre, year, search, page, limit) => {
// //     let query = ''
// //     if (genre !== undefined) {
// //         query = `${url}/genre/${genre}`
// //     } else if (year !== undefined) {
// //         query = `${url}/year/${year}`
// //     } else if (search !== undefined && search !== null) {
// //         query = `${url}?keyword=${search}`
// //     } else if (page !== undefined && page !== null) {
// //         query = `${url}?page=${page}`
// //     } else if (limit !== undefined && limit !== null) {
// //         query = `${url}?limit=${limit}`
// //     }
// //     else {
// //         query = url
// //     }
// //     return {
// //         type: 'GET_BOOKS',
// //         payload: axios.get(url)
// //             .then(res => {
// //                 const book = res.data
// //                 console.log(book, 'nangkene')
// //             }
// //             )
// //     }
// // }

// export const getBookById = (id) => {
//     return {
//         type: 'GET_BOOKSBYID',
//         payload: axios.get(`${url}/${id}`, {
//             headers: {
//                 authorization: AsyncStorage.getItem('token')
//             }
//         })
//     }
// }

// export const addBook = (data) => {
//     return {
//         type: 'ADD_BOOKS',
//         payload: axios.post(url, data, {
//             headers: { authorization: AsyncStorage.getItem('token') }
//         })
//     }
// }



// export const getYear = () => {
//     return {
//         type: 'GET_YEARS',
//         payload: axios.get('http://localhost:8081/books/year', {
//             headers: {
//                 authorization: AsyncStorage.getItem('token')
//             }
//         })
//     }
// }