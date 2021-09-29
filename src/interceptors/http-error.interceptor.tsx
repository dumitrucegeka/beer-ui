import axios from 'axios';
import { toast } from 'react-toastify';

const configureInterceptor = () => {
  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      console.error('HTTP error occurred', err);
      toast('An error ocurred!', {
        position: toast.POSITION.TOP_RIGHT,
        type: 'error',
      });
      return Promise.reject(err);
    }
  );
};

export default configureInterceptor;
