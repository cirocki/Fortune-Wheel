import React from "react";
import "./App.css";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import Wheel from "./components/Wheel";
import ItemContextProvider from "./contexts/ItemContext";
import Header from "./components/Header";

const StyledMainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 100vh;
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
    </div>
  );
}

export default App;
