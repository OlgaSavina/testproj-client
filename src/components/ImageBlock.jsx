import styled from 'styled-components';
import Cover from '../img/cover.jpg';
  
const ImageContainer = styled.div`
    height: calc(100vh - 80px);
    min-height: 100px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Cover} );
    background-size: cover; 

`;

const Content = styled.div`
display: flex;
width: 1085px;
flex-direction: column;
align-items: center;
gap: 10px;
`;

const Title = styled.h1`
color: var(--White, #FFF);
text-align: center;
font-family: Merriweather;
font-size: 64px;
font-style: normal;
font-weight: 700;
line-height: 80px; 
`;

const Subtitle = styled.p`
max-width: 822px;
color: var(--White, #FFF);
text-align: center;
font-family: Lato;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 32px; /* 133.333% */
letter-spacing: -0.48px;
`;

export const ImageBlock = () => {
    
  
  
    return (
  
        <ImageContainer>
        <Content>
          <Title>The chemical  negatively charged</Title>
          <Subtitle>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is </Subtitle>
        </Content>
      </ImageContainer>
       
    );
  };