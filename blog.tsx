import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const SvgIcon = ({ d, className = '' }: { d: string; className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d={d} />
    </svg>
);

const blogPosts = [
    {
      slug: 'power-quality-in-smart-grids',
      title: 'The Critical Role of Power Quality in Smart Grids',
      date: 'October 09, 2025',
      excerpt: 'As our electrical grids become smarter, the demand for high-quality, uninterrupted power is paramount. This article explores the challenges of power quality, such as voltage sags and harmonics, and discusses why it is a critical focus area for modern electrical engineering.'
    },
    {
      slug: 'demystifying-harmonic-mitigation',
      title: 'Demystifying Harmonic Mitigation: A Look at Active Power Filters',
      date: 'May 16, 2025',
      excerpt: 'Non-linear loads are a major source of harmonic distortion in power systems. We dive into the technology of Shunt Active Power Filters (SAPF) and explore how advanced control algorithms can effectively mitigate these harmonics and improve system stability.'
    },
    {
      slug: 'nature-inspired-solutions',
      title: 'Nature-Inspired Solutions: Optimization Algorithms in Power Systems',
      date: 'February 03, 2025',
      excerpt: 'How can the behavior of an ant colony help optimize an electrical grid? This post explores the application of metaheuristic techniques like Ant Colony and Particle Swarm Optimization (PSO) to solve complex problems in power systems, from controller tuning to harmonic suppression.'
    },
    {
      slug: 'mentoring-future-innovators',
      title: 'Mentoring Future Innovators: A Philosophy on Engineering Education',
      date: 'September 18, 2024',
      excerpt: 'Teaching is more than transferring knowledge; it\'s about igniting curiosity and fostering a problem-solving mindset. Here, I share my core principles for educating the next generation of electrical engineers, focusing on project-based learning and professional ethics.'
    },
     {
      slug: 'from-concept-to-patent',
      title: 'From Concept to Patent: The Journey of an Academic Researcher',
      date: 'June 29, 2024',
      excerpt: 'The path from a research question to a granted patent is filled with challenges and breakthroughs. This insight shares the process of academic innovation, detailing the steps involved in developing novel solutions, validating them, and protecting intellectual property.'
    },
    {
      slug: 'integrating-ai-iot-in-eee',
      title: 'Integrating AI and IoT into the EEE Curriculum',
      date: 'January 12, 2025',
      excerpt: 'The fields of Artificial Intelligence and the Internet of Things are revolutionizing every industry, including electrical engineering. We discuss the importance of incorporating these cutting-edge topics into the curriculum to prepare students for the technological landscape of tomorrow.'
    }
  ];

const InsightsPage = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.className = theme + '-mode';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <header className="blog-header">
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
        <section id="blog-posts">
          <div className="container">
            <div className="blog-title">
                <h1>Engineering Insights</h1>
                <p>Exploring the frontiers of power systems, academic research, and engineering education.</p>
            </div>
            <div className="posts-grid">
              {blogPosts.map((post, index) => (
                <article className="post-card" key={index}>
                  <h3>{post.title}</h3>
                  <p className="post-date">{post.date}</p>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <a href={`/post.html?slug=${post.slug}`} className="read-more" target="_blank" rel="noopener noreferrer">Read More &rarr;</a>
                </article>
              ))}
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
    root.render(<InsightsPage />);
}
