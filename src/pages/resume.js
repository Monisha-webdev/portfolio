import React from "react";
import * as Rb from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Bi from "react-icons/bs";
class Resume extends React.Component
{
    render(){
        return(
            <div className="top_align">
                    <Rb.Card className="shadow card_align bc_align">
                        <Rb.Card.Body>
                            <section>
                                <div className="main_header">
                                    <h1 className="">Resume</h1>
                                    <div className="divider"></div>
                                </div>
                            </section>
                            <section>
                            <Rb.Card className="mt-4">
                                <Rb.Card.Body className="g_box">
                                    <div className="d-flex">
                                        <Bi.BsTextareaResize className="about_icon"/>
                                        <div className="ps-3">
                                            <h3>Web Design</h3>
                                            <p className="mb-0">The most modern and high-quality design made at a professional level.</p>
                                        </div>
                                    </div>
                                </Rb.Card.Body>
                            </Rb.Card>
                            </section>
                        </Rb.Card.Body>
                    </Rb.Card>
                </div>
        )
    }
}
export default Resume