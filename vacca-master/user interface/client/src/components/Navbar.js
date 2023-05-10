import React from 'react'
import {Container,Navbar,Nav, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Nabar() {
    return (
            <Navbar bg="light" expand="lg" fixed="top" >
                <Container  >
                    <Navbar.Brand as={Link} to="/home" >Corona vaccination</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/Type">Types</Nav.Link>
                            <Nav.Link as={Link} to="/vaccines">Get Registered</Nav.Link>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                           <Link to="/"><Button >Logout</Button></Link> 
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    )
}

export default Nabar
