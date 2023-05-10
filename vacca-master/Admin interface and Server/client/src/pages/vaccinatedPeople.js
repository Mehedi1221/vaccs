import React from 'react';
import Bimg from '../assets/images/maxresdefault.jpg'
import Navbar from '../components/Navbar'
import Table from '../components/vPeopleTable'



const GetPeopleData =()=>{
  return(
    <>

    <img style={{width: '100%', position:'relative'}} src={Bimg} alt="Ung" />
    <Navbar/>
    <div style={{position:'absolute', top:'100px', left:'60px' ,width:'90%'}} ><Table/></div>
    </>
  )
}

export default GetPeopleData