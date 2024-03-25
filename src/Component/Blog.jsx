import React from 'react'
import '../assets/css/style.css'
import '../assets/css/animate.css'
import '../assets/css/mobile.css'
import '../assets/css/super-classes.css'
import '../assets/bootstarp/bootstrap.min.css'

function Blog() {
  return (
    <>
      <section className="w-100 body float-left blog-con padding-top padding-bottom position-relative" id="blog">
          <div className="container">
            <div className="blog-inner-con position-relative">
              <div className="generic-title text-center">
                <h6 style={{fontSize:'22px',color:'#6f34fe'}}>Latest News</h6>
                <h2 style={{fontSize:'52px'}} className="mb-0">Blog & Articles</h2>
              </div>
              <div className="blog-box wow fadeInUp" >
                <div className="row">
                  <div className="col-lg-4">
                    <div className="blog-box-item">
                      <div className="blog-img">
                        <a href="#" data-toggle="modal" data-target="#blog-model-1">
                          <figure className="mb-0">
                            <img src="/blog-img-1.png" alt="blog-img" className="img-fluid" />
                          </figure>
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="blog-auteher-title">
                          <span>By David William</span>
                          <span className="float-lg-right">Mar 8, 2022</span>
                        </div>
                        <a href="#" style={{textDecoration:'none'}} data-toggle="modal" data-target="#blog-model-1">
                          <h4>Quis autem vea eum
                            iure reprehenderit
                          </h4>
                        </a>
                        <p>Dolor repellendus temporibus autem
                          quibusdam officiis debitis rerum nece
                          aibus minima veniam.
                        </p>
                        <a href="#" style={{textDecoration:'none'}} data-toggle="modal" data-target="#blog-model-1">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="blog-box-item">
                      <div className="blog-img">
                        <a href="#" data-toggle="modal" data-target="#blog-model-2">
                          <figure className="mb-0">
                            <img src="/blog-img-2.png" alt="blog-img" className="img-fluid" />
                          </figure>
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="blog-auteher-title">
                          <span>By John Doe</span>
                          <span className="float-lg-right">Mar 9, 2022</span>
                        </div>
                        <a href="#" style={{textDecoration:'none'}} data-toggle="modal" data-target="#blog-model-2">
                          <h4>Reprehenderit in vouta
                            velit esse cillum
                          </h4>
                        </a>
                        <p>Dolor repellendus temporibus autem
                          quibusdam officiis debitis rerum nece
                          aibus minima veniam.
                        </p>
                        <a href="#" style={{textDecoration:'none'}} data-toggle="modal" data-target="#blog-model-2">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="blog-box-item mb-0">
                      <div className="blog-img">
                        <a href="#" style={{textDecoration:'none'}} data-toggle="modal" data-target="#blog-model-3">
                          <figure className="mb-0">
                            <img src="/blog-img-3.png" alt="blog-img" className="img-fluid" />
                          </figure>
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="blog-auteher-title">
                          <span>By Elina Parker</span>
                          <span className="float-lg-right">Mar 10, 2022</span>
                        </div>
                        <a href="#" style={{textDecoration:'none'}} data-toggle="modal" data-target="#blog-model-3">
                          <h4>Soluta nobis ose aligen
                            optio cumue
                          </h4>
                        </a>
                        <p>Dolor repellendus temporibus autem
                          quibusdam officiis debitis rerum nece
                          aibus minima veniam.
                        </p>
                        <a href="#" style={{textDecoration:'none'}} data-toggle="modal" data-target="#blog-model-3">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Blog
