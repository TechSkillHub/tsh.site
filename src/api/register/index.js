import axios from 'axios'
// import store from "@/store";
// import router from "@/router";

export default class Register {
  register(data) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${import.meta.env.VITE_APP_API_BASE}/user/create`, data)
        .then((resp) => {
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
