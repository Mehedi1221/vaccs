import React from 'react'
import {Tab,Row,Col,Nav} from 'react-bootstrap'
import Sonnet1 from './Sonnet1'
import Sonnet2 from './Sonnet2'
import Sonnet3 from './Sonnet3'
import Sonnet4 from './Sonnet4'
import Navbar from './Navbar'


function Types() {
    return (


        <div>
            <Navbar/>
            <div>
                <h1 className="cc">Types of corona</h1>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">229E (alpha coronavirus)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">NL63 (alpha coronavirus)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">OC43 (beta coronavirus)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">HKU1 (beta coronavirus)</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content style={{margin:'3%'}}>
                            <Tab.Pane eventKey="first">
                                <Sonnet1 />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Sonnet2 />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Sonnet3 />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Sonnet4/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Types
