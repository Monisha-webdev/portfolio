import React from "react";
import * as Rb from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "../assets/img/my-avatar.png";
import * as Bi from "react-icons/bs";
import "../assets/css/style.css";
class profile extends React.Component
{
    render()
    {
        return(
            <div>
                <section className="my-5">
                    <Rb.Container className="p-0">
                        <Rb.Row>
                            <Rb.Col sm={12} md={12} lg={12}>
                            <Rb.Card className="shadow">
                                <Rb.Card.Body>
                                    <div className="avatar_warpper">
                                        {/* <div className="text-center"> */}
                                            <Rb.Card className=" shadow mx-auto inner_card">
                                                <div className="text-center">
                                                    <Rb.Image fluid src={Avatar} alt="image" className="avatar_align" /> 
                                                </div>
                                            </Rb.Card>
                                            <div className="text-center my-4">
                                                <h3 className="sidebar_name">Monisha Thanikachalam</h3>
                                            </div>
                                            <Rb.Card className="destination_align mx-auto shadow my-4">
                                                <div className=" text-center">
                                                    <p className="mb-0 p-1 ">Front-End-Developer</p>
                                                </div>
                                            </Rb.Card>
                                            <div className="my-4 seprator"></div>
                                            <div className="personal_info">
                                                <Rb.ListGroup>
                                                    <Rb.ListGroupItem className="my-2">
                                                        <div className="d-flex">
                                                            <span className="box_1 box  text-center">
                                                                <Bi.BsEnvelope className="profile_icon y_color"/>
                                                            </span>
                                                            <div className="ps-2">
                                                                <span className="sb">EMAIL</span><br/>
                                                                <a href="/" className="f-14">monishainfo999@g..</a>
                                                            </div>
                                                        </div>
                                                    </Rb.ListGroupItem>
                                                    <Rb.ListGroupItem className="my-2">
                                                        <div className="d-flex">
                                                            <span className="box_1 box shadow text-center">
                                                                <Bi.BsPhone className="profile_icon y_color"/>
                                                            </span>
                                                            <div className="ps-3">
                                                                <span className="sb">PHONE NO</span><br/>
                                                                <a href="/" className="f-14">+91 9003074612</a>
                                                            </div>
                                                        </div>
                                                    </Rb.ListGroupItem>
                                                    <Rb.ListGroupItem className="my-2">
                                                        <div className="d-flex">
                                                            <span className="box_1 box shadow text-center">
                                                                <Bi.BsCalendarWeek className="profile_icon y_color"/>
                                                            </span>
                                                            <div className="ps-3">
                                                                <span className="sb">DOB</span><br/>
                                                                <a href="/" className="f-14">Sep 09, 1999</a>
                                                            </div>
                                                        </div>
                                                    </Rb.ListGroupItem>
                                                    <Rb.ListGroupItem className="my-2">
                                                        <div className="d-flex">
                                                            <span className="box_1  box shadow text-center">
                                                                <Bi.BsPinMap className="profile_icon y_color"/>
                                                            </span>
                                                            <div className="ps-3">
                                                                <span className="sb">LOCATION</span><br/>
                                                                <a href="/" className="f-14">Chennai-81, TamilNadu</a>
                                                            </div>
                                                        </div>
                                                    </Rb.ListGroupItem>
                                                    
                                                </Rb.ListGroup>
                                            </div>
                                        {/* </div> */}
                                        
                                    </div>
                                </Rb.Card.Body>
                            </Rb.Card>
                            </Rb.Col>
                           
                        </Rb.Row>
                    </Rb.Container>
                </section>
                
            </div>
        )
    }
}
export default profile