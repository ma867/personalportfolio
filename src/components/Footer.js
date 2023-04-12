import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {

    return (
        < Container fluid className="mb-5">
            <Row>

                <Col className="footer-socials" >

                    <a>
                        <FontAwesomeIcon className="social-icon" icon={faGithubAlt} />
                    </a>
                    <a>
                        <FontAwesomeIcon className="social-icon" icon={faLinkedinIn} />
                    </a>

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