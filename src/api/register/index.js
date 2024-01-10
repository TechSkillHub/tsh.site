import axios from 'axios'
import store from "@/store";
import router from "@/router";

export default class Register {
  register(data) {
    // let newData = new FormData()
    // newData.append(`Name`, data.name);
    // newData.append(`Email`, data.email);
    // newData.append(`Password`, data.password);

    console.log(data)

    store.commit('manager/SET_LOADING', true)
    return new Promise((resolve, reject) => {
      axios
        .post(`${import.meta.env.VITE_APP_API_BASE}/PromoshotUser/Register`, data)
        .then((resp) => {
          store.commit('manager/SET_LOADING', false)
          store.commit('manager/SET_MODAL_DEFAULT', { 
            show: true,
            title: resp.data.title,
            body: resp.data.message
          })
          router.push('/')
          resolve(resp)
        })
        .catch((error) => {
          store.commit('manager/SET_LOADING', false)
          reject(error)
        })
    })
  }
}
