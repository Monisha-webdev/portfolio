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
                                <Rb.Card.Body className="g_box py-5">
                                    <div className="d-flex justify-content-center  pointer">
                                        <div className="circle_download position-relative">
                                            <Bi.BsDownload className="about_icon down_icon"/>
                                        </div>
                                    </div>
                                    <div className="ps-3 mt-3">
                                        <h3 className="text-center w_color">Resume Download</h3>
                                        <p className="mb-0 text-center">You can download the resources and contact me to talk</p>
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