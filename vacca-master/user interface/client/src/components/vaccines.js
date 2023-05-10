import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Nabar from "./Navbar";


function TextExample() {
  const [vinfo, setvinfo] = useState([]);
  
  
  useEffect(() => {
    const fetchVaccine = async () => {
      const vaccine = await axios.get("http://localhost:5000/api/fetchvaccine");
      setvinfo(vaccine.data);
      
    };
    fetchVaccine();
  }, []);
  return (
    <>
    <Nabar/>
    
      <Table striped bordered hover variant="dark" style={{width:'90%', margin:'auto', marginTop:'100px'}}>
        <thead>
          <tr style={{textAlign:'center'}}>
            <th>Name</th>
            <th>Origin</th>
            <th>Date</th>
            <th>Place</th>
            <th>Register this vaccine</th>
          </tr>
        </thead>
        <tbody>
          {vinfo.map((data) => {
            return (
              <tr style={{textAlign:'center'}}>
                <td>{data.name}</td>
                <td>{data.origin}</td>
                <td>{data.date}</td>
                <td>{data.place}</td>
                <td><Link to={`/Registration/${data.name}/${data.date}/${data.place}`}><Button>Register</Button></Link></td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* {
        vinfo.map((vdata)=>{
          return(

            <Card style={{ width: '18rem', float:'left'  }}>
              <Card.Body style={{textAlign:'left'}}>
            <Card.Title>{vdata.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{vdata.origin}</Card.Subtitle>
            <h4>Date : {vdata.date}</h4>
            <h6>Place : {vdata.place}</h6>

            <Link to={`/Registration/${vdata.name}/${vdata.date}/${vdata.place}`}>Register this Vaccine</Link>
            </Card.Body>
          </Card>

          )
        })
      } */}
    </>
  );
}

export default TextExample;
