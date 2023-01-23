import React from "react";
import * as Rb from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
                            <Rb.Tab eventKey="home" title="Home">
                                <h1 className="">Projects 1</h1>
                            </Rb.Tab>
                            <Rb.Tab eventKey="profile" title="Profile">
                                <h1 className="">Projects 2</h1>
                            </Rb.Tab>
                            <Rb.Tab eventKey="contact" title="contact">
                                <h1 className="">Projects 3</h1>
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