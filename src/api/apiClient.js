import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localstorageHelper";

export const apiClient = axios.create({
    baseURL: 'https://testproject-nd88.onrender.com/api',
    headers:{
        Authorization:'Bearer ' +getTokenFromLocalStorage()  || '',
    },
    timeout: 10000
  });