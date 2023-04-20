import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        < Container fluid className="mb-5">
            <Row>

                <Col className="footer-socials" >

                    <Link to='https://github.com/ma867'>
                        <FontAwesomeIcon className="social-icon" icon={faGithubAlt} />
                    </Link>
                    <Link to='https://www.linkedin.com/in/ma867/'>
                        <FontAwesomeIcon className="social-icon" icon={faLinkedinIn} />
                    </Link>

                </Col>
            </Row>
            <Row >
                <Col className="pt-4 footer-text" >
                    <p><small>Last Updated 05.23.23 ♡ Melissa Alzate &#169;</small></p>
                </Col>

            </Row>
        </Container>
    )
}