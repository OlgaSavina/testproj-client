
import { RouterProvider } from 'react-router-dom';

import { router } from './router/router';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #F2F2F2;
  
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
  *{
    font-family: 'Roboto', sans-serif;
  }
}
`;
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    <GlobalStyles/></>
          

  );
}

export default App;
