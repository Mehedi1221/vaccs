import React from 'react'
import { useState,useEffect, useRef  } from 'react'
import { useParams } from 'react-router-dom';
import GLOBE from 'vanta/dist/vanta.globe.min'
import Axios from 'axios';
import Navbar from '../components/Navbar'


function Registration() {

    const jsonString = localStorage.getItem('myData');
    const myData = JSON.parse(jsonString);

        const [vantaEffect, setVantaEffect] = useState(0)
        const myRef = useRef(null)
        useEffect(() => {
          if (!vantaEffect) {
            setVantaEffect(GLOBE({
              el: myRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              size: 1.60,
              backgroundColor: 0xffffff
            }))
          }
          return () => {
            if (vantaEffect) vantaEffect.destroy()
          }
        }, [vantaEffect])

      const { name, date, place } = useParams();


      

    const [username, setusername] = useState('')
    const [phone, setphone] = useState('')
    const [mail, setmail] = useState(myData.mail)
    const [address, setaddress] = useState(place)
    const [gender, setgender] = useState('')
    const [vdate, setdate] = useState(date)
    const [age, setage] = useState(0)
    const [vname, setvname] = useState(name)


    

    

    const submitit = (e) => {

    e.preventDefault();

        Axios.post("http://localhost:5000/api/createUser",{
            name:username,
            phone:phone,
            mail:mail,
            age:age,
            address:address,
            gender:gender,
            vname: vname,
            vdate: vdate,
            status:'registered'
        }).then(res=>{
            alert(res.data.message)
            window.location.reload(false);
        })

    }




    return (
        <>
        <Navbar/>
        <div ref={myRef}>
            <div className="form">
                <h1 style={{ marginTop: '100px' }} >Registration for the vaccine</h1>

                <input type="text" placeholder="Enter your Fullname"
                    onChange={(e) => { setusername(e.target.value) }}></input><br />

                <input type="number" placeholder="Enter your Phone number"
                    onChange={(e) => { setphone(e.target.value) }}></input><br />

                <input type="mail" placeholder="Enter your Mail"
                    onChange={(e) => { setmail(e.target.value) }} value={myData.mail}></input><br />

                <input type="number" placeholder="Enter your Age"
                    onChange={(e) => { setage(e.target.value) }}></input><br />

                <input type="text" placeholder="Vaccination Clinics Address" defaultValue={place}
                    onChange={(e) => { setaddress(e.target.value) }}></input><br />

                    <input type="text" placeholder="Vaccine name" defaultValue={name}
                        onChange={(e) => { setvname(e.target.value) }}></input><br />

                    <input type="date" placeholder="Date of Vaccination" defaultValue={date}
                        onChange={(e) => { setdate(e.target.value) }}></input><br />

                <select onChange={(e) => { setgender(e.target.value) }}>
                    <option>Select your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>

                
                <button onClick={submitit}>submit</button><br/>


            </div>

        </div>
        </>
    )
}

export default Registration
