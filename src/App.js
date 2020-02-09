import React from "react";
import "./App.css";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import Wheel from "./components/Wheel";
import ItemContextProvider from "./contexts/ItemContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
const StyledMainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem;
  min-height: 100vh;
  padding: 4rem 2rem;
  @media (max-width: 919px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 419px) {
    padding: 1rem;
  }
`;

function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <Header />
        <StyledContainer>
          <StyledMainWrapper>
            <Sidebar />
            <Wheel />
          </StyledMainWrapper>
        </StyledContainer>
      </ItemContextProvider>
      <Footer />
    </div>
  );
}

export default App;
