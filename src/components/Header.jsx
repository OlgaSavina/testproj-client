import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';
import { Link } from "react-router-dom";
const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
background-color: #172234;
height: 80px;
padding: 24px 80px;
align-items: center;
flex-shrink: 0;

`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
 
`;


const Logo = styled.div`
color: var(--White, #FFF);
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 34px; /* 121.429% */
`;

const Button = styled.button`
border-radius: 5px;
border: 1px solid #B29F7E;
background:  #172234;
text-align: center;
font-family: Merriweather;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 137.5% */
padding: 11px 0px; 
width: 160px;
color: #B29F7E;
&:hover {
  background: #B29F7E; 
  color: white; 
}
`;

export const Header = () => {
    const isAuth = useAuth()
  
  
    return (
  
        <HeaderContainer>
    <Logo>My Logo</Logo>
   
{isAuth ? <Button>Sign Out</Button> :  <ButtonContainer>
<Link to={`auth`}><Button>Log In</Button> <Button>Sign Up</Button></Link></ButtonContainer>}

   </HeaderContainer>

          
       
    );
  };