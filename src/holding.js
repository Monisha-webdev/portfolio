import React from "react";
import * as Rb from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./component/personal_profile";
import Header from "./component/header";
import About from "./pages/about";
import Resume from "./pages/resume";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Edex from "./pages/ed_ex";
import Skill from "./pages/skill";
import Payroll_project from "./pages/payroll_project";
class holding extends React.Component
{
    render(){
        return(
            <BrowserRouter>
                <Rb.Container>
                    <Rb.Row>
                        <Rb.Col sm={12} md={3} lg={3} xl={3}>
                            <Profile/>
                        </Rb.Col>
                        <Rb.Col sm={12} md={9} lg={9} xl={9}>
                            <Header/>
                           
                       
                                <Routes>
                                    {/* <Route path="/" element={}> */}
                                        <Route exact index path="/about" element={<About />} />
                                        <Route path="/project" element={<Project />} />
                                        <Route path="/resume" element={<Resume />} />
                                        <Route path="/ed_ex" element={<Edex />} />
                                        <Route path="/contact" element={<Contact />} />
                                        <Route path="/skill" element={<Skill />} />
                                         <Route path="/payroll_project" element={<Payroll_project />} />
                                    {/* </Route> */}
                                </Routes>
                            {/* <About/> */}
                        </Rb.Col>
                    </Rb.Row>
                </Rb.Container>
            </BrowserRouter>
                
        )
    }
}
export default holding;