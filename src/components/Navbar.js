import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { useRef, useState, useEffect } from 'react';

export default function NavBar({ page }) {
    const navbarRef = useRef(null);
    const [showBrand, setShowBrand] = useState(false)

    const showBrandOnScroll = () => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100) {
                setShowBrand(true)
            }
            else {
                setShowBrand(false)
            }
        }
        )
    }

    useEffect(() => {
        showBrandOnScroll();
    }, [])

    return (
        <Navbar

            ref={navbarRef}
            collapseOnSelect
            expand="lg"
            style={{ backgroundColor: "#f9e9dd", height: "91px" }}
            fixed="top"
        >
            <Container fluid>
                <Navbar.Brand href="/" >
                    {
                        page === "resume" ?
                            <img
                                width="65"
                                src="https://i.imgur.com/Honk8Kf.png"
                                alt="youkbox"

                            />
                            :

                            showBrand ?
                                <img
                                    width="65"
                                    src="https://i.imgur.com/Honk8Kf.png"
                                    alt="youkbox"

                                />
                                : ""
                    }


                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            page === "main" ?
                                <Nav.Link href="#projects">
                                    Projects
                                </Nav.Link>
                                :
                                <Nav.Link href="/">
                                    Home
                                </Nav.Link>


                        }


                        <Nav.Link href="/resume">
                            Resume
                        </Nav.Link>
                        {
                            page === "main" ?
                                <Nav.Link href="#contact-me">
                                    Contact Me
                                </Nav.Link>
                                :
                                ""


                        }



                    </Nav>
                    <Nav className="ms-auto">



                        <Nav.Link href="https://github.com/ma867">
                            <FontAwesomeIcon className="social-icon" icon={faGithubAlt} />
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/ma867/">
                            <FontAwesomeIcon className="social-icon" icon={faLinkedinIn} />
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse></Container>


        </Navbar>
    )
}