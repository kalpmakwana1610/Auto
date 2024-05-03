import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Home from "./Components/home page/Home";
import About from "./Components/about page/About";
import Signup from "./Components/Signuppage/Signup";
import Signin from "./Components/Signin/Signin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element= {<About/>} />
        <Route path="/signup" element= {<Signup/>} />
        <Route path="/signin" element= {<Signin/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
