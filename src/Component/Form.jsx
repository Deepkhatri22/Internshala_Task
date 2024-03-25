import React from 'react'
import '../assets/css/style.css'
import '../assets/css/animate.css'
import '../assets/css/mobile.css'
import '../assets/css/super-classes.css'
import '../assets/bootstarp/bootstrap.min.css'

function Form({data}) {
    console.log(data?.email);
  return (
    <>
      <section className=" w-100 body float-left form-main-con padding-top padding-bottom" id="Contact">
          <div className=" container">
            <div className="form-main-inner-con position-relative">
              <div className="generic-title text-center">
                <h6 style={{fontSize:'22px',color:'#6f34fe'}}>Get in Touch</h6>
                <h2 style={{fontSize:'52px'}} className="mb-0">Any Questions? Feel Free<br />
                  to Contact
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-4 order-lg-0 order-2">
                  <div className="contact-information position-relative wow slideInLeft" >
                    <ul className="list-unstyled">
                      <li>
                        <figure className="mb-0 d-flex align-items-center justify-content-center">
                          <img src="/location-icon.png" alt="location-icon" className="img-fluid" />
                        </figure>
                        <div className="contact-information-content">
                          <h5>Address:</h5>
                          <p className="mb-0">{data?.user.about.address}
                          </p>
                        </div>
                      </li>
                      <li>
                        <figure className="mb-0 d-flex align-items-center justify-content-center">
                          <img src="/message-icon.png" alt="message-icon" className="img-fluid"/>
                        </figure>
                        <div className="contact-information-content">
                          <h5>Email:</h5>
                          <p className="mb-0">{data?.user.email}</p>
                          
                          {/* <p className="mb-0">folioflix@gmail.com</p> */}
                        </div>
                      </li>
                      <li className="mb-0">
                        <figure className="mb-0 d-flex align-items-center justify-content-center">
                          <img src="/phone-icon.png" alt="phone-icon" className="img-fluid" />
                        </figure>
                        <div className="contact-information-content">
                          <h5>Phone:</h5>
                          <p className="mb-0">+61 3 8376 6284</p>
                          <p className="mb-0">+800 2345 6789</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8">

                  <div id="form_result">

                  </div>

                  <form id="contactpage" method="POST" className="contact-form wow slideInRight text-lg-left text-center" >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="text" placeholder="Name" name="name" id="name" autoComplete="off" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="email" id="emailHelp" name="emailHelp" placeholder="Email" autoComplete="off" required />
                          <small className="form-text text-muted"></small>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="tel" placeholder="Phone" name="phone" id="phone" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="text" name="subject" placeholder="Subject" id="subject" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className=" form-group mb-0">
                          <textarea placeholder="Message" rows="3" name="comments" id="comments"></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" id="submit" className="appointment-btn">Submit</button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Form
