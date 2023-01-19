import React from "react";
import * as Rb from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Bi from "react-icons/bs";
class Resume extends React.Component
{
    render(){
        return(
            <div className="top_align">
                    <Rb.Card className="shadow card_align">
                        <Rb.Card.Body>
                            <section>
                                <div className="main_header">
                                    <h1 className="">Resume</h1>
                                    <div className="divider"></div>
                                </div>
                                <div className="mt-4">
                                    <Rb.Row>
                                        <Rb.Col sm={1} md={1} lg={1} xl={1} xxl={1}>
                                            <div className="d-flex justify-content-center">
                                                <span className="box_1 box  text-center">
                                                    <Bi.BsEnvelope className="profile_icon y_color"/>
                                                </span>
                                            </div>
                                            
                                        </Rb.Col>
                                        <Rb.Col sm={11} md={11} lg={11} xl={11} xxl={11} className="my-auto">
                                        <div className="sub_heading ">
                                            <h2 className="mb-0">Experience</h2>
                                        </div>
                                        </Rb.Col>
                                    </Rb.Row>
                                    <Rb.Row>
                                        <Rb.Col sm={1} md={1} lg={1} xl={1} xxl={1}>
                                            <div className="position-relative">
                                                <div className="time_line mx-auto"></div>
                                                <div className="tl_bcir">
                                                    <div className="tl_scir"></div>
                                                </div>
                                            </div>
                                            
                                        </Rb.Col>
                                        <Rb.Col sm={11} md={11} lg={11} xl={11} xxl={11} className="">
                                        <div className="sub_heading ">
                                            <h2 className="mb-0">Experience</h2>
                                        </div>
                                        </Rb.Col>
                                    </Rb.Row>
                                </div>
                            </section>
                        </Rb.Card.Body>
                    </Rb.Card>
                </div>
        )
    }
}
export default Resume