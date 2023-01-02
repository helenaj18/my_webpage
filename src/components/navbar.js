import { BrowserRouter, Link } from "react-router-dom";
import {  Nav, Navbar } from 'react-bootstrap'
import '../css/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const NavbarComponent = () => {

    return (
        <Navbar expand="lg" className="mr-auto">
            <Navbar.Brand href={"/"}><img src="house.png" width="50" alt="House"></img></Navbar.Brand>
            <Nav className="me-auto">
                <BrowserRouter>
                    <Link to="/about_me" onClick={() => {window.location.href="/about_me"}} className="nav-link">About me</Link>
                    <Link to="/projects" onClick={() => {window.location.href="/projects"}} className="nav-link">Projects</Link>
                    <Link to="/resume" onClick={() => {window.location.href="/resume"}} className="nav-link">Resume</Link>
                    <Link to="/linkedIn" onClick={() => {window.location.href="https://www.linkedin.com/in/helenajonsdottir/"}} className="nav-link">LinkedIn</Link>
                    <Link to="/github" onClick={() => {window.location.href="https://github.com/helenaj18"}} className="nav-link">Github</Link>
                </BrowserRouter>
            </Nav>
        </Navbar>
    )
}

export default NavbarComponent;