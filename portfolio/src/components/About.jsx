import React, { useEffect, useRef } from 'react'
import './About.css'

// useFadeIn: a simple custom hook to animate elements into view
// when they scroll into the viewport
function useFadeIn() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return ref
}

// Links shown in the About column
const CONTACT_LINKS = [
  {
    icon: '🐙',
    label: 'github.com/IsaiTamilselvan',
    href: 'https://github.com/IsaiTamilselvan',
  },
  {
    icon: '💼',
    label: 'linkedin.com/in/isaitamilselvan',
    href: 'https://www.linkedin.com/in/isaitamilselvan',
  },
  {
    icon: '⚡',
    label: 'leetcode.com/Isaitamilselvan',
    href: 'https://leetcode.com/u/Isaitamilselvan/',
  },
  {
    icon: '🟢',
    label: 'GeeksForGeeks profile',
    href: 'https://www.geeksforgeeks.org/user/tamilselvau8cx/',
  },
  {
    icon: '✉️',
    label: 'tamilselvam1732005@gmail.com',
    href: 'mailto:tamilselvam1732005@gmail.com',
  },
]

function About() {
  const ref = useFadeIn()

  return (
    <section id="about" className="section-wrapper">
      <div className="fade-up" ref={ref}>

        <p className="section-eyebrow">// who I am</p>
        <h2 className="section-title">About Me</h2>

        <div className="about__grid">

          {/* Left: text */}
          <div className="about__text">
            <p>
              I'm a software developer from Tamil Nadu, India. I got into coding because
              I genuinely enjoy the <strong>problem-solving part</strong> — sitting with
              a tricky bug or designing a clean API feels satisfying, not frustrating.
            </p>
            <p>
              Most of my work lives in the <strong>Java ecosystem</strong>: Spring Boot
              for APIs, Maven for builds, MySQL for data. On the frontend side I've built
              interfaces with HTML, CSS, JavaScript, Bootstrap, and picked up React along the way.
            </p>
            <p>
              I believe <strong>clean code beats clever code</strong> every time.
              I write things other people can read, maintain, and build on.
            </p>
          </div>

          {/* Right: quick-contact links */}
          <div className="about__links">
            {CONTACT_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noreferrer"
                className="about__link-item"
              >
                <span className="about__link-icon">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
