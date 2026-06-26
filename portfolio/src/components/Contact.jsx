import React, { useEffect, useRef } from 'react'
import './Contact.css'

function Contact() {
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
    <section id="contact" className="section-wrapper">
      <div className="fade-up" ref={ref}>

        <p className="section-eyebrow">// let's talk</p>
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact__box">

          <div className="contact__left">
            <h3 className="contact__headline">
              Open to internships &amp; junior roles
            </h3>
            <p className="contact__subtext">
              I'm looking for opportunities where I can contribute, keep learning,
              and work with people who care about writing good software.
              Even if you're not hiring right now — let's connect.
            </p>
          </div>

          <div className="contact__actions">
            <a
              href="mailto:tamilselvam1732005@gmail.com"
              className="btn-solid"
            >
              ✉ Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/isaitamilselvan"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              LinkedIn ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
