// Home.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pricing from "./pricing";
import { Link } from "react-router-dom";


import BlogSection from "./BlogSection";

const Home = () => {
  const [animateText, setAnimateText] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const [animateBox, setAnimateBox] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimateText(true), 100);
    const timer2 = setTimeout(() => setAnimateButton(true), 400);
    const timer3 = setTimeout(() => setAnimateBox(true), 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-content">
          <p className={`sub-title ${animateText ? "animate-up" : "hidden"}`}>
            The #1 Yoga In The Country
          </p>
          <h1 className={`title ${animateText ? "animate-up" : "hidden"}`}>
            "Inhale the future, exhale the past"
          </h1>
          <p className={`homedescription ${animateText ? "animate-up" : "hidden"}`}>
            "Discover the transformative power of yoga at Peak Yoga, where every
            class inspires progress."
          </p>
          <Link to="/pricing">
          <button className="more-details-btn-1" >Let's Reach your
          
        <div class="extra-bar-left-1"></div>
        <div class="extra-bar-right-1"></div>
       
        </button>
        </Link>
        

          {/* Status Box */}
          <div className={`status-box ${animateBox ? "animate-up" : "hidden"}`}>
            <div className="status-item">
              <h3>10K</h3>
              <p>Members</p>
            </div>
            <div className="status-item">
              <h3>1K</h3>
              <p>Trainers</p>
            </div>
            <div className="status-item">
              <h3>10M</h3>
              <p>Calories Burnt</p>
            </div>
            <div className="status-item">
              <h3>20K</h3>
              <p>Hours Trained</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h5 className="mission-title">About Us</h5>
          <h1 className="mission-heading">Elevate Your Potential</h1>
          <p className="mission-text">
            At the core of Peak Fitness is a mission to empower individuals to
            reach their <br />peak potential, physically, mentally, and emotionally.
          </p>
          <p className="mission-text">
            We strive to create an inclusive space where everyone, regardless of
            fitness level,<br /> feels inspired and supported on their journey towards
            a healthier and more<br /> fulfilling life.
          </p>
          <Link to="/about">
          <button className="more-details-btn-1" >About peak
        <div class="extra-bar-left-1"></div>
        <div class="extra-bar-right-1"></div>
        
        </button>
          </Link>
        </div>

        <div className="mission-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ic2aATSJIAQi62V2nUujj5jqTgPtNSurj8gqzjgGeKKfNipyY7iiWD9kn-N6uB_vTSs&usqp=CAU"
            alt="Fitness workout"
          />
        </div>
      </section>
      
      {/*values-section*/}
      
      <section className="values-section">
      <div className="over"></div>
      <header className="values-header">
        <p1>Values</p1>
        <h1>Our Values</h1>
        <p>
        We believe in creating an environment where each individual is empowered to <br/>reach their peak potential.
        </p>
      </header>

      <div className="values-cards">
        <div className="card">
          <div className="icon">✨</div>
          <h3>Holistic Approach</h3>
          <p>We embrace a holistic approach to <br/>health and fitness.</p>
        </div>

        <div className="card">
          <div className="icon">🚴</div>
          <h3>Expert Guidance</h3>
          <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
        </div>

        <div className="card">
          <div className="icon">🏋️</div>
          <h3>State-of-the-Art Facilities</h3>
          <p>Experience the latest in fitness technology to elevate your training.</p>
        </div>
        </div>
        <div className="values-cards2">
        <div className="card">
          <div className="icon">🤝</div>
          <h3>Dynamic Community</h3>
          <p>Join a vibrant and supportive fitness community that celebrates achievements.</p>
        </div>

        <div className="card">
          <div className="icon">📋</div>
          <h3>Personalized Programs</h3>
          <p>We pride ourselves on creating the best personalized workout and nutrition programs.</p>
        </div>

        <div className="card">
          <div className="icon">📅</div>
          <h3>Diverse Class Offerings</h3>
          <p>Immerse yourself in our diverse range of group fitness classes.</p>
        </div>
        </div>

      {/* Pricing Plans Section */}
      <Pricing />
      { /*testimonials-secton*/}
      
          <section className="testimonials-section">
          
            <header className="testimonials-header">
            <p1>Testimonials</p1>
              <h1>Words From Our Members</h1>
            </header>
      
            <div className="testimonials-cards">
          
            <div class="scroll-content">
            <div className="tcard">
                <h3>Alexandra D.  ⭐️⭐️⭐️⭐️⭐️  </h3>
                <p>We embrace a holistic approach to <br/>health and fitness.</p>
              </div>
              <div className="tcard">
                <h3>Expert Guidance</h3>
                <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
              </div>
              <div className="tcard">
                <h3><pre>Lindsay P.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
                <p>"The combination of relaxation and challenging sequences in every class keeps me coming back. Whether I’m working on flexibility or strength, I always feel supported and inspired by the instructors. This is hands down the best yoga experience I’ve had."
      
      </p>
              </div>
              <div className="tcard">
                <h3><pre>Alexandra D.      ⭐️⭐️⭐️⭐️⭐️</pre></h3>
                <p>"I can’t thank this yoga studio enough for helping me find balance in my life. Every class feels like a breath of fresh air – the perfect way to escape from stress. I feel stronger, more centered, and more at peace with myself. Highly recommend!".</p>
              </div>
              <div className="tcard">
              <h3><pre>Jason M.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
                <p>"I absolutely love this studio! Every session is thoughtfully designed to meet individual needs while fostering a sense of community. The teachers are encouraging and help me deepen my practice with each class. I always leave feeling relaxed and rejuvenated.</p>
              </div>
              <div className="tcard">
              <h3><pre>Lindsay P.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
                <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
              </div>
              <div className="tcard">
              <h3><pre>Alexandra D.      ⭐️⭐️⭐️⭐️⭐️</pre></h3>
                <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
                </div>
              
              </div>
              </div>
      
      
              <div className="te">
          
          <div class="sc">
          <div className="tcard">
              <h3><pre>Alexandra D.      ⭐️⭐️⭐️⭐️⭐️</pre></h3>
              <p>"I can’t thank this yoga studio enough for helping me find balance in my life. Every class feels like a breath of fresh air – the perfect way to escape from stress. I feel stronger, more centered, and more at peace with myself. Highly recommend!".</p>
            </div>
            <div className="tcard">
            <h3><pre>Jason M.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
              <p>"I absolutely love this studio! Every session is thoughtfully designed to meet individual needs while fostering a sense of community. The teachers are encouraging and help me deepen my practice with each class. I always leave feeling relaxed and rejuvenated.</p>
            </div>
            <div className="tcard">
            <h3><pre>Lindsay P.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
              <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
            </div>
            <div className="tcard">
            <h3><pre>Alexandra D.      ⭐️⭐️⭐️⭐️⭐️</pre></h3>
              <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
              </div>
          <div className="tcard">
              <h3><pre>Lindsay P.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
              <p>"The combination of relaxation and challenging sequences in every class keeps me coming back. Whether I’m working on flexibility or strength, I always feel supported and inspired by the instructors. This is hands down the best yoga experience I’ve had."
      
      </p>
      </div>
          <div className="tcard">
              <h3>Alexandra D.  ⭐️⭐️⭐️⭐️⭐️  </h3>
              <p>We embrace a holistic approach to <br/>health and fitness.</p>
            </div>
            <div className="tcard">
            <h3><pre>Jason M.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
              <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
            </div>
            <div className="tcard">
              <h3><pre>Lindsay P.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
              <p>"The combination of relaxation and challenging sequences in every class keeps me coming back. Whether I’m working on flexibility or strength, I always feel supported and inspired by the instructors. This is hands down the best yoga experience I’ve had."
      
      </p>
            </div>
            <div className="tcard">
              <h3><pre>Alexandra D.      ⭐️⭐️⭐️⭐️⭐️</pre></h3>
              <p>"I can’t thank this yoga studio enough for helping me find balance in my life. Every class feels like a breath of fresh air – the perfect way to escape from stress. I feel stronger, more centered, and more at peace with myself. Highly recommend!".</p>
            </div>
            <div className="tcard">
            <h3><pre>Jason M.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
              <p>"I absolutely love this studio! Every session is thoughtfully designed to meet individual needs while fostering a sense of community. The teachers are encouraging and help me deepen my practice with each class. I always leave feeling relaxed and rejuvenated.</p>
            </div>
            <div className="tcard">
            <h3><pre>Lindsay P.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
              <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
            </div>
            <div className="tcard">
            <h3><pre>Alexandra D.      ⭐️⭐️⭐️⭐️⭐️</pre></h3>
              <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
              </div>
            
            </div>
            
            
            </div>
            <div>
          <Link to="/pricing">
            
            <button className="more-details-btn-2" >Let's Reach your
              <div class="extra-bar2-left"></div>
              <div class="extra-bar2-right"></div>
              </button>
              </Link>
              </div>
              
          </section>
          <BlogSection />
          
     
      
    </section>
    </div>
    
  );
};

export default Home;