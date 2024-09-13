import React from 'react'
import { Link } from "react-router-dom";
import "./Service.css"
export const Service = () => {
  const services = [
    { name: "Electrical", description: "Reliable electrical services for installations and repairs." },
    { name: "Plumbing", description: "Expert plumbing services for residential and commercial needs." },
    { name: "Installation", description: "Professional installation services for all types of equipment." },
    { name: "Maintenance", description: "Regular maintenance services to keep your equipment running smoothly." },
    { name: "Television", description: "Television repair and installation services." },
    { name: "System", description: "Computer system repair and maintenance services." },
    { name: "AC", description: "Air conditioning installation and repair services." },
    { name: "RO", description: "RO water purifier installation and maintenance services." },
    { name: "Washing Machine", description: "Washing machine repair and maintenance services." },
    { name: "Refrigerator", description: "Refrigerator repair and maintenance services." },
    { name: "Microwave Oven", description:"Microwave Oven repair and maintenance services."},
    {name: "Cleaning",description:"Professional cleaning services for homes and offices."},
  ]
  return (
    <>
    {/* Header Section */}
      <header className="container">
        <nav className="navbar">
          <h3 className="logo">
            <i class="fa-solid fa-gears"></i> LO<span>COs</span>
          </h3>
          <ul className="navbar-compo">
            <Link to="/" className="navcompo">
            <li className='scompo'>Home</li></Link>
            <li>
              <a href="#footer" className="navcompo">
                About us
              </a>
            </li>
            <Link to="/service" className="navcompo">
              <li className="scompo">Services</li>
            </Link>
            <Link to="/techsignup" className="navcompo">
              <li className="scompo">Service Partner</li>
            </Link>
            <li>
              <a href="#footer" className="navcompo">
                Contact us
              </a>
            </li>
            <li>
              <Link to="/userlogin">
                <button id="login-btn">Login</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* hero section */}
      <div className="services-page">
        <h1>Our Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <Link to="/userlogin"><button>Book Now</button></Link>
            </div>
          ))}
        </div>
      </div>
     {/* footer section */}
     <footer id="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              We are dedicated to connecting talented freelancers with clients
              seeking top-notch services. Our platform ensures a seamless
              experience for both freelancers and clients through a secure and
              user-friendly environment
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
             <Link to="/">  <li>
                <a href="#">Home</a>
              </li></Link>
              <li>
                <a href="#footer">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>
                Email: <a href="mailto:support@locos.com">support@locos.com</a>
              </li>
              <li>Phone: 123456789</li>
              <li>Address: 123 kk nagar, Madurai, India</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-media">
              <li>
                <a href="#" aria-label="Facebook">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <i class="fa-brands fa-square-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Locos. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
