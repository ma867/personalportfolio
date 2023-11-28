
import { Container, Row, Col, Button, Nav, Form } from 'react-bootstrap';

import NavBar from '../components/Navbar';
import Banner from '../components/Banner';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import ContactMeForm from '../components/ContactMeForm';
import { useRef, useEffect, useState } from 'react';

export default function Main() {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();



    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, [])


    return (
        <>
            <NavBar page="main" />
            <Banner />



            <Container id="projects" className={`justify-content-center fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}>
                <h1 className='title mb-5 text-center'>Projects</h1>
                <ProjectCard
                    title="MyNvoice: Invoice Application"
                    projectType="MERN STACK"
                    description="This full-stack application allows users to have full CRUD abilities for making invoices, generating a PDF version, and send them to their customer."
                    desktopLink="https://i.imgur.com/LJKgv3x.png"
                    responsive=""
                    projectLink="https://mynvoice.herokuapp.com/"
                />
                <ProjectCard
                    title="Youkbox: Music Application"
                    projectType="MERN STACK & SPOTIFY API"
                    description="This full-stack playlist-making application is my personal reiteration of streaming platforms like SoundCloud and the now defunct, 8track.
         Users are able to upload and edit songs as well as curate their custom playlists."
                    mobileLink="https://i.imgur.com/2enRkKm.png"
                    desktopLink="https://i.imgur.com/0wYNnGK.png"
                    responsive="true"
                    projectLink="https://youkbox.herokuapp.com/"
                />
                <ProjectCard
                    title="Shorty: Link Shortener "
                    projectType="MERN STACK"
                    description="Shorty is a URL shortener tool that takes a long and complex URL and converts it into a shorter, more manageable URL. This shortened URL can then be shared and used instead of the original, long URL. Some popular URL shortening services include Bitly and TinyURL."
                    mobileLink="https://i.imgur.com/obngodx.png"
                    desktopLink="https://i.imgur.com/NNb7Hfw.png"
                    responsive="true"
                    projectLink="https://shrt-y.herokuapp.com/"
                />
                {/*
                <ProjectCard
                    title="Movio: Movie Reviews Site "
                    projectType="MERN STACK"
                    description="This full-stack application is my personal reiteration of movie review platform Rotten Tomatoes. Users have full CRUD abilities for making reviews under their favorite films. This app leverages OMDB & IMDB APIs to pull film data."
                    desktopLink="https://i.imgur.com/3m6Sqo5.png"
                    responsive=""
                    projectLink="https://movio.herokuapp.com/"
                    style={{ display: "none", visibility: "hidden" }}
                />
            */}
            </Container>

            <ContactMeForm isVisible={isVisible} domRef={domRef} />


            <Footer />
        </>
    )
}

