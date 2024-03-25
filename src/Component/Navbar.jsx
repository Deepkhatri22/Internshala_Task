import React, { useState } from 'react';
import '../assets/css/style.css';
import '../assets/css/animate.css';
import '../assets/css/mobile.css';
import '../assets/css/super-classes.css';
import '../assets/bootstarp/bootstrap.min.css';
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
        <header style={{backgroundColor:'white'}} className="main-header fixed-top body">
            <div className="container pl-0 pr-0">
                <div className="header-con">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <a className="navbar-brand p-0" href="index.html">
                            <img src="/logo-img.png" alt="logo-img" className="img-fluid" />
                        </a>
                        {/* Toggle button for small screens */}
                        <button className="navbar-toggler py-1   " type="button" onClick={toggleCollapse} aria-expanded={!isCollapsed ? true : false} aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon"></span> */}
                            <span><AiOutlineMenu /></span>
                        </button>
                        {/* Navigation links */}
                        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'} justify-content-end`} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active pl-0">
                                    <a className="nav-link p-0 is-active" href="#home">Home<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="#service-con">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="#about-con">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="#Portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="#testimonials">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="#blog">Blog</a>
                                </li>
                            </ul>
                            <div className="d-inline-block contact">
                                <a style={{ textDecoration: 'none', color: 'white' }} href="#Contact">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        </>
    );
}

export default Navbar;
