import React, { useEffect, useRef } from 'react'
import './Skills.css'

// All skill groups defined as data
// This makes it easy to add/edit/remove skills without touching JSX structure
const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java',       color: 'tag-orange' },
      { name: 'JavaScript', color: 'tag-blue'   },
      { name: 'HTML5',      color: 'tag-grey'   },
      { name: 'CSS3',       color: 'tag-grey'   },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', color: 'tag-green'  },
      { name: 'Spring MVC',  color: 'tag-green'  },
      { name: 'REST APIs',   color: 'tag-grey'   },
      { name: 'Maven',       color: 'tag-orange' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL',      color: 'tag-blue' },
      { name: 'JDBC',       color: 'tag-grey' },
      { name: 'SQL Queries',color: 'tag-grey' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React',      color: 'tag-blue'   },
      { name: 'Bootstrap',  color: 'tag-purple' },
      { name: 'Vite',       color: 'tag-purple' },
    ],
  },
  {
    title: 'DSA Topics',
    skills: [
      { name: 'Arrays',       color: 'tag-blue' },
      { name: 'Strings',      color: 'tag-blue' },
      { name: 'Linked Lists', color: 'tag-blue' },
      { name: 'Recursion',    color: 'tag-blue' },
      { name: 'Trees',        color: 'tag-blue' },
      { name: 'Daily Grind ✓',color: 'tag-green'},
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git',          color: 'tag-grey'   },
      { name: 'GitHub',       color: 'tag-grey'   },
      { name: 'IntelliJ IDEA',color: 'tag-purple' },
      { name: 'VS Code',      color: 'tag-grey'   },
    ],
  },
]

function Skills() {
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
    <section id="skills" className="section-wrapper">
      <div className="fade-up" ref={ref}>

        <p className="section-eyebrow">// what I work with</p>
        <h2 className="section-title">Tech Stack</h2>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="skills__group">
              <p className="skills__group-title">{group.title}</p>
              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span key={skill.name} className={`tag ${skill.color}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
