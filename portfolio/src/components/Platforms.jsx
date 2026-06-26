import React, { useEffect, useRef } from 'react'
import './Platforms.css'

const PLATFORMS = [
  {
    icon: '⚡',
    name: 'LeetCode',
    handle: '@Isaitamilselvan',
    note: 'Daily practice',
    noteColor: '#f1e05a',
    href: 'https://leetcode.com/u/Isaitamilselvan/',
  },
  {
    icon: '🟢',
    name: 'GeeksForGeeks',
    handle: '@tamilselvau8cx',
    note: 'Concept-level problems',
    noteColor: '#3fb950',
    href: 'https://www.geeksforgeeks.org/user/tamilselvau8cx/',
  },
  {
    icon: '🐙',
    name: 'GitHub',
    handle: '@IsaiTamilselvan',
    note: 'Projects & code',
    noteColor: '#8b949e',
    href: 'https://github.com/IsaiTamilselvan',
  },
]

function Platforms() {
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
    <section className="section-wrapper">
      <div className="fade-up" ref={ref}>

        <p className="section-eyebrow">// where I practice</p>
        <h2 className="section-title">Coding Platforms</h2>

        <div className="platforms__grid">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="platform-card"
            >
              <span className="platform-card__icon">{p.icon}</span>
              <p className="platform-card__name">{p.name}</p>
              <p className="platform-card__handle">{p.handle}</p>
              <p className="platform-card__note" style={{ color: p.noteColor }}>
                {p.note}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Platforms
