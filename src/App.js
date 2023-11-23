import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import { lazy, Suspense } from "react";

import "./App.css"
const SoundBar = lazy(() => import("./pages/SoundBar"));


function App() {

  return (
   
   
    <Router basename="/Rahul-portfolio">
      <SoundBar />
      <Routes>
        <Route path="/" element={<Home />} />
       
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
export default App;