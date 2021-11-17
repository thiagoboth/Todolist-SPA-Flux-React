import axios from 'axios'

const api = axios.create({
  baseURL: 'https://tcc-api-crud.herokuapp.com' //baseurl
})

export default api