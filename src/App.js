import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"

import "./App.css"
import SoundBar from "./pages/SoundBar.js";


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