import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const educationData = [
    {
        degree: 'Doctor of Philosophy',
        year: '2024',
        grade: 'Power Quality (EEE)',
        institution: 'K L Deemed to be University',
        address: 'Green Fields, Vaddeswaram, Guntur, Andhra Pradesh 522502'
    },
    {
        degree: 'Post Graduation',
        year: '2012',
        grade: '82.2% (M.Tech, EEE)',
        institution: 'St.Marry’s college of Engineering and Technology',
        address: 'Deshmukhee, PochamPalli (vil), Nalgonda (Dist), Jawaharlal Nehru Technology University (JNTU), Hyderabad, Telangana'
    },
    {
        degree: 'Graduation',
        year: '2008',
        grade: '70.1% (B.Tech, EEE)',
        institution: 'Sri KottamTulasi Reddy Memorial College of Engineering and Technology',
        address: 'Kondair, Andhra Pradesh. Jawaharlal Nehru Technology University (JNTU), Hyderabad, Telangana.'
    },
    {
        degree: 'Intermediate',
        year: '2004',
        grade: '80%',
        institution: 'Vavilala Junior College',
        address: 'Kurnool, Andhra Pradesh. Board of Intermediate Education, Andra Pradesh.'
    },
    {
        degree: 'SSC',
        year: '2002',
        grade: '82% (SSC)',
        institution: 'Sri Sai Siddhartha High School',
        address: 'Kurnool, Andhra Pradesh. Board of Secondary Education, Andra Pradesh.'
    }
];

const workshopData = [
    'Coordinator for Project Expo TECHNOVATION-2K22. 6th & 7th Dec-2022 at Dr KVSRIT.',
    'Conducted “A Two Day National Level Workshop On Electrical Systems in Construction Industry” on 28th & 29th OCT-2022 at Dr KVSRIT.',
    'Coordinator for national level conference NCIRET 2015 at Dr KVSRIT.',
    'Attended National Programme on Technology Enhanced Learning (IIT Madras) on 19/09/2015 in GPREC- Kurnool.',
    'Participated in FDP on Smart Grid Technology and Implementation of Artificial Neural Networks, in GNIT-Hyd.',
    'Coordinator for A Two Day National Level Workshop on ”Humanoid Design and Control” on 23rd and 24th Feb-2015 in KVSRIT.',
    'Co-Convener for One Day National Level Work Shop on ETAP, 2014.',
    'In-Charge for Internal PPT (SPARKS, 2014).',
    'Convener for One Day National Level Symposium KITES-2013.',
    'Coordinator for ETHICAL HACKING workshop conducted by KRIYON DIGITAL SECURITIES (IIT, Kharagpur) at Dr.KVSRIT in 2012.',
    'Participated in Short-term course on RECENT TRENDS IN POWER SYSTEMS (RTPS).',
    'Participated in Short-term course on Power System Reliability & FACTS.',
    'Participated in National Seminar on Nuclear Technology in the development of Nation on 21st Feb-2009.'
];

