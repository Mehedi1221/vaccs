import React from 'react'
import { Card, Button } from 'react-bootstrap'

import eng from '../images/img1.jpg'
import ger from '../images/img2.jpg'
import swi from '../images/img3.jpg'
import can from '../images/img4.jpg'
import japan from '../images/img5.jpg'
import china from '../images/img6.jpg'
import ind from '../images/img7.jpg'
import pak from '../images/img8.jpg'
import ban from '../images/img9.jpg'

function CCards() {
    return (
        <div>

            
            <div>
                <div className="crdclm">
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img className="photo" variant="top" src={eng} />
                        <Card.Body>
                            <Card.Title>England</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">For more</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="crdclm">
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img className="photo" variant="top" src={ger} />
                        <Card.Body>
                            <Card.Title>Germany</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">For more</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="crdclm">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="photo" variant="top" src={swi} />
                    <Card.Body>
                        <Card.Title>Switzerland</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">For more</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="crdclm">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="photo" variant="top" src={can} />
                    <Card.Body>
                        <Card.Title>Canada</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">For more</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="crdclm">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="photo" variant="top" src={japan} />
                    <Card.Body>
                        <Card.Title>Japan</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">For more</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="crdclm">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="photo" variant="top" src={china} />
                    <Card.Body>
                        <Card.Title>China</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">For more</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="crdclm">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="photo" variant="top" src={ind} />
                    <Card.Body>
                        <Card.Title>India</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">For more</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="crdclm">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="photo" variant="top" src={pak} />
                    <Card.Body>
                        <Card.Title>Pakistan</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">For more</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="crdclm">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="photo" variant="top" src={ban} />
                    <Card.Body>
                        <Card.Title>Bangladesh</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">For more</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default CCards
