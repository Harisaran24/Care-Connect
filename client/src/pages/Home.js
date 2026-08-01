import React from "react";
import "./styles/Home.css";  // Ensure this path is correct
import backgroundImage from "../components/images/download.jpg"; // Import the image

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1>Bringing Hope to Those in Need</h1>
        <p id='white'>Support orphans and elderly individuals by providing care and love.</p>
      </section>

      <div className="home">
        <section className="vision-mission">
          <div className="vision">
            <h2>🌟 Vision</h2>
            <p>Our vision is to create a world where orphans and the elderly feel loved and supported.</p>
            <p>We aim to build a compassionate society that bridges the gap between generations.</p>
            <p>Through kindness and care, we strive to empower and transform lives.</p>
          </div>

          <div className="mission">
            <h2>🎯 Mission</h2>
            <p>Our mission is to provide essential care, education, and support to orphans and the elderly.</p>
            <p>We connect donors, sponsors, and volunteers to bring positive change.</p>
            <p>Through transparency and community efforts, we ensure a better future for the vulnerable.</p>
          </div>
        </section>
      </div>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonial">
          <p>"This platform has changed my life. I was able to support a child's education and see the impact!"</p>
          <h4>- Kuppayi</h4>
        </div>
        <div className="testimonial">
          <p>"The support I received helped me live with dignity and care. Thank you for your kindness!"</p>
          <h4>- Jeeva</h4>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Our organization is dedicated to bringing hope and support to orphans and elderly individuals in need. 
          We strive to create a nurturing environment where every individual feels valued and cared for. 
          Through community efforts and generous contributions, we provide essential resources, education, and emotional support. 
          Together, we can build a future filled with love, dignity, and opportunities for all.
        </p>
      </section>
    </div>
  );
}

export default Home;
