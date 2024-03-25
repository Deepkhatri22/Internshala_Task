import React from 'react';
import '../assets/css/style.css';
import '../assets/css/animate.css';
import '../assets/css/mobile.css';
import '../assets/css/super-classes.css';
import '../assets/bootstarp/bootstrap.min.css';

function Portfolio({ data }) {
  return (
    <div className='position-relative'>
      <section className="w-100 body float-left portfolio-con padding-top" id="Portfolio">
        <div className="container">
          <div className="generic-title text-center mb-5">
            <h6 className="text-white" style={{ fontSize: '22px', color: '#6f34fe' }}>Creative Works</h6>
            <h2 className="text-white" style={{ fontSize: '52px' }}>Check My Portfolio</h2>
          </div>
          <div className="text-center mb-5 ">
            <button className="btn btn-primary mr-2 active">All</button>
            <button className="btn btn-primary mr-2">Products</button>
            <button className="btn btn-primary mr-2">Web App</button>
            <button className="btn btn-primary mr-2">Interaction</button>
            <button className="btn btn-primary">Brand Identity</button>
          </div>
        </div>
      </section>
      <section>

        <div className="container-fluid">
          <div className="row">
            {data?.map((item, index) => (
              <div key={index} className="col-md-4 mb-4 Card ">
                <div className="portfolio-item">
                  <img src={item.image.url} className="img-fluid" style={{borderRadius:'25px'}} alt="project" />
                  <div className="portfolio-item-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}

export default Portfolio;
