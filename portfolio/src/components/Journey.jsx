import React, { useEffect, useRef } from 'react'
import './Journey.css'

// Timeline events — newest first
const TIMELINE = [
  {
    period: '2025 — Present',
    title: 'Backend Development',
    org: 'Self-directed / Projects',
    points: [
      'Building Spring Boot REST APIs connected to MySQL databases',
      'Managing builds and dependencies with Apache Maven',
      'Writing structured Java following SOLID and OOP principles',
    ],
  },
  {
    period: '2024 — Present',
    title: 'Daily DSA Practice',
    org: 'LeetCode · GeeksForGeeks',
    points: [
      'Solving Java problems every day to sharpen algorithmic thinking',
      'Topics: Arrays, Strings, Recursion, Linked Lists, Trees',
      'Active on both LeetCode and GeeksForGeeks platforms',
    ],
  },
  {
    period: '2024',
    title: 'Core Java & OOP Mastery',
    org: 'Java-oops-dsa-learn repo',
    points: [
      'Documented all major OOP concepts in Java with working code',
      'Built a personal reference library for quick revision',
    ],
  },
  {
    period: '2023 — 2024',
    title: 'Frontend Exploration',
    org: 'Personal projects',
    points: [
      'Built UIs using HTML, CSS, Bootstrap, and JavaScript',
      'Explored React and Vite for component-based development',
      'Shipped a personal portfolio site from scratch',
    ],
  },
]

function Journey() {
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
    <section id="journey" className="section-wrapper">
      <div className="fade-up" ref={ref}>

        <p className="section-eyebrow">// where I've been</p>
        <h2 className="section-title">My Journey</h2>

        <div className="timeline">
          {TIMELINE.map((item, index) => (
            <div key={index} className="timeline__item">

              {/* The vertical line dot */}
              <div className="timeline__dot"></div>

              <div className="timeline__body">
                <p className="timeline__period">{item.period}</p>
                <p className="timeline__title">{item.title}</p>
                <p className="timeline__org">{item.org}</p>
                <ul className="timeline__points">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Journey
