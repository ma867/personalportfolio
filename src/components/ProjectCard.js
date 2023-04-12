import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function ProjectCard({ title, projectType, description, mobileLink, desktopLink, responsive, projectLink }) {
    const navigate = useNavigate()
    return (


        <Row className='mb-5 p-5 rounded-3 project-card' >
            <Col xl={7} className="project-card-images mb-3" >
                <Container className='overflow-auto m-1 p-0 shadow-lg project-card-desktop' >
                    <img src={desktopLink} className="prototype" />

                </Container>
                {
                    responsive === "true" ?
                        <Container className='overflow-auto m-1 p-0 shadow-lg project-card-mobile' >
                            <img src={mobileLink} className="prototype" />

                        </Container>
                        : ""

                }

            </Col >
            <Col xl={5} className='rounded-4' >
                <h1 className='title pb-1'>{title}</h1>
                <h6 className='pb-3'>{projectType}</h6>
                <p className='pb-4'>
                    {description}
                </p>
                {projectLink === "" ?
                    <Link className="btn checkout-button border-0 p-3" disabled><small>COMING SOON →</small></Link>

                    :
                    <Link className="btn checkout-button border-0 p-3" to={projectLink} ><small>CHECK IT OUT →</small></Link>

                }

            </Col>
        </Row>
    )

}