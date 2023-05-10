import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const DEvaccine =()=>{

const [vinfo, setvinfo] = useState([]);
  const [ename, setename] = useState('');
    const [eorigin, seteorigin] = useState('');
      const [edate, setedate] = useState('');
        const [eplace, seteplace] = useState('');


    useEffect(()=>{
    const fetchVaccine= async()=>{
    const vaccine = await axios.get('http://localhost:5000/api/fetchvaccine');
    setvinfo(vaccine.data)
    console.log(vaccine.data);
  }
  fetchVaccine()
},[]);

      const handledelete = async(_id)=> {
        const restlt = await axios.delete( `http://localhost:5000/api/deleteVaccine/${_id}`)
          toast.success(restlt.data.message)
          
      }

      const editname = async(_id)=>{
        const restlt = await axios.put( `http://localhost:5000/api/updateinfo/${_id}`, {name:ename})
          toast.success(restlt.data.message)
      }

      const editorigin = async(_id)=>{
        const restlt = await axios.put( `http://localhost:5000/api/updateinfo/${_id}`, {origin:eorigin})
          toast.success(restlt.data.message)
      }

      const editdate = async(_id)=>{
        const restlt = await axios.put( `http://localhost:5000/api/updateinfo/${_id}`, {date:edate})
          toast.success(restlt.data.message)
      }

      const editplace = async(_id)=>{
        const restlt = await axios.put( `http://localhost:5000/updateinfo/${_id}`, {place:eplace})
        toast.success(restlt.data.message)
      }


  return(
    <>
    <ToastContainer/>
    <Navbar/>
    <h2 style ={{marginTop:'100px', marginLeft:'40px'}}>Manage Vaccine Information</h2>
    <div style={{margin:'10px'}}>
    <Table striped bordered hover variant="dark" style={{textAlign:'center', borderRadius:'5px'}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Orirgin</th>
          <th>Date</th>
          <th>Place</th>
          <th>Deletion</th>
        </tr>
      </thead>
      <tbody>
      {
        vinfo.map((data)=>{
          return(
            <tr >
              <td >
              <b><p style={{backgroundColor:'black', color:'white' , borderRadius:'5px', padding:'5px'}}>{data.name}</p></b>
              <input onChange={(e)=>{setename(e.target.value)}} type="text" placeholder="Edit Name" style={{borderRadius:'5px', padding:'2px' , paddingLeft:'10px'}} />
              <Button onClick={()=>{editname(data._id)}} variant="danger" style={{marginLeft:'15px'}}>Update</Button>
              </td>

              <td>
                <p style={{backgroundColor:'black', color:'white' , borderRadius:'5px' , padding:'5px'}}>{data.origin}</p>
                <input onChange={(e)=>{seteorigin(e.target.value)}} type="text" placeholder="Edit Origin" style={{borderRadius:'5px', padding:'2px' , paddingLeft:'10px'}} />
                <Button onClick={()=>{editorigin(data._id)}} variant="danger" style={{marginLeft:'15px', padding: 'auto',}}>Update</Button>
              </td>


              <td>
                <p style={{backgroundColor:'black', color:'white', borderRadius:'5px' , padding:'5px'}}>{data.date}</p>
                <input onChange={(e)=>{setedate(e.target.value)}} type="date" placeholder="Edit Date" style={{borderRadius:'5px', padding:'2px', paddingLeft:'10px'}} />
                <Button onClick={()=>{editdate(data._id)}} variant="danger" style={{marginLeft:'15px'}}>Update</Button>
              </td>

              <td>
                <p style={{backgroundColor:'black', color:'white', borderRadius:'5px' , padding:'5px'}}>{data.place}</p>
                <input onChange={(e)=>{seteplace(e.target.value)}} type="text" placeholder="Edit Place" style={{borderRadius:'5px', padding:'2px' , paddingLeft:'10px'}}/>
                <Button onClick={()=>{editplace(data._id)}} variant="danger" style={{marginLeft:'15px'}}>Update</Button>
              </td>

              <td><Button onClick={()=>{handledelete(data._id)}}  variant="danger" style={{marginTop:'20px', width:'100px'}}>Delete</Button></td>
            </tr>
          )
        })
      }


      </tbody>
    </Table>

    </div>
    </>
  )
}
export default DEvaccine
