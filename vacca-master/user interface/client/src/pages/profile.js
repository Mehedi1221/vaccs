import react, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import img from "../images/corona2.jpg";
import Axios from "axios";

const Profile = () => {
  const [pinfo, setvinfo] = useState([]);
  const jsonString = localStorage.getItem("myData");
  const myData = JSON.parse(jsonString);

  useEffect(() => {
    const fetchVaccine = async () => {
      const vaccine = await Axios.get(
        `http://localhost:5000/api/fetchAUser/${myData.mail}`
      );
      setvinfo(vaccine.data);
      
    };
    fetchVaccine();
  }, [myData.mail]);

  console.log(pinfo.status === 'registered');

  const [username, setusername] = useState(pinfo.name);
  const [phone, setphone] = useState(pinfo.phone);
  const [address, setaddress] = useState(pinfo.address);
  const [gender, setgender] = useState(pinfo.gender);
  const [vdate, setdate] = useState(pinfo.vdate);
  const [age, setage] = useState(pinfo.age);
  const [vname, setvname] = useState(pinfo.vname);
  const [selectedImage, setSelectedImage] = useState(null);

  const submitit = async (e) => {
    e.preventDefault();

    let img = pinfo.profilePicture

    if(selectedImage){

       const formData = new FormData();
  formData.append("image", selectedImage);

  const response = await fetch("https://api.imgbb.com/1/upload?key=8bb82efe2ee527f88e6bf32695479f60", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

    img = data.data.display_url;

    }

   

    Axios.patch(`http://localhost:5000/api/updatedUserInfo/${myData.mail}`, {
      name: username,
      phone: phone,
      age: age,
      address: address,
      gender: gender,
      vname: vname,
      vdate: vdate,
      profilePicture: img
    }).then((res) => {
      alert(res.data.message);
      // window.location.reload(false);
    });
  };
  return (
    <>

    {
      pinfo?.length === 0 ? (
      <div>
          <Navbar />
         <h1 style={{marginTop:'60px', marginLeft:'40px', color:'red'}}>Register a vaccine to get profile access!!</h1>

        </div>
        ):(
        <div>
          <Navbar />
      <div style={{ padding: "70px" }}>
        <h1 style={{ marginTop: "40px" }}>Profile</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          
            <img src={pinfo.profilePicture} height={"200px"} width={"200px"} alt="Profile" ></img> 
            <input type="file" onChange={(e)=>{setSelectedImage(e.target.files[0]);}}></input>
            <div>
              {
                pinfo.status === 'registered' ? 
                (
                  <div>
                    <span> <b>Vaccine Status:</b></span>
                      <span style={{marginLeft:'10px'}}>Registered</span>
                      <p style={{fontSize: '20px'}}>Keep Checking your mailbox!!!</p>
                     </div>               
                      ) : pinfo.status === 'mailSent'? (
                        <div>
                       <span> <b>Vaccine Status:</b></span>
                      <span style={{marginLeft:'10px'}}>Recived Mail</span>
                      <p style={{fontSize: '20px'}}>You have recived a mail with a tocken. Use the token to get vaccine</p>
                     </div>   
                      ) : pinfo.status === 'vaccinated'? (
                        <div>
                       <span> <b>Vaccine Status:</b></span>
                      <span style={{marginLeft:'10px'}}>Vaccinated</span>
                      <p style={{fontSize: '20px'}}>Congratulation!!! You are vaccinated now! Stay safe.</p>
                     </div>   
                      ): null
              }
            </div>
          
          

          <label>Name</label>
          <input
            type="text"
            style={{ width: "30%" }}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            defaultValue={pinfo.name}></input>
          <label>Phone</label>
          <input
            type="text"
            style={{ width: "30%" }}
            onChange={(e) => {
              setphone(e.target.value);
            }}
            defaultValue={pinfo.phone}></input>
          <label>Age</label>
          <input
            type="text"
            style={{ width: "30%" }}
            onChange={(e) => {
              setage(e.target.value);
            }}
            defaultValue={pinfo.age}></input>
          <label>Location</label>
          <input
            type="text"
            style={{ width: "30%" }}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
            defaultValue={pinfo.address}></input>
          <label>Vaccine Anme</label>
          <input
            type="text"
            style={{ width: "30%" }}
            onChange={(e) => {
              setvname(e.target.value);
            }}
            defaultValue={pinfo.vname}></input>
          <label>Date</label>
          <input
            type="date"
            style={{ width: "30%" }}
            onChange={(e) => {
              setdate(e.target.value);
            }}
            defaultValue={pinfo.vdate}></input>
          <label>Gender</label>
          <select
            style={{ width: "30%" }}
            onChange={(e) => {
              setgender(e.target.value);
            }}
            defaultValue={pinfo.gender}>
            <option>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <button
            style={{ width: "10%", marginTop: "20px", marginLeft: "100px" }}
            onClick={submitit}>
            submit
          </button>
          <br />
        </div>
      </div>
        </div>
      ) 
    }
      
    </>
  );
};

export default Profile;
