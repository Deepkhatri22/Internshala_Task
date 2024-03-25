import React, { useEffect } from 'react';
import '../assets/css/style.css';
import '../assets/css/animate.css';
import '../assets/css/mobile.css';
import '../assets/css/super-classes.css';
import '../assets/bootstarp/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Tastimonials({ data }) {
    useEffect(() => {
        const carousel = document.querySelector('#carouselExampleControls');
        const bsCarousel = new window.bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true
        });

        return () => {
            bsCarousel.dispose();
        };
    }, []);

    return (
        <section className="bg-white w-100 body float-left padding-top padding-bottom tastimonials-con position-relative text-lg-left text-center" id="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="tastimonials-left-con wow slideInLeft">
                            <figure className="mb-0">
                                <img src="/tastimonials-img.png" alt="tastimonials-img" className="img-fluid" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div id="carouselExampleControls" className="carousel slide wow slideInRight" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {data?.map((item, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <div className="testimonials-content">
                                            <h6 style={{ fontSize: '22px', color: '#6f34fe' }}>Testimonials</h6>
                                            <h2 style={{ fontSize: '52px' }}>Happy Clients Feedback</h2>
                                            <figure className="mb-0">
                                                <img src="/comma-icon.png" alt="comma-icon" className="img-fluid" />
                                            </figure>
                                            <div className="testimonials-inner-content">
                                                <p>{item.review}</p>
                                                <span className="d-block auther-name">{item.name}</span>
                                                <span className="d-block">{item.position}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <i className="fas fa-arrow-left d-flex align-items-center justify-content-center"></i>
                              
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <i className="fas fa-arrow-right d-flex align-items-center justify-content-center"></i>
                               
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tastimonials;
