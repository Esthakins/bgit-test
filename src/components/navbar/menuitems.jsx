import React from "react";
import {Link} from 'react-router-dom'
import './menuitems.css'

export default function  menuitems() {

    return (
<ul className="menu-items list-unstyled float-end">
    <li>
        <Link to="/ text-white" >Home </Link>
    </li>
    <li>
        <Link to="/about text-white" >About </Link>
    </li>
    <li>
        <Link to="/services text-white" >Services </Link>
    </li>
    <li>
         <Link to="/contact text-white" >Contact </Link>
    </li>
</ul>
    )
}