import react, {useState, useEffect} from 'react';
import  Navbar from '../components/Navbar';
import img from '../images/corona2.jpg'
import Axios from 'axios';

const Profile = ()=>{

    const [pinfo, setvinfo] = useState([]);
    const[empty, setEmpty] = useState(false);
     const jsonString = localStorage.getItem('myData');
    const myData = JSON.parse(jsonString);
    

useEffect(() => {
    const fetchVaccine = async () => {
      const vaccine = await Axios.get(`http://localhost:5000/api/fetchAUser/${myData.mail}`);

      console.log(vaccine.data.message)

      if(vaccine.data.message ==='User not found') {
        setEmpty(true);
      }else{
        setvinfo(vaccine.data);
      }
      
      
      
    };
    fetchVaccine();
  }, [myData.mail]);


  console.log(empty);


    const [username, setusername] = useState(pinfo.name)
    const [phone, setphone] = useState(pinfo.phone)
    const [address, setaddress] = useState(pinfo.address)
    const [gender, setgender] = useState(pinfo.gender)
    const [vdate, setdate] = useState(pinfo.vdate)
    const [age, setage] = useState(pinfo.age)
    const [vname, setvname] = useState(pinfo.vname)




    const submitit = (e) => {

    e.preventDefault();

        Axios.patch(`http://localhost:5000/api/updatedUserInfo/${myData.mail}`,{
            name:username,
            phone:phone,
            age:age,
            address:address,
            gender:gender,
            vname: vname,
            vdate: vdate,
        }).then(res=>{
            alert(res.data.message)
            window.location.reload(false);
        })

    }
    return(
        <>
        <Navbar/>
        <div style={{padding:'70px'}}>
            <h1 style={{marginTop:'40px'}}>
            Profile
        </h1>
        <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
            <img src={img} height={'200px'} width={'200px'} alt='Profile'></img>
            <input type='file' ></input>

            <label>Name</label>
            <input type='text' style={{width:'30%'}} onChange={(e) => { setusername(e.target.value) }} defaultValue={pinfo.name}></input>
            <label>Phone</label>
            <input type='text' style={{width:'30%'}} onChange={(e) => { setphone(e.target.value) }} defaultValue={pinfo.phone}></input>
            <label>Age</label>
            <input type='text' style={{width:'30%'}} onChange={(e) => { setage(e.target.value) }} defaultValue={pinfo.age}></input>
            <label>Location</label>
            <input type='text' style={{width:'30%'}}  onChange={(e) => { setaddress(e.target.value) }} defaultValue={pinfo.address}></input>
            <label>Vaccine Anme</label>
            <input type='text' style={{width:'30%'}} onChange={(e) => { setvname(e.target.value) }} defaultValue={pinfo.vname}></input>
            <label>Date</label>
            <input type='date' style={{width:'30%'}} onChange={(e) => { setdate(e.target.value) }} defaultValue={pinfo.vdate}></input>
            <label>Gender</label>
            <select style={{width:'30%'}} onChange={(e) => { setgender(e.target.value) }} defaultValue={pinfo.gender}>
                    <option>Select your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>


                <button style={{width:'10%', marginTop:'20px', marginLeft:'100px'}} onClick={submitit}>submit</button><br/>
            
        </div>
        </div>
        </>
    )
}


export default Profile;