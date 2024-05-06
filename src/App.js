import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import PageNavigation from "./pageComponents/PageNavigation";

function App() {
  return (
    <div className="app-root-container">
      <div className="content-container" style={{ marginRight: "65px" }}>
        <Header />
        <Content />
      </div>

      <div style={{ position: "fixed", top: 0, right: 0, zIndex: 9999 }}>
        <PageNavigation />
      </div>
    </div>
  );
}

export default App;
