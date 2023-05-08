import React from "react";
import Menuitems from "./menuitems";
import Logo from "../../assets/logo.png";




// const SayHi = () => {
//     alert("hi");
// }

const Navbar = () => {
    return (
    <nav className="Navbar"> 
    {/* p-4 bg-light */}
        <div className="container">  
        <img width="70px" src={Logo} alt=""/>

        <Menuitems />
        {/* <button onClick={SayHi} >Hello</button> */}
      

        </div>
    </nav>

   
    );
};

export default Navbar;