import React  from 'react'
import {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import moment from 'moment'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function DarkExample() {

  const [pdata, setpdata] =useState([])
  const [filterBy, setfilterBy] =useState('')

  useEffect(()=>{
    const fetchdata = async()=>{
      const result = await axios.get('http://localhost:5000/api/fetchMailSentUser')
      setpdata(result.data)
      console.log(result.data);
    }

    fetchdata();
  },[])

      const sendMail = async (id)=>{

        const result = await axios.patch(`http://localhost:5000/api/updateVaccinatedUser/${id}`);
          toast.success(result.data.message)
         
      }


      // const filteredData = pdata.filter(data=> data._id === filterBy)
      // console.log(filteredData)

  return (
    <>
    <ToastContainer/>

    {/* <div>
      <input onChange={(e)=>{setfilterBy(e.target.value)}}></input>
    </div> */}
    <Table striped bordered hover variant="dark" style={{textAlign:'center'}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Age</th>
          <th>Addrress</th>
          <th>Gender</th>
          <th>Vaccne Name</th>
          <th>Date</th>
          <th>Tocken</th>
          <th>Action</th>


        </tr>
      </thead>
      <tbody>

         {pdata.map((data)=>{
            return(
              <>
              <tr>
              <td>{data.username}</td>
              <td>{data.phone}</td>
              <td>{data.mail}</td>
              <td>{data.age}</td>
              <td>{data.address}</td>
              <td>{data.gender}</td>
              <td>{data.vname}</td>
              <td>{moment(data.vdate).subtract(10, 'days').calendar()}</td>
              <td>{data._id}</td>
              <td><button onClick={()=>{sendMail(data._id)}} >Vaccinated</button></td>
              </tr>
              </>
            )
          })}

         

      </tbody>
    </Table>
    </>
  );
}

export default DarkExample;
