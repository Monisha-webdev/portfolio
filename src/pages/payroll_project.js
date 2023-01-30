import React from "react";
import * as Rb from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Img_1 from "../assets/img/img1.png"
import * as Bi from "react-icons/bs";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


class Payroll_pro extends React.Component
{
    
    render(){
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 2
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
        return(
            <div>
                <Rb.Card className="shadow card_align">
                    <Rb.Card.Body className="px-0">
                        <section className="px-4">
                            <div className="main_header">
                                <h1 className="">Payroll Product</h1>
                                <div className="divider"></div>
                            </div>
                        </section>
                        <section className="mt-4 px-4">
                            <p><Bi.BsArrowLeft className="me-1"/>Back to Project</p>
                        </section>
                        <section className="mt-4">
                            <Rb.Image fluid src={Img_1} alt="image" className="" /> 
                        </section>
                        <section className="px-4 mt-4"> 
                            <Rb.Row>
                                <Rb.Col sm={12} md={6} lg={3} xl={3}>
                                    <div className="d-flex">
                                        <span className="box_1 box  text-center">
                                            <Bi.BsPerson className="profile_icon y_color"/>
                                        </span>
                                        <div className="ps-2">
                                            <span className="sb">CLIENT</span><br/>
                                            <p href="/" className="f-14">ArtTemplate</p>
                                        </div>
                                    </div>
                                </Rb.Col>
                                <Rb.Col sm={12} md={6} lg={3} xl={3}>
                                    <div className="d-flex">
                                        <span className="box_1 box  text-center">
                                            <Bi.BsFillLayersFill className="profile_icon y_color"/>
                                        </span>
                                        <div className="ps-2">
                                            <span className="sb">CATEGORY</span><br/>
                                            <p href="/" className="f-14">Web Design</p>
                                        </div>
                                    </div>
                                </Rb.Col>
                                <Rb.Col sm={12} md={6} lg={3} xl={3}>
                                    <div className="d-flex">
                                        <span className="box_1 box  text-center">
                                            <Bi.BsCalendarRange className="profile_icon y_color"/>
                                        </span>
                                        <div className="ps-2">
                                            <span className="sb">DATE</span><br/>
                                            <p href="/" className="f-14">27 June, 2021</p>
                                        </div>
                                    </div>
                                </Rb.Col>
                            </Rb.Row>
                            <div className="mt-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, arcu tortor, feugiat in elit. Hendrerit sit suspendisse eget cras suspendisse aenean. Donec nunc quis sit augue malesuada nullam sit tincidunt. Dictum vel egestas pellentesque ut nunc lorem ut tortor at.</p>
                                <p>Scelerisque ipsum pretium augue neque at. Bibendum semper ipsum arcu, nibh blandit facilisi. Quis dictum ornare ultricies porta lectus in metus, purus facilisi. Egestas amet, enim in maecenas ultrices. Ornare donec volutpat enim at eget habitant eleifend. Enim, nisl porttitor egestas etiam a, magna neque.</p>
                            </div>
                            <div className="mt-4">
                                <Carousel responsive={responsive}swipeable={false}
                                    draggable={true}
                                    showDots={true}
                                    ssr={true} // means to render carousel on server-side.
                                    infinite={true}
                                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                    autoPlay={false}
                                    autoPlaySpeed={1000}
                                    keyBoardControl={true}
                                    transitionDuration={500}
                                    containerClass="carousel-container"
                                    removeArrowOnDeviceType={["tablet", "mobile"]}
                                    deviceType={this.props.deviceType}
                                    dotListClass="custom-dot-list-style">
                                    <Rb.Image fluid src={Img_1} alt="image" className="mx-3" /> 
                                    <Rb.Image fluid src={Img_1} alt="image" className="mx-3" /> 
                                    <Rb.Image fluid src={Img_1} alt="image" className="mx-3" /> 
                                    <Rb.Image fluid src={Img_1} alt="image" className="mx-3" /> 
                                </Carousel>
                            </div>
                        </section>
                    </Rb.Card.Body>
                </Rb.Card>
            </div>
        )
    }
}
export default Payroll_pro