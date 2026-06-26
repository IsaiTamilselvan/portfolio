import React, { useEffect, useState } from 'react'
import './Hero.css'

// Roles that cycle through in the hero subtitle
const ROLES = [
  'Java Developer',
  'Backend Enthusiast',
  'DSA Problem Solver',
  'Spring Boot Learner',
]

function Hero() {
  // Which role index we're currently showing
  const [roleIndex, setRoleIndex] = useState(0)
  // The text we're currently displaying (for typing effect)
  const [displayed, setDisplayed] = useState('')
  // Are we typing forward or deleting?
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing effect logic
  useEffect(() => {
    const currentRole = ROLES[roleIndex]

    let timeout

    if (!isDeleting && displayed.length < currentRole.length) {
      // still typing forward
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1))
      }, 80)

    } else if (!isDeleting && displayed.length === currentRole.length) {
      // finished typing, wait then start deleting
      timeout = setTimeout(() => setIsDeleting(true), 1800)

    } else if (isDeleting && displayed.length > 0) {
      // deleting
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length - 1))
      }, 45)

    } else if (isDeleting && displayed.length === 0) {
      // done deleting, move to next role
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section className="hero">
      {/* Background glow blobs */}
      <div className="hero__glow hero__glow--blue"  aria-hidden="true"></div>
      <div className="hero__glow hero__glow--green" aria-hidden="true"></div>

      <div className="hero__content">

        {/* Small badge at the top */}
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Open to internships &amp; junior roles
        </div>

        {/* Main heading */}
        <h1 className="hero__heading">
          Hi, I'm<br />
          <span className="hero__name">Isai Tamilselvan</span>
        </h1>

        {/* Typing role */}
        <p className="hero__role">
          <span className="hero__role-prefix">// </span>
          <span className="hero__role-text">{displayed}</span>
          <span className="hero__cursor">|</span>
        </p>

        {/* Short bio */}
        <p className="hero__bio">
          I write <strong>clean Java</strong> and build backend systems with Spring Boot.
          I practice DSA daily, love solving real problems with code,
          and believe that <strong>readable code is good code.</strong>
        </p>

        {/* CTA buttons */}
        <div className="hero__actions">
          <a href="https://github.com/IsaiTamilselvan" target="_blank" rel="noreferrer" className="btn-solid">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/isaitamilselvan" target="_blank" rel="noreferrer" className="btn-ghost">
            LinkedIn
          </a>
          <a href="mailto:tamilselvam1732005@gmail.com" className="btn-ghost">
            Email Me
          </a>
        </div>

        {/* Stats row */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">Java</span>
            <span className="hero__stat-label">Primary language</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-num">DSA</span>
            <span className="hero__stat-label">Consistent daily grind</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-num">Spring</span>
            <span className="hero__stat-label">Boot + REST APIs</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-num">2025</span>
            <span className="hero__stat-label">Actively building</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
