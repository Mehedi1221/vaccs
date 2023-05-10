import React from 'react'
import Acdn from './Acdn'
import CCards from './cards'
import Footer from './footer'
import corona from '../images/corona.jpg';
import Nabar from './Navbar';


function Cooorr() {
    return (
        <div >
            <div style={{marginTop:'20px'}}>
                <Nabar/>
            </div>
            <div className="col1">
                <h1 style={{marginTop:"10%", marginLeft:'20px'}}>Corona situation all over the world</h1>
                <CCards/>
            </div>
            

            <div className="col2">
            <h1>Be aware of following things</h1>
           <Acdn/>
           <h2 style={{margin:"7%"}}>Corona virous</h2>
           <img class="corona" src={corona}></img>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Cooorr
