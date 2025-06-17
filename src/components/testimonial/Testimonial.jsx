import React from 'react'
import './testnimonial.css'

const Testimonial = () => {
  return (
    <>
    <div className="testimonial-wrapper">
            <section className="testimonial-section">
                <div className="testimonial-container">
                    <h1 className="testimonial-heading">Testimonial</h1>
                    <h2 className="testimonial-subheading">
                        What our <span className="highlight">customers</span> are saying
                    </h2>
                    <div className="testimonial-grid">
                        <div className="testimonial-card">
                            <img
                                alt="testimonial"
                                className="testimonial-img"
                                src="https://ecommerce-sk.vercel.app/img/kamal.png"
                            />
                            <p className="testimonial-text">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
                            </p>
                            <span className="testimonial-separator" />
                            <h2 className="testimonial-name">Kamal Nayan Upadhyay</h2>
                            <p className="testimonial-role">Senior Product Designer</p>
                        </div>

                        <div className="testimonial-card">
                            <img
                                alt="testimonial"
                                className="testimonial-img"
                                src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                            />
                            <p className="testimonial-text">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
                            </p>
                            <span className="testimonial-separator" />
                            <h2 className="testimonial-name">React Js</h2>
                            <p className="testimonial-role">UI Developer</p>
                        </div>

                        <div className="testimonial-card">
                            <img
                                alt="testimonial"
                                className="testimonial-img"
                                src="https://webknudocs.vercel.app/logo/react.png"
                            />
                            <p className="testimonial-text">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
                            </p>
                            <span className="testimonial-separator" />
                            <h2 className="testimonial-name">React Js</h2>
                            <p className="testimonial-role">CTO</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      
    </>
  )
}

export default Testimonial
