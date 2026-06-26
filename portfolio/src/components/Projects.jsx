import React, { useEffect, useRef } from 'react'
import './Projects.css'

// Project data — add your projects here
const PROJECTS = [
  {
    title: 'Java OOPs & DSA Practice',
    desc:
      'A structured collection of Java programs covering all major Object-Oriented Programming concepts and Data Structures & Algorithms. Organized by topic for easy revision.',
    tech: ['Java', 'OOP', 'DSA'],
    techColors: ['tag-orange', 'tag-grey', 'tag-blue'],
    link: 'https://github.com/IsaiTamilselvan/Java-oops-dsa-learn',
    langDot: '#b07219',   // Java orange
  },
  {
    title: 'Mini Projects (Console Based)',
    desc:
      'Small Java console apps that solve everyday problems — calculators, student records, and basic CRUD logic. Built to practice applying Java OOP to real mini-scenarios.',
    tech: ['Java', 'OOP', 'CRUD'],
    techColors: ['tag-orange', 'tag-grey', 'tag-green'],
    link: 'https://github.com/IsaiTamilselvan/Mini-projects',
    langDot: '#b07219',
  },
  {
    title: 'Portfolio Website',
    desc:
      'My personal developer portfolio built from scratch — no templates. Clean layout, structured sections, and a design focused on readability.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    techColors: ['tag-grey', 'tag-blue', 'tag-blue'],
    link: 'https://github.com/IsaiTamilselvan/portfolio',
    langDot: '#e34c26',   // HTML orange-red
  },
  {
    title: 'Frontend Experiments',
    desc:
      'A collection of frontend UI experiments using JavaScript — interactive components, DOM manipulation, and small visual projects to practice the browser side of development.',
    tech: ['JavaScript', 'DOM', 'HTML/CSS'],
    techColors: ['tag-blue', 'tag-grey', 'tag-grey'],
    link: 'https://github.com/IsaiTamilselvan/Front-end',
    langDot: '#f1e05a',   // JS yellow
  },
]

function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => { if (ref.current) observer.unobserve(ref.current) }
  }, [])

  return (
    <section id="projects" className="section-wrapper">
      <div className="fade-up" ref={ref}>

        <p className="section-eyebrow">// things I've built</p>
        <h2 className="section-title">Projects</h2>

        <div className="projects__list">
          {PROJECTS.map((project) => (
            <div key={project.title} className="project-card">

              {/* Left side: info */}
              <div className="project-card__info">
                <p className="project-card__title">
                  {/* Language color dot */}
                  <span
                    className="project-card__dot"
                    style={{ background: project.langDot }}
                  ></span>
                  {project.title}
                </p>
                <p className="project-card__desc">{project.desc}</p>
                <div className="project-card__tech">
                  {project.tech.map((t, i) => (
                    <span key={t} className={`tag ${project.techColors[i]}`}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Right side: link */}
              <div className="project-card__action">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link"
                >
                  View ↗
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
