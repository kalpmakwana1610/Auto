import React from "react";
import Navbar from "../navbar/Navbar";
import "./Home.css";

const Home = () => {
    const image = require("../images/pexels-pixabay-325876.jpg");
  return (
     <div>
    <Navbar/>
 <div className="container-fluid info">
  <div className="row">

<div>
  <h1>This is home page</h1>
</div>
{/* <div className="col-md-6 photo">
<img src={image} alt="" height="500px" width="615px"/>
</div> */}
</div>
 </div>
    
    
    </div>
  );
}

 
 

export default Home;