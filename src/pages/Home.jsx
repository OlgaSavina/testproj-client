import React from "react";
import styled from 'styled-components';
import { Header } from "../components/Header";
import { ImageBlock } from "../components/ImageBlock";
import { getDeals } from "../api/getDeals";
import DealBlock from "../components/DealBlock";

const DealsContainer = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
flex-direction: row;
max-width: 1440px;
margin: 0 auto; 

`;
const Title = styled.div`
display: flex;


color: var(--B29F7E, #B29F7E);
font-family: Merriweather;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 34px; 
margin: 20px 0px 0px 110px;
`;

function Home(){
const [deals, setDeals] = React.useState([]);

  React.useEffect(() => {
    getDeals().then((response) => {
      setDeals(response.data);
    });
  }, []);

    return(
<div >
    <Header/>
  <ImageBlock/>
  <Title> Open Deals </Title>
 < DealsContainer>
 
  {deals.map((obj) => {
    console.log(obj);
        return <DealBlock
            key={obj.id}
    
            {...obj}
          />
        } )}
        </DealsContainer>
</div>
    );
}

export default Home;