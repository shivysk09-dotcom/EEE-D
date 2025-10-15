import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const SvgIcon = ({ d, className = '' }: { d: string; className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d={d} />
    </svg>
);

const blogPostsData = [
    {
      slug: 'power-quality-in-smart-grids',
      title: 'The Critical Role of Power Quality in Smart Grids',
      date: 'October 26, 2023',
      content: (
        <>
            <p>As our electrical infrastructure evolves into complex 'Smart Grids,' the stability and reliability of our power supply face unprecedented challenges. Power quality—the set of electrical boundaries that allows a piece of equipment to function in its intended manner without loss of performance or life—is no longer a niche concern but a foundational pillar of this new energy paradigm.</p>
            <h3>The Core Challenges</h3>
            <p>Modern grids are characterized by a high penetration of renewable energy sources (like solar and wind), electric vehicle charging stations, and a vast array of sensitive electronic loads. This complexity introduces several power quality issues:</p>
            <ul>
                <li><strong>Voltage Sags and Swells:</strong> Brief decreases or increases in voltage, often caused by faults or large load switching, can disrupt industrial processes and damage sensitive equipment.</li>
                <li><strong>Harmonic Distortion:</strong> The proliferation of non-linear loads (like inverters, SMPS, and LED lighting) injects unwanted frequencies into the grid, leading to overheating, equipment malfunction, and efficiency losses.</li>
                <li><strong>Transients:</strong> High-frequency disturbances, often caused by lightning strikes or switching operations, can be destructive to electronic components.</li>
            </ul>
            <h3>Why It Matters More Than Ever</h3>
            <p>In a smart grid, data integrity and control are paramount. Poor power quality can corrupt communication signals, cause protective relays to malfunction, and lead to inaccurate sensor readings. This compromises the very 'smartness' of the grid. Ensuring high power quality is essential for grid stability, operational efficiency, and the seamless integration of distributed energy resources. My research focuses on real-time monitoring and advanced mitigation techniques, using custom power devices like STATCOMs and DVRs to ensure the grid remains robust and resilient.</p>
        </>
      )
    },
    {
      slug: 'demystifying-harmonic-mitigation',
      title: 'Demystifying Harmonic Mitigation: A Look at Active Power Filters',
      date: 'October 15, 2023',
      content: (
        <>
            <p>Harmonic distortion is a pervasive issue in modern power systems, akin to noise that pollutes a clear signal. The primary culprits are non-linear loads, which draw current in a non-sinusoidal manner. While passive filters have been a traditional solution, they come with limitations like fixed compensation and resonance risks. This is where Shunt Active Power Filters (SAPF) emerge as a dynamic and superior solution.</p>
            <h3>How SAPF Works</h3>
            <p>An SAPF is a power electronic device that operates in parallel with the polluting load. It continuously monitors the line current, identifies the harmonic components, and injects a compensating current that is equal in magnitude but opposite in phase to the harmonic currents. The result? The current drawn from the source is restored to a near-perfect sine wave.</p>
            <h3>The Brains Behind the Operation: Control Algorithms</h3>
            <p>The effectiveness of an SAPF lies in its control algorithm. My work has extensively explored and compared various control strategies:</p>
            <ul>
                <li><strong>Synchronous Reference Frame (SRF) Theory:</strong> This method transforms the currents into a rotating reference frame, where the fundamental component becomes a DC value and harmonics appear as AC components. This makes it easier to isolate and generate the compensating signal.</li>
                <li><strong>Instantaneous Power (p-q) Theory:</strong> This algorithm operates in the time domain and is effective even under unbalanced or distorted voltage conditions, making it highly robust for real-world applications.</li>
            </ul>
            <p>By leveraging these advanced control techniques, SAPFs provide a precise and adaptive solution to harmonic mitigation, significantly enhancing the power quality and efficiency of the electrical system.</p>
        </>
      )
    },
    {
      slug: 'nature-inspired-solutions',
      title: 'Nature-Inspired Solutions: Optimization Algorithms in Power Systems',
      date: 'September 30, 2023',
      content: (
          <>
              <p>Some of the most complex engineering problems can find elegant solutions in the patterns of the natural world. Metaheuristic optimization algorithms, which are inspired by natural phenomena, provide powerful tools for solving non-linear, high-dimensional problems in power systems where traditional methods fall short.</p>
              <h3>Learning from Nature</h3>
              <p>My research leverages several of these techniques:</p>
              <ul>
                  <li><strong>Particle Swarm Optimization (PSO):</strong> Inspired by the flocking behavior of birds, PSO uses a population of 'particles' (potential solutions) that 'fly' through the solution space. Each particle adjusts its path based on its own best-known position and the best-known position of the entire swarm, collectively converging on an optimal solution. I have successfully used this to fine-tune the gains of PI controllers for Active Power Filters, achieving faster response and greater stability.</li>
                  <li><strong>Ant Colony Optimization (ACO):</strong> This algorithm mimics the foraging behavior of ants, which lay down pheromone trails to find the shortest path between their nest and a food source. In power systems, ACO can be used to solve complex routing problems or to optimize the switching patterns in power converters to minimize harmonics.</li>
              </ul>
              <p>These nature-inspired methods offer robust, adaptive, and computationally efficient ways to tackle challenges that are otherwise intractable, demonstrating that innovation often means looking at a problem from a completely different perspective.</p>
          </>
      )
    },
    {
      slug: 'mentoring-future-innovators',
      title: 'Mentoring Future Innovators: A Philosophy on Engineering Education',
      date: 'September 18, 2023',
       content: (
          <>
              <p>In an era of rapid technological change, the role of an educator extends far beyond the traditional confines of a lecturer. We are not merely transmitters of information but cultivators of talent, curiosity, and critical thinking. My teaching philosophy is built on the principle of transforming students from passive learners into active problem-solvers who are prepared for the complexities of the modern world.</p>
              <h3>Core Principles of My Approach</h3>
              <ul>
                  <li><strong>Project-Based Learning (PBL):</strong> Theory comes alive when applied. I structure my courses around hands-on projects that challenge students to design, simulate, and sometimes even build solutions to real-world engineering problems. This not only reinforces concepts but also teaches invaluable skills in teamwork, project management, and debugging.</li>
                  <li><strong>Bridging Theory and Practice:</strong> It's crucial for students to understand the 'why' behind the 'what.' I continuously link theoretical concepts to their practical applications in industry, whether it's discussing how control theory applies to a drone's stability or how semiconductor physics is the foundation of a smartphone's processor.</li>
                  <li><strong>Fostering Professional Ethics:</strong> An engineer's responsibility is not just technical but also social. I integrate discussions on professional ethics, sustainability, and the societal impact of technology into the curriculum, encouraging students to become responsible and conscientious professionals.</li>
              </ul>
              <p>Ultimately, my goal is to ignite a passion for lifelong learning. The tools and technologies will change, but the ability to analyze a problem, ask the right questions, and creatively find a solution is a timeless skill that will serve them throughout their careers.</p>
          </>
      )
    },
     {
      slug: 'from-concept-to-patent',
      title: 'From Concept to Patent: The Journey of an Academic Researcher',
      date: 'August 29, 2023',
      content: (
          <>
              <p>Innovation in academia is a structured journey that transforms a spark of curiosity into a tangible, protected intellectual property. Securing a patent is a rigorous process that validates the novelty and utility of a research outcome. It's a marathon, not a sprint, involving meticulous steps.</p>
              <h3>The Pathway to Innovation</h3>
              <ol>
                  <li><strong>Problem Identification and Literature Survey:</strong> The journey begins with identifying a gap in existing technology or a persistent problem. This is followed by an exhaustive literature review to understand the state-of-the-art and ensure the proposed idea is truly novel.</li>
                  <li><strong>Conceptualization and Simulation:</strong> Once the idea is formulated, it is modeled and simulated using tools like MATLAB/Simulink. This crucial phase allows for rapid prototyping and validation of the concept's feasibility without the need for physical hardware. Many of my patents on control algorithms for power filters were born in this digital environment.</li>
                  <li><strong>Prototyping and Experimental Validation:</strong> A successful simulation is followed by building a laboratory prototype. This is where theory meets reality. Experimental results are carefully documented and compared against simulation data to prove the concept's real-world effectiveness.</li>
                  <li><strong>Drafting and Filing the Patent:</strong> The final step involves drafting a detailed patent application. This document must clearly describe the invention, its novelty, the problem it solves, and how it is an inventive step over existing solutions. It is then filed with the patent office, marking the beginning of the examination process.</li>
              </ol>
              <p>This journey from a question to a granted patent is the pinnacle of academic research, contributing new knowledge to the community and providing a foundation for future technological advancements.</p>
          </>
      )
    },
    {
      slug: 'integrating-ai-iot-in-eee',
      title: 'Integrating AI and IoT into the EEE Curriculum',
      date: 'August 12, 2023',
      content: (
          <>
              <p>The Fourth Industrial Revolution is here, and at its core are Artificial Intelligence (AI) and the Internet of Things (IoT). For Electrical and Electronics Engineers (EEE), these are not just buzzwords; they are transformative tools that are reshaping our field. To prepare our students for the future, it is imperative that we integrate these cutting-edge topics directly into our curriculum.</p>
              <h3>Why AI and IoT are Crucial for EEE</h3>
              <p>The synergy between EEE, AI, and IoT is profound:</p>
              <ul>
                  <li><strong>Smart Grids:</strong> IoT sensors provide granular, real-time data on grid health, while AI algorithms analyze this data for load forecasting, fault detection, and predictive maintenance.</li>
                  <li><strong>Renewable Energy:</strong> AI can optimize the output of solar and wind farms based on weather predictions and grid demand.</li>
                  <li><strong>Power Electronics:</strong> Intelligent controllers with embedded AI can adapt their behavior in real-time, improving the efficiency and reliability of devices like motor drives and inverters.</li>
                  <li><strong>Autonomous Systems:</strong> From self-driving cars to drones, the core control systems rely on a seamless integration of electrical hardware and intelligent software.</li>
              </ul>
              <h3>A Roadmap for Curriculum Integration</h3>
              <p>Integrating these topics requires a multi-faceted approach. It's not about replacing core subjects but augmenting them. This includes introducing foundational courses in Python and machine learning, incorporating IoT-based projects into existing labs (e.g., a smart energy meter project), and offering specialized electives in areas like "AI for Power Systems." By doing so, we empower our students with a versatile skill set that makes them not just employable but indispensable in the modern tech landscape.</p>
          </>
      )
    }
];

const PostPage = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const [post, setPost] = useState<{ title: string; date: string; content: React.ReactNode } | null | undefined>(null);

    useEffect(() => {
        document.body.className = theme + '-mode';
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('slug');
        const foundPost = blogPostsData.find(p => p.slug === slug);
        setPost(foundPost);
        if (foundPost) {
            document.title = `${foundPost.title} | Dr. M.Madhusudhan Reddy`;
        }
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
    
    const renderContent = () => {
        if (post === null) {
            return <div className="loading">Loading post...</div>;
        }
        if (post === undefined) {
            return (
                <div className="not-found">
                    <h2>Post Not Found</h2>
                    <p>The article you are looking for does not exist or has been moved.</p>
                    <a href="/blog.html" className="btn btn-orange">Back to Insights</a>
                </div>
            );
        }
        return (
            <article className="post">
                <header className="post-header">
                    <h1>{post.title}</h1>
                    <p className="post-meta">Published on {post.date}</p>
                </header>
                <div className="post-content">
                    {post.content}
                </div>
            </article>
        );
    }

    return (
        <>
            <header className="post-page-header">
                <div className="container">
                    <nav>
                        <div className="logo">Dr. M. Madhusudhan Reddy</div>
                        <div className="header-controls">
                            <button onClick={toggleTheme} className="theme-toggle" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
                                {theme === 'dark' ? <SvgIcon d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" /> : <SvgIcon d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0-7v4h-1V2h1zm0 18v4h-1v-4h1zM4.22 5.64l2.83 2.83-1.41 1.41L2.81 7.05 4.22 5.64zm12.73 12.73l2.83 2.83-1.41 1.41-2.83-2.83 1.41-1.41zM2 12h4v-1H2v1zm18 0h4v-1h-4v1zM5.64 19.78l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83zm12.73-12.73l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83z" />}
                            </button>
                            <a href="/blog.html" className="btn btn-orange">Back to Insights</a>
                        </div>
                    </nav>
                </div>
            </header>

            <main>
                <div className="container post-container">
                    {renderContent()}
                </div>
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
    root.render(<PostPage />);
}