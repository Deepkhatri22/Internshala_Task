import React from 'react'
import '../assets/css/style.css'
import '../assets/css/animate.css'
import '../assets/css/mobile.css'
import '../assets/css/super-classes.css'
import '../assets/bootstarp/bootstrap.min.css'

function Footer({data}) {
  return (
    <>
       <div className="w-100 float-left weight-footer-con position-relative">
          <div className="container">
            <div className="weight-footer-content text-center wow fadeInUp" >
              <figure className="">
                <img src="/footer-logo.png" alt="footer-logo" className="img-fluid" />
              </figure>
              <div className="footer-navbar">
                <ul className="list-unstyled">
                  <li className="d-inline-block border-left-0 pl-0"><a href="#home">Home</a></li>
                  <li className="d-inline-block"><a href="#about-con">About</a></li>
                  <li className="d-inline-block"><a href="#service-con">Services</a></li>
                  <li className="d-inline-block"><a href="#Portfolio">Portfolio</a></li>
                  <li className="d-inline-block"><a href="#testimonials">Blog</a></li>
                  <li className="d-inline-block pr-0"><a href="#Contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-social-icon">
                <ul className="mb-0 gap-3">
                {data?.map((items, index) => (
                  <li key={index} className="d-inline-block">
                  <a href={items.url} target='_blank'>
                    <img src={items.image.url} height={50} width={50} alt={items.platform} />
                    </a>
                </li>
                ))}
                </ul>
              </div>
            </div>
            <div className="copy-right-content text-center">
              <p className="mb-0">Copyright 2022 FolioFlix.com | All Rights Reserved.</p>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Footer
