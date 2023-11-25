import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";

const SoundBar = lazy(() => import("./pages/SoundBar"));

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <Router basename="/Rahul-portfolio">
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <SoundBar />
      </Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
