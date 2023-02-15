import React from "react";
import * as Rb from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link } from "react-router-dom";
// import * as Bi from "react-icons/bs";
class header extends React.Component
{
    render(){
        return(
            <div>
                <section class="">
                    <Rb.Row>
                        <Rb.Col sm={12} md={12} lg={12}>
                            <Rb.Navbar className="py-0">
                                <Rb.Container className="p-0">
                                    <Rb.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Rb.Navbar.Collapse id="responsive-navbar-nav">
                                        <Rb.Card className="ms-auto nav_head">
                                            <Rb.Nav className="nav_align shadow py-3 nav_head">
                                                <Link to="/about" className="mx-3">About</Link>
                                                <Link to="/resume" className="mx-3">Resume</Link>
                                                <Link to="/skill" className="mx-3">Skills</Link>
                                                <Link to="/project" className="mx-3">Project</Link>
                                                <Link to="/ed_ex" className="mx-3">Education & Experiences</Link>
                                                <Link to="/contact" className="mx-3">Contact</Link>
                                            </Rb.Nav>
                                        </Rb.Card>
                                    </Rb.Navbar.Collapse>
                                </Rb.Container>
                            </Rb.Navbar>
                        </Rb.Col>
                    </Rb.Row>
                </section>
            </div>
        )
    }
}
export default header