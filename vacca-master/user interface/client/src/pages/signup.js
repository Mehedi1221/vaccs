import React ,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nabar from "../components/Navbar";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';




function Signup() {

  const navigate = useNavigate();


    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault();
        

      axios.post('http://localhost:5000/api/addUser',{
            name: name,
            mail: email,
            password: password
        }).then(res=>{

            
            localStorage.setItem('myData', res.config.data);
            navigate('/home')
            
        })

    }


  return (
    <div style={{ width: "80%", float:'right' }}>
      
      <h3 style={{ marginBottom:'20px'}}>Signup To Resgister For The Vaccine</h3>
      <Form style={{ border: '1px solid black', padding: '25px', paddingBottom:'50px'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Nmae</Form.Label>
          <Form.Control type="tex" placeholder="Enter Fullname" onChange={(e)=>{setname(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setemail(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>
        </Form.Group>

        <Button style={{float:'right'}} variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
