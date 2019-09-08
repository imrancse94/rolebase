import axios from 'axios';
import cookie from "js-cookie";
//let token = document.head.querySelector('meta[name="csrf-token"]');
/*axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
axios.defaults.headers.common['Accept'] = 'application/json';*/
axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.get("token")}`;
axios.interceptors.response.use(
    response => {
      console.log('current response',response);

      return response;
    },
    (error) => {


        return Promise.reject(error);
    }
);
export default axios;
