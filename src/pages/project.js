import React from "react";
import * as Rb from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Img_1 from "../assets/img/img1.png"
import * as Bi from "react-icons/bs";

// import * as Bi from "react-icons/bs";
class Project extends React.Component
{
    render(){
        return(
            <div className="top_align">
                    <Rb.Card className="shadow card_align">
                        <Rb.Card.Body>
                            <section>
                                <div className="main_header">
                                    <h1 className="">Projects</h1>
                                    <div className="divider"></div>
                                </div>
                            </section>
                            <section>
                            <Rb.Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 mt-4">
                            <Rb.Tab eventKey="all" title="All">
                                <Rb.Row>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    {/* 2 row */}
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    {/* 3 row */}
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                </Rb.Row>
                            </Rb.Tab>
                            <Rb.Tab eventKey="webapp" title="Web Applicaton">
                            <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                            </Rb.Tab>
                            <Rb.Tab eventKey="statweb" title="Static Website">
                            <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    
                            </Rb.Tab>
                            <Rb.Tab eventKey="wordpress" title="Wordpress">
                            <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                   
                            </Rb.Tab>
                            <Rb.Tab eventKey="react" title="React js">
                            <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                            </Rb.Tab>
                            <Rb.Tab eventKey="figma" title="figma Design">
                            <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    <Rb.Col sm={12} md={6} lg={4} xl={4} className="mb-3">
                                    <div className="con">
                                        <Rb.Image fluid src={Img_1} alt="image" className="pro_h image" /> 
                                        <div className="overlay">
                                            <div class="text"><Bi.BsEyeFill className="y_color"/></div>
                                        </div>
                                    </div>
                                    </Rb.Col>
                                    
                            </Rb.Tab>
                            </Rb.Tabs>
                            </section>
                        </Rb.Card.Body>
                    </Rb.Card>    
                
            </div>
        )
    }
}
export default Project