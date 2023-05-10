import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import Navbar from './Navbar'
import Formimage from '../assets/images/vimage.jpg'

function FormExample() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [origin, setorigin] = useState('');
  const [date, setdate] = useState('');
  const [place, setplace] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);
    axios.post('http://localhost:5000/api/createvaccine', {
      name: name,
      origin: origin,
      date: date,
      place: place
    })
    .then((res)=>{
      toast.success(res.data.message)
    })
  };

  return (
    <>
    <ToastContainer />

    <img style={{position: 'relative'}}  src={Formimage} alt="Vaccination" width="100%" height="700px"/>
    <Navbar/>

    <Form style={{margin: '10%', position:'absolute', top:'0px'}} noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="20" controlId="validationCustom01">
          <Form.Label>Vaccine name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Vaccine name"
            onChange={(e)=>{setName(e.target.value)}}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="20" controlId="validationCustom02">
          <Form.Label>Orirgin</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Orirgin"
            onChange={(e)=>{setorigin(e.target.value)}}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Vaccinating Date" required
          onChange={(e)=>{setdate(e.target.value)}}
           />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="8" controlId="validationCustom04">
          <Form.Label>Place</Form.Label>
          <Form.Control type="text" placeholder="Place " required
          onChange={(e)=>{setplace(e.target.value)}}
           />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Place.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Button type="submit">Submit form</Button>
    </Form>


    </>
  );
}

export default FormExample
