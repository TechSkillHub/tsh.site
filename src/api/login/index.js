import axios from 'axios'
// import store from "@/store";
// import router from "@/router";

export default class Login {
  login() {
    return new Promise((resolve, reject) => {
      axios
        .get(``)
        .then((resp) => {
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
