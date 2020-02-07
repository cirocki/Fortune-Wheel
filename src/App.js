import React from "react";
import "./App.css";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import Wheel from "./components/Wheel";
import ItemContextProvider from "./contexts/ItemContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const StyledMainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 100vh;
  padding: 4rem;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <StyledMainWrapper>
        <ItemContextProvider>
          <Sidebar />
          <Wheel />
        </ItemContextProvider>
      </StyledMainWrapper>
      <Footer />
    </div>
  );
}

export default App;
