import React from "react";
import * as Rb from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as Bi from "react-icons/bs";
class contact extends React.Component
{
    render(){
        // top_align_ab
        return(
            <div className="top_align">
                    <Rb.Card className="shadow card_align bc_align">
                        <Rb.Card.Body>
                            <section>
                                <div className="main_header">
                                    <h1 className="">Contact</h1>
                                    <div className="divider"></div>
                                </div>
                                <div className="sub_heading mt-4">
                                    <h2 className="mb-0">Contact Form</h2>
                                </div>
                                <Rb.Row>
                                    <Rb.Col sm={12} md={6} lg={6} xl={6}>
                                        <Rb.Form className="mt-4">
                                        <Rb.Form.Group className="mb-4" controlId="formBasicEmail">
                                            <Rb.Form.Label className="w_color">Full Name</Rb.Form.Label>
                                            <Rb.Form.Control className="input_align" type="text" placeholder=" Enter Full Name" />
                                        </Rb.Form.Group>
                                        <Rb.Form.Group className="mb-4" controlId="formBasicEmail">
                                            <Rb.Form.Label className="w_color">Email Id</Rb.Form.Label>
                                            <Rb.Form.Control className="input_align" type="email" placeholder="Enter email Id" />
                                        </Rb.Form.Group>
                                        </Rb.Form>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={6} xl={6}>
                                        <Rb.Form className="mt-4">
                                        <Rb.Form.Group className="mb-4" controlId="formBasicEmail">
                                            <Rb.Form.Label className="w_color">Company Name</Rb.Form.Label>
                                            <Rb.Form.Control className="input_align" type="text" placeholder="Enter Company Name" />
                                        </Rb.Form.Group>
                                        <Rb.Form.Group className="mb-4" controlId="formBasicEmail">
                                            <Rb.Form.Label className="w_color">Contact Number</Rb.Form.Label>
                                            <Rb.Form.Control className="input_align" type="text" placeholder="Enter contact number" />
                                        </Rb.Form.Group>
                                        </Rb.Form>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={12} lg={12} xl={12}>
                                        <Rb.Form className="">
                                        <Rb.Form.Group className="mb-4" controlId="formBasicEmail">
                                            <Rb.Form.Label className="w_color">Your Message</Rb.Form.Label>
                                            <Rb.Form.Control as="textarea" className="input_align" placeholder="Enter Your Message" style={{ height: '100px' }}/>
                                            
                                        </Rb.Form.Group>
                                        
                                        </Rb.Form>
                                    </Rb.Col>
                                    
                                </Rb.Row>
                                <div className="text-end">
                                    <Rb.Button className="btn_align"> Send Message</Rb.Button>
                                </div>
                                
                            </section>
                        </Rb.Card.Body>
                    </Rb.Card>
                 
            </div>
        )
    }
}
export default contact
