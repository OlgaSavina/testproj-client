import { apiClient } from "../api/apiClient"


export const AuthService = {
    async registration({email,password}){
        const{data}=await apiClient.post('user', {email,password})
        return data;
    
    },
    async login({email,password}){
        const{data}=await apiClient.post('auth/login', {email,password})
        return data;
   
    },
    async getMe(){
    
    }

}