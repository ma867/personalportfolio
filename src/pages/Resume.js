import { Container, Row, Col, Button, Nav, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import NavBar from '../components/Navbar';
import Banner from '../components/Banner';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import ContactMeForm from '../components/ContactMeForm';



export default function Resume() {




    return (<>
        <NavBar page="resume" />
        <br />
        <br />
        <br />
        <Container className=' mt-1 mb-1  p-5  '>
            <h1 className='title text-center'>Resume</h1>
        </Container>
        <Container className='mt-1 mb-5 pt-5 pb-5 p-5 rounded-3 ' style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>

            <Row className='resume-container'>

                <Col xl={4} className="resume-skills ">
                    <h3 className="title pb-3">Skills</h3>
                    <h5 className="title" >Programming</h5>
                    <ul>
                        <li>C#</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>Shell Scripting</li>
                        <li>Java</li>


                    </ul>
                    <h5 className="title" >Databases</h5>
                    <ul>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>Oracle SQL</li>
                        <li>SQLPlus</li>
                    </ul>
                    <h5 className="title" >Libraries/Frameworks</h5>

                    <ul>
                        <li>React</li>
                        <li>Node</li>
                        <li>Jest</li>
                        <li>jQuery</li>
                        <li>Express</li>
                        <li>Flask</li>
                        <li>Bootstrap</li>
                        <li>RabbitMQ</li>

                    </ul>
                    <h5 className="title" >Methodologies</h5>

                    <ul>
                        <li>REST/SOAP</li>
                        <li>MVC</li>
                        <li>OOP</li>
                        <li>Agile</li>



                    </ul>
                    <h5 className="title" >User Experience</h5>

                    <ul>
                        <li>UX Design</li>
                        <li>UX Research</li>
                        <li>Wireframing & Prototyping</li>
                        <li>Storyboards</li>
                        <li>Journey & Empathy Mapping</li>
                        <li>Storyboarding</li>
                        <li>Axure RP & InVision</li>
                        <li>Adobe XD</li>
                    </ul>
                    <h5 className="title" >Miscellaneous</h5>

                    <ul>
                        <li>HTML5</li>
                        <li>CSS3 (SASS/SCSS)</li>
                        <li>XML</li>
                        <li>Adobe Illustrator</li>
                        <li>Git & GitHub</li>
                        <li>Heroku</li>
                        <li>Docker</li>

                    </ul>
                </Col>
                <Col xl={8} className="resume-experience">
                    <h3 className="title pb-3">Experience</h3>
                    <Row>

                        <Col>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <h5 className="title" >Chubb Insurance • Jersey City, NJ</h5>
                                <h5 className="title" >May 2021 – Present</h5>
                            </div>

                            <h6 className='pb-3'>SOFTWARE ENGINEER</h6>

                            <ul>
                                <li>
                                    Designed solutions using C#, .NET Core, and SQL to optimize the existing codebase and improve straight-through processing of endorsements in the Marketplace platform.
                                </li>
                                <li>
                                    Maintained agent portal stability by troubleshooting issues and deploying fixes in lower environments and production for the endorsements team and other small commercial teams.
                                </li>
                                <li>
                                    Ensured high code quality by following SOLID principles, writing unit tests using Moq and xUnit, and reviewing pull requests to maintain best practices within the endorsements team.
                                </li>
                                <li>
                                    Documented new solution workflows to provide a standardized knowledge base for other Marketplace teams.
                                </li>
                                <li>
                                    Improved and fixed coverage bugs for a portal used by underwriters to create and manipulate policies using in-house software built with XML, SOAP, and SQL.
                                </li>
                                <li>
                                    Aided in interviewing incoming technical talent, resulting in three hires for the Technical Associate Program.
                                </li>
                            </ul>
                        </Col>

                    </Row>
                    <Row>

                        <Col>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <h5 className="title" >United Parcel Service • Wayne, NJ  </h5>
                                <h5 className="title" >Jun 2019 – Aug 2019</h5>
                            </div>

                            <h6 className='pb-3'>APPLICATION DEVELOPMENT INTERN</h6>

                            <ul>
                                <li>Converted Java EJB and SOAP project to a RESTful web service to process payments and decrease traffic overhead.</li>
                                <li>Created an application to improve the current system for keeping track of changes to development environments using Docker, Python, Flask, and PostgreSQL.</li>
                            </ul>
                        </Col>

                    </Row>
                    <Row>

                        <Col>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <h5 className="title" >NJIT Connections Lab • Newark, NJ</h5>
                                <h5 className="title" >May 2018 – Jan 2020</h5>
                            </div>
                            <h6 className='pb-3'>UX DESIGNER & RESEARCHER</h6>
                            <ul>
                                <li>Analyzed data collected from interviews and other research material for report writing.</li>
                                <li>Aided in the prototyping process using design software such as Axure and InVision.</li>
                                <li>Facilitated interviews and prototype tests with stakeholders.</li>
                            </ul>
                        </Col>

                    </Row>
                    <h3 className="title pb-3 ">Education</h3>
                    <Row>

                        <Col>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <h5 className="title" >General Assembly • New York, NY</h5>

                            </div>

                            <h6>FULL STACK SOFTWARE ENGINEERING IMMERSIVE</h6>

                            <p>CURRICULUM: JavaScript, React, Node.js, MongoDB, JSX, Express.js, Heroku, Git, Github, Python, HTML, CSS.
                            </p>
                        </Col>

                    </Row>
                    <Row>

                        <Col>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <h5 className="title" >New Jersey Institute of Technology • Newark, NJ</h5>

                            </div>

                            <h6>BACHELOR OF SCIENCE, INFORMATION TECHNOLOGY (WEB DEVELOPMENT SPECIALIZATION)</h6>

                            <p>MINOR IN USER EXPERIENCE DESIGN
                            </p>
                        </Col>

                    </Row>
                </Col>




            </Row>
        </Container>
        <Footer />
    </>)

}