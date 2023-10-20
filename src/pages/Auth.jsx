import React, {useState} from "react";
import styled from 'styled-components';
import loginImage from '../img/loginImage.jpg';
import { AuthService } from "../services/authService";
import { toast } from "react-toastify";
import { setTokenToLocalStorage } from "../helpers/localstorageHelper";
import { useDispatch } from "react-redux";
import { login } from "../store/user/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const ImageContainer = styled.div`
  flex: 1;
  background: url(${loginImage}) no-repeat center center;
  background-size: cover;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #F2F2F2;
`;

const Header = styled.header`
  height: 80px;
  background-color: #172234;
  width: 100%;
`;

const LoginForm = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  input {
    width: 100%;
    padding: 14px 10px 12px 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 2px solid var(--Background-Title, #E0E0E0);
    background: var(--Background-Title, #E0E0E0);
  }
  
  h1 {
    text-align: left; 
    margin-left: 20px; 
    color: var(--Text, #172234);
font-family: Merriweather;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 34px;
  }

`;

const LoginButton = styled.button`
  width: 100%;
  height: 44px;
  background-color: #B29F7E;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  padding: 0px 10px 0px 10px;
`;

const ToggleLink = styled.div`
  cursor: pointer;
  color: #172234;
  text-decoration: underline;
  margin: 10px 0;
`;

function Auth(){
const[email, setEmail]=useState('');
const[password, setPassword]=useState('');
const[isLogin, setIsLogin]=useState(false);
const dispatch = useDispatch();
const navigate = useNavigate();
const loginHandler = async(e)=>{
    try {
        e.preventDefault()
        const data = await AuthService.login({email, password})
        if(data){
            setTokenToLocalStorage('token',data.token);
            dispatch(login(data))
            toast.success('Ypu logged in');
            navigate('/')
          
        }
    } catch (err) {
        const error =err.response?.data.message
        toast.error(error.toString())
    }
}


const registrationHandler = async(e)=>{
    try {
        e.preventDefault()
        const data = await AuthService.registration({email, password})
        if(data){
            toast.success('Account has been created');
            setIsLogin(!isLogin);
        }
    } catch (err) {
        const error =err.response?.data.message
        toast.error(error.toString())
    }
}

    return(
        <>
      <Header />
      <LoginPage>
        <ImageContainer />
        <ContentContainer>
          <LoginForm onSubmit={isLogin ? loginHandler : registrationHandler}>
            <h1>{isLogin ? 'Login' : 'Registration'}</h1>
           
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <LoginButton>Submit</LoginButton>
            <ToggleLink onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Don’t have an account? Sign Up' : 'Do you have an account? Log in'}
            </ToggleLink>
          </LoginForm>
        </ContentContainer>
      </LoginPage>
    </>

    );
}

export default Auth;