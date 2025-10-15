import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import profileImage from './images/profileimage.png';

const App = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.className = theme + '-mode';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const experienceData = [
    {
      title: 'Assoc. Professor & HOD',
      company: 'Dr. KVSRIT Kurnool',
      dates: '2017 – Present',
    },
    {
      title: 'Asst. Professor',
      company: 'GNITC Autonomous Hyderabad',
      dates: '2016 – 2017',
    },
    {
      title: 'Asst. Professor & HOD',
      company: 'Dr. KVSRIT Kurnool',
      dates: '2012 – 2016',
    },
    {
        title: 'Asst. Professor',
        company: 'Dr. KVSRIT Kurnool',
        dates: '2009 – 2010',
    },
    {
        title: 'Asst. Professor',
        company: 'KKIT Kurnool',
        dates: '2008 – 2009',
    },
  ];

  const testimonialsData = [
    {
        quote: "Dr. Madhusudhan is a great mentor and his passion to educate us and mould us to become successful in our lives started at our college level. In the beginning we never realised the value add until we arrived at the job. Thank you Sir, you are the best!",
        author: "— Shivam A., Toshiba"
    },
    {
        quote: "Working with Dr. Madhusudhan has been a game-changer for our training process. His dedication, commitment towards his students development has opened up opportunities to successful transformation of their training needs. His vision truly impressed us and it always felt as if he was an invaluable extension of our team.",
        author: "— Suneel Kumar., Director, AdeptSK Solutions Pvt Ltd."
    },
    {
        quote: "The quality of candidates that came from Dr. Madhusudhan were consistently high performers in our company. We realised that his teaching methods culminated not just the theoritical but more of practical applications making the students to be job ready. We continue to hire from the colleges he teaches.",
        author: "— XYZ PERSON, EE XXX Company"
    },
    {
        quote: "Sir's way of teaching is fantastic. He always assisted us during our entire 4 year tenure and was in constant connect with parents about our progress. He is a true Guru. He not only delivers on his commitments but also ensures a value add in changing our lives for good. Given his guidance, today we have become responsible corporate citizens.",
        author: "— Manisha G, Ragini K, Santosh L., Alumni KVSRIT College"
    },
    {
        quote: "We've relied on Dr. Madhusudhan to develop the students to become effective and efficient in the field of Electrical Engineering. With his patents, experience and immense knowledge of Electrical Engineering, Dr. Madhusudhan has exceeded our expectations and created significance to our college. He is humble and always enthusiastic to embracing the changing technologies.",
        author: "— XXXX., Management, KVSRIT College"
    }

  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll('header nav a, footer nav a');

    const handleClick = (event: MouseEvent) => {
      const anchor = event.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');

      // Check if it's an internal anchor link
      if (href && href.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
      // For external pages (like legacy.html), allow the default browser behavior
    };

    const eventListener = handleClick as EventListener;

    navLinks.forEach(link => {
      link.addEventListener('click', eventListener);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', eventListener);
      });
    };
  }, []);

  const SvgIcon = ({ d, className = '' }: { d: string; className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">Dr. M. Madhusudhan Reddy</div>
            <div className="header-controls">
                <ul>
                  <li><a href="/legacy.html">LEGACY</a></li>
                  <li><a href="#research">RESEARCH</a></li>
                  <li><a href="#experience">EXPERIENCE</a></li>
                  <li><a href="#testimonials">TESTIMONIALS</a></li>
                  <li><a href="#connect">CONNECT</a></li>
                </ul>
                <button onClick={toggleTheme} className="theme-toggle" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
                    {theme === 'dark' ? <SvgIcon d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" /> : <SvgIcon d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0-7v4h-1V2h1zm0 18v4h-1v-4h1zM4.22 5.64l2.83 2.83-1.41 1.41L2.81 7.05 4.22 5.64zm12.73 12.73l2.83 2.83-1.41 1.41-2.83-2.83 1.41-1.41zM2 12h4v-1H2v1zm18 0h4v-1h-4v1zM5.64 19.78l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83zm12.73-12.73l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83z" />}
                </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Dr. M. Madhusudhan Reddy</h1>
              <p className="sub-headline"> <strong> RESEARCHER | EDUCATOR | INNOVATOR </strong></p>
              <p className="tagline">Shaping the future of <strong>EEE Students</strong> through <strong>Power Quality</strong> research and inspired teaching. <br /> 📚 <strong>16+ Years</strong> in Academia | <strong>🏛️ HOD, EEE Dept </strong> | <br />  <strong> 🧠 3 Patents </strong> |⚡ <strong>Power Quality </strong>Research |</p>
              
              <div id="connect" className="contact-info">
                 <div className="contact-item">
                    <SvgIcon d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z"/>
                    <a href="tel:+919949213068">+91 9949213068</a> 
                 </div>
                 <div className="contact-item">
                    <SvgIcon d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    <a href="mailto:mmsr244@gmail.com">mmsr244@gmail.com</a>
                 </div>
                 <div className="contact-item">
                    <SvgIcon d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 5H6v10h2V8zm3 0h-2v10h2V8zm5-2h-3a1 1 0 0 0-1 1v9h2v-4h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    <a href="https://linkedin.com/in/josh-j-5361889a" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                 </div>
              </div>

              <div className="hero-buttons">
                <a href="mailto:mmsr244@gmail.com" className="btn btn-orange">Connect Via Email</a>
                <a href="https://linkedin.com/in/josh-j-5361889a" target="_blank" rel="noopener noreferrer" className="btn btn-blue">View LinkedIn</a>
              </div>
            </div>
            <div className="hero-image-container">
                <img src={profileImage} alt="Dr. M.Madhusudhan" />
            </div>
          </div>
        </section>

        <section id="legacy">
          <div className="container">
            <h2>Professional Legacy</h2>
            <p>Some careers make an impact, while others create a legacy. For me, education is more than a profession; it is a mission to empower generations through research and mentorship. My story is one of innovation, integrity, and inspiration. </p>
            <p>Discover my journey where every challenge became a stepping stone toward shaping the future, a life devoted to learning, innovation, and the timeless art of teaching.</p>
            <div className="section-cta">
              <a href="/legacy.html" className="btn btn-orange">Explore My Legacy</a>
            </div>
          </div>
        </section>

        <section id="research">
            <div className="container">
                <h2>Research & Publications</h2>
                <p className="section-tagline">Delve into the world of power systems, innovation, and discovery. My research bridges theory and practice, transforming complex electrical phenomena into actionable insights. From enhancing power quality to optimizing electrical networks, each study reflects a commitment to advancing knowledge and shaping the engineers of tomorrow. Explore the milestones, publications, and patents that define a career devoted to research excellence.</p>
                
              
                <div className="skills-grid">
                    <div className="skill-card">
                        <h4>Research</h4>
                        <p>Analysis and mitigation of voltage sags, harmonics, and real-time disturbances in electrical systems.</p>
                    </div>
                    <div className="skill-card">
                        <h4>International Journals</h4>
                        <p>Advanced techniques using Active Power Filters, optimization algorithms, and adaptive control.</p>
                    </div>
                    <div className="skill-card">
                        <h4>Patents</h4>
                        <p>Implementation of Particle Swarm Optimization, Ant Colony Optimization, and Central Force Optimization techniques for power systems and controllers.</p>
                    </div>
                  </div>

                <div className="section-cta">
                    <a href="research.html" className="btn btn-orange">EXPLORE MY RESEARCH</a>
                </div>
            </div>
        </section>

        <section id="experience">
          <div className="container">
            <h2>Professional Experience</h2>
            <div className="timeline">
              {experienceData.map((job, index) => (
                <div 
                  className="timeline-item" 
                  key={index}
                  style={{ '--delay-index': index } as React.CSSProperties}
                >
                  <div className="timeline-card">
                    <h3>{job.title}</h3>
                    <p className="company">{job.company}</p>
                    <p className="dates">{job.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials">
          <div className="container">
            <div style={{textAlign: 'center'}}>
                <h2>Testimonials</h2>
            </div>
            <div className="scroller">
              <div className="scroller__inner">
                {testimonialsData.map((testimonial, index) => (
                  <div className="testimonial-card" key={`testimonial-${index}`}>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <p className="testimonial-author">{testimonial.author}</p>
                  </div>
                ))}
                {/* Duplicate for seamless scroll */}
                {testimonialsData.map((testimonial, index) => (
                  <div className="testimonial-card" key={`testimonial-duplicate-${index}`} aria-hidden="true">
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <p className="testimonial-author">{testimonial.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <nav className="footer-nav">
            <ul>
              <li><a href="/legacy.html">LEGACY</a></li>
              <li><a href="#research">RESEARCH</a></li>
              <li><a href="#experience">EXPERIENCE</a></li>
              <li><a href="#testimonials">TESTIMONIALS</a></li>
              <li><a href="#connect">CONNECT</a></li>
              <li><a href="/blog.html">INSIGHTS</a></li>
            </ul>
          </nav>
          <p>&copy; {new Date().getFullYear()} Dr. M.Madhusudhan Reddy. All Rights Reserved.</p>
        </div>
      </footer>
      
      <a 
        href="https://wa.me/919949213068" 
        className={`whatsapp-fab ${showWhatsApp ? 'visible' : ''}`}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <SvgIcon d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.37 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 3.67C16.56 3.67 20.28 7.39 20.28 11.91C20.28 16.43 16.56 20.15 12.04 20.15C10.49 20.15 8.99 19.74 7.69 19L7.35 18.82L4.31 19.69L5.18 16.74L5 16.4C4.19 15.03 3.8 13.5 3.8 11.91C3.8 7.39 7.52 3.67 12.04 3.67M9.13 7.5C8.91 7.5 8.71 7.55 8.53 7.9L7.69 8.74C7.55 8.88 7.38 9.03 7.38 9.25C7.38 9.47 7.52 9.71 7.66 9.85L7.75 9.94C8.21 10.41 8.82 11.12 9.69 11.96C10.82 13.08 11.9 13.43 12.31 13.62C12.72 13.8 13.01 13.78 13.26 13.53L13.9 12.89C14.12 12.67 14.21 12.56 14.12 12.38L13.73 11.4C13.65 11.23 13.53 11.12 13.34 11.05L12.44 10.66C12.24 10.59 12.01 10.68 11.86 10.83L11.45 11.24C11.36 11.33 11.25 11.38 11.12 11.38C10.99 11.38 10.79 11.31 10.36 10.88C9.88 10.41 9.32 9.68 9.22 9.56C9.13 9.44 9.04 9.27 9.04 9.1C9.04 8.93 9.13 8.82 9.22 8.73L9.58 8.32C9.71 8.19 9.77 8.02 9.71 7.83L9.53 6.95C9.47 6.74 9.32 6.62 9.13 6.55L8.23 6.16C8.23 6.16 8.23 6.16 8.23 6.16" />
      </a>
    </>
  );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
