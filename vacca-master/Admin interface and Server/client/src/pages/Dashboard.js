import React from 'react';
import Navbar from '../components/Navbar.js'
import VaccineImg from '../assets/images/vaccine.png'
import {Link} from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const DashBoard =()=>{
  return(
    <>
    <img style={{position: 'relative'}}  src={VaccineImg} alt="Vaccination" width="100%" height="700px"/>
    <Navbar/>

    <div style={{position: 'absolute', top: '300px', left:'50%', transform: 'translate(-50%, -50%)' }}>
    <h1 style={{color: 'black', fontFamily:'time'}}>Add Vaccine <Link to ="/vaccineform"><BsFillArrowRightCircleFill/></Link> </h1>
    </div>
    </>
  )
}

export default DashBoard
