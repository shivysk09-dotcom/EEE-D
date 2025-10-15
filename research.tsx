import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createRoot } from 'react-dom/client';

const SvgIcon = ({ d, className = '' }: { d: string; className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d={d} />
    </svg>
);

const researchAreas = [
    {
        icon: "M12 2.5C7.25 2.5 4.5 5.5 4.5 9.5c0 2.25 1.5 4.125 3.375 5.25 1.125.75 1.875 1.875 1.875 3V20.5h4.5v-2.25c0-1.125.75-2.25 1.875-3C18 13.625 19.5 11.75 19.5 9.5 19.5 5.5 16.75 2.5 12 2.5zM12 14.5c-2.75 0-5-2.25-5-5s2.25-5 5-5 5 2.25 5 5-2.25 5-5 5z",
        title: "Power Quality",
        description: "Analysis and mitigation of voltage sags, harmonics, and real-time disturbances in electrical systems."
    },
    {
        icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
        title: "Harmonic Mitigation",
        description: "Advanced techniques using Active Power Filters, optimization algorithms, and adaptive control."
    },
    {
        icon: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 3h4v2H5v4H3V5c0-1.1.9-2 2-2zm14 0h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z",
        title: "Optimization in Electrical Systems",
        description: "Implementation of Particle Swarm Optimization, Ant Colony, and Central Force Optimization for power systems."
    }
];

const publications = [
    { type: 'journal', title: 'Ant Colony Optimization Technique Based Harmonic Suppression in Active Power Filters', source: 'Int. J. Integrated Engineering, 2024', link: '#' },
    { type: 'journal', title: 'Improving Gain of Real Time PI Controller using Particle Swarm Optimization', source: 'Microprocessors & Microsystems, 2023', link: '#' },
    { type: 'journal', title: 'Central Force Optimization Technique based Harmonic Mitigation in Shunt Active Power Filters', source: 'International Journal of Intelligent Systems And Applications In Engineering. ISSN:2147-6799214.', link: '#' },
    { type: 'journal', title: 'Power Quality Improvement Using PQ and SRF Algorithms In Shunt Active Power Filter (SAPF) with Unbalanced Source Voltage', source: 'J. Mech. Cont.& Math. Sci., Special Issue, No.-5, January (2020) pp 40-5.', link: '#' },
    { type: 'journal', title: 'An Accurate Frequency Tracking Method Based On Short Current Detection', source: 'In IJRIT, Volume 2 Issue 4. Sep-2015.', link: '#' },
    { type: 'journal', title: 'A Smart Strategy for Voltage Control Ancillary Service', source: 'In IJRIT, Volume2 Issue 4. Sep-2015.', link: '#' },
    { type: 'journal', title: 'Design of Islanding Detection Using Phase lacked Loops in Three phase Grid Interfacing Powers', source: 'In IJRIT, Volume 2 Issue 4. Sep-2015.', link: '#' },
    { type: 'conference', title: 'Detection & Classification of Voltage Sag Using Wavelet Transform', source: 'ICEECS, Goa, 2012', link: '#' },
    { type: 'conference', title: 'Smart Grids, Structures and Materials (ICSGSM-2021 International Conference)', source: 'Organaised by Dept.of EEE, KL Deemed to be University on 19th & 20th April -2021.', link: '#' },
    { type: 'national', title: 'Enhanced Phase Locked Loop Based Control Technique for Interline Unified Power Quality Conditioner', source: 'NCIRET, 2015', link: '#' },
];

const patents = [
    { title: 'Harmonic Suppression in Shunt Active Power Filter Using PQ & SRF Algorithms (Balanced Source)', application: '202341063727', year: '2023' },
    { title: 'Harmonic Suppression in SAPF Using PQ & SRF Algorithms (Unbalanced Source)', application: 'Published', year: '2023' },
    { title: 'Power Factor Correction with Buck Converter for BLDC Motor Drive', application: '202241073208', year: '2022' },
];

const projects = [
    "Supervision of B.Tech & M.Tech projects in power quality, control systems, and smart grids.",
    "Mentorship in departmental research expos and symposiums.",
    "Collaborative projects with academic peers and industrial partners.",
];

const citationLinks = [
    { name: 'Google Scholar', url: '#', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5v-4.5h-3v-2.5h3v-3.5c0-2.3 1.2-3.5 3.5-3.5h2.5v2.5h-1.5c-1.2 0-1.5.7-1.5 1.5v3h3l-.5 2.5h-2.5v4.5h-3z' }, // Placeholder icon
    { name: 'ORCID', url: '#', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5H7.5V8.5h2v8zm-1-9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm8 9.5h-2v-4c0-1.11-.4-2-1.5-2-.83 0-1.5.89-1.5 2v4h-2V8.5h2v1c.4-.7 1.2-1.5 2.5-1.5 2.76 0 3.5 1.84 3.5 4.2V16.5z' }, // Placeholder icon
    { name: 'Scopus', url: '#', icon: 'M19.4 6.6c-.4-.4-1-.4-1.4 0l-8.5 8.5-3.5-3.5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.2 4.2c.2.2.5.3.7.3s.5-.1.7-.3l9.2-9.2c.4-.4.4-1 0-1.4z' }, // Placeholder icon
];


const ResearchPage = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const [activeSection, setActiveSection] = useState('research-areas');
    const [filter, setFilter] = useState('all');
    
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        document.body.className = theme + '-mode';
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' } 
        );

        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            observer.observe(section);
            sectionRefs.current[section.id] = section as HTMLElement;
        });

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const filteredPublications = useMemo(() => {
        if (filter === 'all') return publications;
        return publications.filter(p => p.type === filter);
    }, [filter]);

    const navItems = [
        { id: 'research-areas', label: 'Research Areas' },
        { id: 'publications', label: 'Publications' },
        { id: 'patents', label: 'Patents' },
        { id: 'projects', label: 'Projects' },
        { id: 'citations', label: 'Citations' },
    ];

    return (
        <>
            <header className="research-header">
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

            <div className="container research-container">
                <aside className="side-nav">
                    <ul>
                        {navItems.map(item => (
                             <li key={item.id}>
                                <a 
                                    href={`#${item.id}`} 
                                    className={activeSection === item.id ? 'active' : ''}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        sectionRefs.current[item.id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
                <main className="main-content">
                    <div className="main-title">
                        <h1>Research Portfolio</h1>
                        <p>A curated collection of my scholarly contributions, from foundational research to patented innovations.</p>
                    </div>

                    <section id="research-areas" className="content-section">
                        <h2>1️⃣ Research Areas</h2>
                        <div className="card-grid">
                            {researchAreas.map((area, index) => (
                                <div className="skill-card" key={index}>
                                    <h4>{area.title}</h4>
                                    <p>{area.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="publications" className="content-section">
                        <h2>2️⃣ Publications</h2>
                        <div className="publication-filters">
                            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
                            <button onClick={() => setFilter('journal')} className={filter === 'journal' ? 'active' : ''}>International Journals</button>
                            <button onClick={() => setFilter('conference')} className={filter === 'conference' ? 'active' : ''}>International Conferences</button>
                            <button onClick={() => setFilter('national')} className={filter === 'national' ? 'active' : ''}>National Conferences</button>
                        </div>
                        <div className="publication-list">
                            {filteredPublications.map((pub, index) => (
                                <div className="publication-card" key={index}>
                                    <h4>{pub.title}</h4>
                                    <p>{pub.source}</p>
                                    {pub.type === 'journal' && <a href={pub.link} target="_blank" rel="noopener noreferrer">View Publication →</a>}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="patents" className="content-section">
                        <h2>3️⃣ Patents</h2>
                         <div className="patent-list">
                            {patents.map((patent, index) => (
                                <div className="patent-item" key={index}>
                                    <div className="patent-year">{patent.year}</div>
                                    <div className="patent-details">
                                        <h4>{patent.title}</h4>
                                        <p>Application: {patent.application}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    <section id="projects" className="content-section">
                        <h2>4️⃣ Collaborations / Projects Supervised</h2>
                        <ul className="project-list">
                            {projects.map((project, index) => (
                                <li key={index}>{project}</li>
                            ))}
                        </ul>
                    </section>
                    
                    <section id="citations" className="content-section">
                        <h2>5️⃣ Citations / Links</h2>
                         <div className="citation-links">
                            {citationLinks.map((link, index) => (
                                <a href={link.url} className="citation-link-btn" key={index} target="_blank" rel="noopener noreferrer">
                                    <SvgIcon d={link.icon} />
                                    <span>{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
            
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
    root.render(<ResearchPage />);
}