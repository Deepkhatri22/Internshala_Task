function Home({data,social}) {
  return (
    <>
      <div className='body' id='home'>
        {/* <!---header-and-banner-section--> */}
        <div className="header-and-banner-con w-100 float-left position-relative pt-5">
          <div className="header-and-banner-inner-con">
            <header className="main-header">
            </header>
            <section className="banner-main-con" id="home">
              <div className="container pl-0 pr-0">
                {/* <!--banner-start--> */}
                <div className="footer-social-icon banner-social-icon mb-0">

                  {social?.map((items, index) => (
                  <ul key={index} className="mb-0 list-unstyled">
                  <li  className="d-inline-block">
                  <a href={items.url} target='_blank'>
                    <img src={items.image.url} height={50} width={50} alt={items.platform} />
                    </a>
                </li>
                  </ul>
                ))}
            
                </div>
                <div className="banner-con text-lg-left text-center">
                  <div className="row">
                    <div className="col-lg-7 col-sm-12 d-flex justify-content-center flex-column">
                      <div className="banner-left-con wow slideInLeft">
                        <div className="banner-heading">
                          <h2 style={{fontSize:'52px'}}>Hello, I Am</h2>
                          <ul className="dynamic-txts">
                            <li><h1 style={{fontSize:'85px'}}>{data?.name}</h1></li>
                            {/* <li><h1>Alina Parker</h1></li>
                            <li><h1>Alina Parker</h1></li>
                            <li><h1>Alina Parker</h1></li> */}
                          </ul>
                          <p style={{fontSize:'22px'}}>{data?.description}
                          </p>
                        </div>
                        <div className="banner-btn generic-btn d-inline-block">
                          <a href="#Contact" style={{color:'white', textDecoration:'none'}}>Hire Me</a>
                        </div>
                        <a style={{textDecoration:'none'}} href="#Portfolio" className="See-btn">See My Work</a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                      <div className="banner-right-con position-relative wow slideInRight" id="banner-right-con">
                        <figure className="mb-0 ml-5 d-flex justify-content-center align-items-center">
                          <img src={data?.avatar.url} alt="banner-right-img" height={550} width={400} id="banner-right-img" />
                        </figure>
                        <div className="best-award-con d-inline-block wow bounceInUp" data-wow-duration="1s" data-wow-delay="1s">
                          <div className="best-award-inner-con">
                            <figure className="mb-0">
                              <img src="/cup-img.png" alt="cup-img" className="img-fluid" />
                            </figure>
                            <div className="best-award-title">
                              <p className="mb-0">Best Design<br />
                                Award.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="best-award-con d-inline-block happy-con wow bounceInUp " data-wow-duration="1s" data-wow-delay="1s">
                          <div className="best-award-inner-con text-center">
                            <figure>
                              <img src="/admin-icon.png" alt="admin-icon" className="img-fluid" />
                            </figure>
                            <div className="best-award-title d-inline-block ml-0">
                              <p className="mb-0 d-inline-block count">4</p>
                              <p className="mb-0 d-inline-block">k+</p>
                              <span className="d-block">Happy<br />
                                Customers</span>
                            </div>
                          </div>
                        </div>
                        <div className="cursor"></div>
                        <div className="cursor2"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* <!--banner-end--> */}
              </div>
            </section>
          </div>
        </div>
        {/* <!---header-and-banner-section--> */}

      </div>
    </>
  )
}

export default Home
