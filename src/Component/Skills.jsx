import React from 'react'
import '../assets/css/style.css'
import '../assets/css/animate.css'
import '../assets/css/mobile.css'
import '../assets/css/super-classes.css'
import '../assets/bootstarp/bootstrap.min.css'

export default function Skills({ data }) {

    function downloadImage() {
        source = 'assets/image/cv-img.png';
        const fileName = 'test-image.png';
        var el = document.createElement("a");
        el.setAttribute("href", source);
        el.setAttribute("download", fileName);
        document.body.appendChild(el);
        el.click();
        el.remove();
    }

    return (
        <>
            <section className="w-100 body float-left skill-con padding-top padding-bottom position-relative" id="about-con">
                <div className="container">
                    <div className="skill-inner-con position-relative">
                        <div className="row">
                            <div className="col-lg-6 order-lg-0 order-2">
                                <div className="skill-left-con text-center wow slideInLeft" >
                                    <div className="row service-skill-sttaf-con">

                                        {data?.map((items, index) => (
                                            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                <div className="skill-left-item-con">
                                                    <div className="circle-wrap firstPercentage">
                                                        <div className="circle">
                                                            <div className="mask full">
                                                                <div className="fill"></div>
                                                            </div>
                                                            <div className="mask half">
                                                                <div className="fill"></div>
                                                            </div>
                                                            <div className="inside-circle">
                                                                <div className="service-skill-sttaf-item-con">
                                                                    <div className="service-skill-sttaf-item-title service-skill-sttaf-item1-con d-flex align-items-center justify-content-center">
                                                                        <h4 className="d-table-cell align-middle mb-0 text-center count">{items.percentage}</h4>
                                                                        <span className="static-txt2">%</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-skill-sttaf-item-heading">
                                                        <p className="mb-0">{items.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>



                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="skill-right-con wow slideInRight" >
                                    <h6 style={{ fontSize: '22px', color: '#6f34fe' }}>My Skills</h6>
                                    <h2 style={{ fontSize: '52px', color: '#3f396d' }}>Beautiful & Unique
                                        Digital Experiences
                                    </h2>
                                    <p>Nostrum exercitationem ullam corporis suscipit laborioa
                                        nisi ut aliquid exrea commodi consequatur magni dolores
                                        aos qui ratione voluptatem nesciunt.
                                    </p>
                                    <p>Quia voluptas sit aspernatur aut odit aut fugit, sed ruiano
                                        consequntar magni dolores.
                                    </p>
                                    <div className="generic-btn download-bnt">
                                        <a style={{ color: 'white', textDecoration: 'none' }} href="#" id="downloadImg" onClick={downloadImage}>Download CV</a>
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
