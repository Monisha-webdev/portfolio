import React from "react";
import * as Rb from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as Bi from "react-icons/bs";
class Resume extends React.Component
{
    render(){
        return(
            <div className="top_align">
                    <Rb.Card className="shadow top_align_ab">
                        <Rb.Card.Body>
                            <section>
                                <div>Resume</div>
                            </section>
                        </Rb.Card.Body>
                    </Rb.Card>    
                
            </div>
        )
    }
}
export default Resume