import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localstorageHelper";

export const apiClient = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers:{
        Authorization:'Bearer ' +getTokenFromLocalStorage()  || '',
    },
    timeout: 10000
  });