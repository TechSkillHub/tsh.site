import axios from 'axios'
import store from '@/store'
import router from '@/router'

function exibirAlertas(error) {
  console.log('Error', error.response.status)
  if (error.response.status == 401) {
    store.commit('SET_MODAL', {
      visivel: true,
      icone: 'erro',
      titulo: 'Sua sessão expirou, faça login novamente',
      corpo: '',
      login: false,
      botaoPositivo: '',
      botaoNegativo: 'Fechar'
    })
    localStorage.clear()
    store.commit('SET_LOGADO', false)
    setTimeout(() => {
      router.push('/')
    }, 3000)
  } else {
    console.log(error.response.data)
    store.commit('SET_LOADING', false)
    store.commit('SET_MODAL', {
      visivel: true,
      icone: 'erro',
      titulo: error.response.data.titulo
        ? error.response.data.titulo
        : error.response.data
        ? error.response.data
        : 'O servidor encontrou um erro.<br />Tente novamente mais tarde',
      corpo: error.response.data.messagem ? error.response.data.messagem : '',
      login: false,
      botaoPositivo: '',
      botaoNegativo: 'Fechar'
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
      exibirAlertas(error)
      return Promise.reject(true)
    }
  )
}

export default {
  request,
  response
}
