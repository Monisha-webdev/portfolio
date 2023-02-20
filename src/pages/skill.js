import React from "react";
import * as Rb from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Bi from "react-icons/bs";
import * as Ai from "react-icons/ai";
import * as Tb from "react-icons/tb";
import * as Si from "react-icons/si";
import * as Fa from "react-icons/fa";
class Skill extends React.Component
{
    render(){
        return(
            <div className="top_align">
                    <Rb.Card className="shadow card_align">
                        <Rb.Card.Body>
                            <section>
                                <div className="main_header">
                                    <h1 className="">Skill Set</h1>
                                    <div className="divider"></div>
                                </div>
                            </section>
                            <section className="mt-3">
                                <div className="w_color">
                                    <h4 className="text-center">Core Language</h4>
                                </div>
                                <Rb.Card className="mt-4">
                                    <Rb.Card.Body className="g_box ">
                                        <Rb.Row>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} className="mx-auto">
                                                <div className="logo_circle mx-auto">
                                                    <Ai.AiOutlineHtml5 className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">HTML</p>
                                            </Rb.Col>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} className="mx-auto">
                                                <div className="logo_circle mx-auto">
                                                    <Tb.TbBrandCss3 className="skill_logo"/>
                                                    
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">CSS</p>
                                            </Rb.Col>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} className="mx-auto">
                                                <div className="logo_circle mx-auto">
                                                    <Tb.TbBrandJavascript className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">JavaScript</p>
                                            </Rb.Col>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} className="mx-auto">
                                                <div className="logo_circle mx-auto">
                                                    <Si.SiJquery className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">Jquery</p>
                                            </Rb.Col>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} className="mx-auto">
                                                <div className="logo_circle mx-auto">
                                                    <Fa.FaSass className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">Sass</p>
                                            </Rb.Col>
                                        </Rb.Row>
                                    </Rb.Card.Body>
                                </Rb.Card>
                            </section>
                            <section className="mt-5">
                                <div className="w_color">
                                    <h4 className="text-center">FrameWorks</h4>
                                </div>
                                <Rb.Card className="mt-4">
                                    <Rb.Card.Body className="g_box ">
                                        <Rb.Row>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} >
                                                <div className="logo_circle mx-auto">
                                                    <Bi.BsBootstrap className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">Bootstrap</p>
                                            </Rb.Col>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} >
                                                <div className="logo_circle mx-auto">
                                                    <Si.SiMaterialui className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">Material Ui</p>
                                            </Rb.Col>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} >
                                                <div className="logo_circle mx-auto">
                                                    <Si.SiTailwindcss className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">TwilWind Css</p>
                                            </Rb.Col>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} >
                                                <div className="logo_circle mx-auto">
                                                    <Bi.BsBootstrapReboot className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">React Bootstrap</p>
                                            </Rb.Col>
                                            
                                        </Rb.Row>
                                    </Rb.Card.Body>
                                </Rb.Card>
                            </section>
                            <section className="mt-5">
                                <div className="w_color">
                                    <h4 className="text-center">Javascript Library</h4>
                                </div>
                                <Rb.Card className="mt-4">
                                    <Rb.Card.Body className="g_box ">
                                        <Rb.Row>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} >
                                                <div className="logo_circle mx-auto">
                                                    <Si.SiReact className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">ReactJs</p>
                                            </Rb.Col>
                                           
                                            
                                        </Rb.Row>
                                    </Rb.Card.Body>
                                </Rb.Card>
                            </section>
                            <section className="mt-5">
                                <div className="w_color">
                                    <h4 className="text-center">DataBase</h4>
                                </div>
                                <Rb.Card className="mt-4">
                                    <Rb.Card.Body className="g_box ">
                                        <Rb.Row>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} >
                                                <div className="logo_circle mx-auto">
                                                    <Si.SiMicrosoftsqlserver className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">SQL</p>
                                            </Rb.Col>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} >
                                                <div className="logo_circle mx-auto">
                                                    <Si.SiOracle className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">Oracal</p>
                                            </Rb.Col>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} >
                                                <div className="logo_circle mx-auto">
                                                    <Si.SiJson className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">Json</p>
                                            </Rb.Col>
                                        </Rb.Row>
                                    </Rb.Card.Body>
                                </Rb.Card>
                            </section>
                            <section className="mt-5">
                                <div className="w_color">
                                    <h4 className="text-center">Others</h4>
                                </div>
                                <Rb.Card className="mt-4">
                                    <Rb.Card.Body className="g_box ">
                                        <Rb.Row>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} >
                                                <div className="logo_circle mx-auto">
                                                    <Bi.BsWordpress className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">Wordpress</p>
                                            </Rb.Col>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} >
                                                <div className="logo_circle mx-auto">
                                                    <Si.SiFigma className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">Figma</p>
                                            </Rb.Col>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} >
                                                <div className="logo_circle mx-auto">
                                                    <Si.SiAdobexd className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">Adobe XD</p>
                                            </Rb.Col>
                                            <Rb.Col sm={6} md={3} lg={2} xl={2} >
                                                <div className="logo_circle mx-auto">
                                                    <Bi.BsGithub className="skill_logo"/>
                                                </div>
                                                <p className="w_color text-center fw-5 mb-0 mt-2">Git</p>
                                            </Rb.Col>
                                        </Rb.Row>
                                    </Rb.Card.Body>
                                </Rb.Card>
                            </section>
                        </Rb.Card.Body>
                    </Rb.Card>
                </div>
        )
    }
}
export default Skill