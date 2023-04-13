import { Container, Row, Col } from 'react-bootstrap';

export default function Banner() {

    return (
        <Container fluid className="main-banner mt-3">
            <Container>
                <Row>
                    <Col className="mb-5 main-banner-picture" xl={4}>

                        <Container className="profile-picture " />
                    </Col>
                    <Col className="main-banner-text" xl={8} >
                        <h1 className='display-1 title typewriter'>
                            Hi, I'm Melissa!</h1>
                        <p>I am a Junior Software Engineer with an educational background in Web Development and UI/UX Design, with ample collegiate experience in back-end development. UI design is also a special interest of mine, stemming from a passion in creative drawing and crafting.</p>
                    </Col>
                </Row>

            </Container>
        </Container>
    )
}