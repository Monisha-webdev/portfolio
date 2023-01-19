import React from "react";
import * as Rb from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Bi from "react-icons/bs";
class about extends React.Component
{
    render(){
        return(
            <div className="top_align">
                    <Rb.Card className="shadow card_align">
                        <Rb.Card.Body>
                            <section>
                                <div className="main_header">
                                    <h2 className="text-white">About Me</h2>
                                </div>
                                <div className="mt-3">
                                    <p className="">I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                                    <p className="">My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                                </div>
                            </section>
                            <section>
                                <div className="sub_heading mt-4">
                                    <h2 className="">What I'm Doing</h2>
                                    <Rb.Row className="">
                                        <Rb.Col sm={12} md={6} lg={6} xl={6} className="py-2">
                                            <Rb.Card className="">
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
                                        </Rb.Col>
                                        <Rb.Col sm={12} md={6} lg={6} xl={6} className="py-2">
                                            <Rb.Card>
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
                                        </Rb.Col>
                                        <Rb.Col sm={12} md={6} lg={6} xl={6} className="py-2">
                                            <Rb.Card>
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
                                        </Rb.Col>
                                        <Rb.Col sm={12} md={6} lg={6} xl={6} className="py-2">
                                            <Rb.Card>
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
export default about