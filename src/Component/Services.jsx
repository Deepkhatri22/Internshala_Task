import React from 'react'
import '../assets/css/style.css'
import '../assets/css/animate.css'
import '../assets/css/mobile.css'
import '../assets/css/super-classes.css'
import '../assets/bootstarp/bootstrap.min.css'

function Services({ data }) {
  return (
    <>
      <section className="w-100 body float-left service-con padding-top padding-bottom position-relative" id="service-con" >
        <div className="container">
          <div className="service-inner-con position-relative">
            <div className="generic-title text-center">
              <h6 style={{ fontSize: '22px', color: '#6f34fe' }}>My Expertise</h6>
              <h2 className="mb-0" style={{ fontSize: '52px' }}>Provide Wide Range of<br />
                Digital Services
              </h2>
            </div>

            <div className="service-box wow fadeInUp">
              <div className="row">
                {data?.map((items, index) => (
                  <div key={index} className="col-lg-6 col-md-6">
                    <div className="service-box-item">
                      <figure className="mb-0">
                        <img src={items.image.url} alt="service-icon" className="img-fluid" />
                      </figure>
                      <div className="service-box-item-content">
                        <h4>{items.name}</h4>
                        <h5>Charges: {items.charge}</h5>
                        <p>{items.desc} </p>
                        {/* <a href="#" data-toggle="modal" data-target="#Ui-Design">Read More</a> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
