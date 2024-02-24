import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider"
import Navbar from "./Components/Navbar/Navbar.jsx";


function App(){
  return (
    <>
    <StyledEngineProvider injectFirst>
    <Navbar />
    </StyledEngineProvider>
    </>
  );

}

export default App;


