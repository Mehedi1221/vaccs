import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function ColorSchemesExample() {
  return (
    <>
      <Navbar style={{position:'absolute', top:'0px', left:'100px', marginTop:'10px'}}>
        <Container>
          <Navbar.Brand href="/dashboard">Vaccination</Navbar.Brand>
          <Nav className="me-auto" style={{marginLeft:'290px'}}>
            <Nav.Link href="/RegisteredPeople">Registered People</Nav.Link>
            <Nav.Link href="/recivedmailPeople">People Who Recived Mail</Nav.Link>
            <Nav.Link href="/vaccinatedPeople">Vaccinated People</Nav.Link>
            <Nav.Link href="/managev">Manage Vaccine</Nav.Link>
            <Button href='http://localhost:3006/'>Logout</Button>



          </Nav>
        </Container>
      </Navbar>



    </>
  );
}

export default ColorSchemesExample;
