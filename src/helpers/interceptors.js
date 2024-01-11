import axios from 'axios'
import store from '@/store'
import router from '@/router'

function showAlert(error) {
  console.log('Deu erro', error.request.status)
  if (error.request.status == 401) {
    console.log('Refaça o login')
    localStorage.clear()
    setTimeout(() => {
      router.push('/')
    }, 3000)
  } else {
    console.log('Erro no servidor', error.response.data)
    store.commit('manager/SET_MODAL_DEFAULT', {
      show: true,
      title: error.response.data.title,
      body: error.response.data.message
    })
  }
}

const request = () => {
  return axios.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem('token')
      if (token && config.url != 'https://api.ipify.org') {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}
const response = () => {
  return axios.interceptors.response.use(
    (response) => response,
    (error) => {
      showAlert(error)
      return Promise.reject(true)
    }
  )
}

export default {
  request,
  response
}
