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
                            <Rb.Tab eventKey="all" title="All">
                                <h1 className="">Projects 1</h1>
                            </Rb.Tab>
                            <Rb.Tab eventKey="webapp" title="Web Applicaton">
                                <h1 className="">Projects 2</h1>
                            </Rb.Tab>
                            <Rb.Tab eventKey="statweb" title="Static Website">
                                <h1 className="">Projects 3</h1>
                            </Rb.Tab>
                            <Rb.Tab eventKey="wordpress" title="Wordpress">
                                <h1 className="">Projects 3</h1>
                            </Rb.Tab>
                            <Rb.Tab eventKey="react" title="React js">
                                <h1 className="">Projects 3</h1>
                            </Rb.Tab>
                            <Rb.Tab eventKey="figma" title="figma Design">
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