const SvgIcon = ({ d, className = '' }: { d: string; className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d={d} />
    </svg>
);

const LegacyPage = () => {
    const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.body.className = theme + '-mode';
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const handleCardClick = (index: number) => {
        setFlippedCardIndex(flippedCardIndex === index ? null : index);
    };

  return (
    <>
      <header className="legacy-header">
        <div className="container">
          <nav>
            <div className="logo">Dr. M. Madhusudhan Reddy</div>
            <div className="header-controls">
                <button onClick={toggleTheme} className="theme-toggle" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
                    {theme === 'dark' ? <SvgIcon d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" /> : <SvgIcon d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0-7v4h-1V2h1zm0 18v4h-1v-4h1zM4.22 5.64l2.83 2.83-1.41 1.41L2.81 7.05 4.22 5.64zm12.73 12.73l2.83 2.83-1.41 1.41-2.83-2.83 1.41-1.41zM2 12h4v-1H2v1zm18 0h4v-1h-4v1zM5.64 19.78l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83zm12.73-12.73l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83z" />}
                </button>
                <a href="/" className="btn btn-orange">Back to Home</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="legacy-content">
          <div className="container">

            <section id="education-timeline">
                <h2>Educational Timeline</h2>
                <div className="timeline-scroller">
                    <div className="timeline-cards-container">
                        {educationData.map((edu, index) => (
                            <div className="flip-card" key={index} onClick={() => handleCardClick(index)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && handleCardClick(index)}>
                                <div className={`flip-card-inner ${flippedCardIndex === index ? 'is-flipped' : ''}`}>
                                    <div className="flip-card-front">
                                        <h3>{edu.degree}</h3>
                                        <p className="year">{edu.year}</p>
                                        <p className="grade">{edu.grade}</p>
                                        <span className="click-indicator">Click to flip</span>
                                    </div>
                                    <div className="flip-card-back">
                                        <h4>{edu.institution}</h4>
                                        <p>{edu.address}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate for seamless auto-scroll */}
                        {educationData.map((edu, index) => (
                            <div className="flip-card" key={`duplicate-${index}`} onClick={() => handleCardClick(index)} role="button" tabIndex={-1} onKeyPress={(e) => e.key === 'Enter' && handleCardClick(index)} aria-hidden="true">
                                <div className={`flip-card-inner ${flippedCardIndex === index ? 'is-flipped' : ''}`}>
                                    <div className="flip-card-front">
                                        <h3>{edu.degree}</h3>
                                        <p className="year">{edu.year}</p>
                                        <p className="grade">{edu.grade}</p>
                                        <span className="click-indicator">Click to flip</span>
                                    </div>
                                    <div className="flip-card-back">
                                        <h4>{edu.institution}</h4>
                                        <p>{edu.address}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <article className="legacy-section">
              <h2>Academic Journey</h2>
              <p>From the first lecture delivered as a young faculty member to steering the department as Head, Dr. M. Madhusudhan Reddy’s career reflects an unwavering dedication to teaching excellence, research innovation, and institutional growth.</p>
              <p>A graduate in Electrical & Electronics Engineering with advanced specialization in Power Quality and Optimization, he has consistently bridged theoretical knowledge with practical relevance, mentoring hundreds of students who now thrive across industry and academia.</p>
              <h3>Highlights:</h3>
              <ul>
                <li>16+ Years of Academic Experience</li>
                <li>Head of Department, Electrical & Electronics Engineering</li>
                <li>Specialized in Power Quality, Harmonics, and Optimization Techniques</li>
                <li>Guided numerous B.Tech & M.Tech dissertations</li>
                <li>Organized multiple technical symposia, workshops, and FDPs</li>
              </ul>
            </article>

            <article className="legacy-section">
              <h2>Leadership & Service</h2>
              <p>Beyond the classroom, Dr. Reddy has been a pillar of institutional development. He has played crucial roles in academic planning, quality assurance, and faculty mentoring, ensuring that education remains both aspirational and accountable.</p>
              <h3>Major Leadership Roles:</h3>
              <ul>
                <li><strong>Head, Department of EEE</strong> — steering academic excellence, mentoring faculty, and introducing outcome-based learning practices.</li>
                <li><strong>Coordinator — NAAC & NBA</strong> — instrumental in driving the accreditation process, fostering a culture of documentation, transparency, and continuous improvement.</li>
                <li><strong>IQAC Member</strong> — aligning departmental vision with institutional quality standards.</li>
                <li><strong>Exam Branch Coordinator / Academic Committee Member</strong> — ensuring academic discipline and procedural accuracy.</li>
              </ul>
              <p className="approach">Leadership Approach: Inclusive, transparent, and growth-oriented — where collaboration fuels innovation.</p>
            </article>

            <article className="legacy-section">
              <h2>Achievements & Recognitions</h2>
              <p>Dr. Reddy’s contributions have been recognized both within and beyond the campus. His scholarly output and service-minded leadership stand as benchmarks for colleagues and students alike.</p>
              <h3>Notable Achievements:</h3>
              <ul>
                <li>Published multiple research papers in reputed Scopus-indexed journals.</li>
                <li>Three patents filed in the domain of power quality and energy optimization.</li>
                <li>Received institutional appreciation for Exemplary Academic Contributions and Research Leadership.</li>
                <li>Played a key role in establishing modern electrical laboratories and fostering student innovation cells.</li>
              </ul>
            </article>

            <article className="legacy-section">
              <h2>Teaching Philosophy</h2>
              <p>For Dr. Reddy, teaching is not about delivering content — it’s about igniting curiosity. He believes in transforming learners into thinkers who can analyze, innovate, and contribute to sustainable engineering solutions.</p>
              <h3>Core Principles:</h3>
              <ul>
                <li>Encourage experiential and project-based learning</li>
                <li>Integrate emerging technologies like AI & IoT into electrical education</li>
                <li>Mentor students in professional ethics and lifelong learning</li>
                <li>Create inclusive classrooms that foster participation and collaboration</li>
              </ul>
              <blockquote className="inline-quote">“When students discover their potential, a teacher’s purpose is fulfilled.”</blockquote>
            </article>
            
            <article className="legacy-section">
                <h2>Workshops & FDPs</h2>
                <p>Actively engaged in organizing and participating in various workshops, conferences, and Faculty Development Programs to foster continuous learning and technical collaboration.</p>
                <div className="workshop-grid">
                    {workshopData.map((item, index) => (
                        <div className="workshop-card" key={index}>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </article>

             <article className="legacy-section">
              <h2>Beyond Teaching</h2>
              <p>Dr. Reddy actively participates in workshops, industry collaborations, and community projects, bridging academia with real-world relevance. He has also guided several institutional events promoting student research and social responsibility.</p>
              <ul>
                <li>Organized Faculty Development Programs on Power Systems and Energy Auditing</li>
                <li>Conducted student innovation challenges and paper presentations</li>
                <li>Participated in AICTE-sponsored programs for curriculum enhancement</li>
                <li>Mentored community outreach initiatives focusing on rural electrification and energy awareness</li>
              </ul>
            </article>

            <div className="legacy-conclusion">
              <h2>Legacy in Motion</h2>
              <p>Dr. M. Madhusudhan Reddy’s legacy continues to evolve — through every student inspired, every research idea realized, and every institution uplifted by his dedication.</p>
              <blockquote className="quote final-quote">“A legacy isn’t built in years; it’s built in minds — one inspired learner at a time.”</blockquote>
            </div>

          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <nav className="footer-nav">
            <ul>
              <li><a href="/legacy.html">LEGACY</a></li>
              <li><a href="/#research">RESEARCH</a></li>
              <li><a href="/#experience">EXPERIENCE</a></li>
              <li><a href="/#testimonials">TESTIMONIALS</a></li>
              <li><a href="/#connect">CONNECT</a></li>
              <li><a href="/blog.html">INSIGHTS</a></li>
            </ul>
          </nav>
          <p>&copy; {new Date().getFullYear()} Dr. M.Madhusudhan Reddy. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<LegacyPage />);
}