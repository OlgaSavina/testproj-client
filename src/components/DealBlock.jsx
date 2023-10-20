import styled from 'styled-components';


const DealContainer = styled.div`
position: relative;
  color: white;
  text-align: center;
  margin: 20px;

  img {
    width: 100%;
    height: auto;
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
 
    
    padding: 10px;
  }

  h4 {
    font-family: Merriweather;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 34px;
  }

  h3 {
    text-align:left;
    font-family: Lato;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 22px;
  }
`;


function DealBlock({

    title,
    price,
    ticket,
    
    daysLeft,
    sold,
    imageURL,
    
  }) 
  
  {

    
    return (
      <DealContainer>
        <img src={imageURL} alt="smth" />
        <div >
        <h4 >{title}</h4>
       
        <h3 >Sold: {sold}%</h3>
        <h3 >Days left: {daysLeft}</h3>
        <h3 >TIcket {ticket} dhs</h3>
        <h3>Prise {price} dhs</h3>
        </div>
      </DealContainer>
    );
  }
  export default DealBlock;
