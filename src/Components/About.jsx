import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useCounter } from '../hooks/useCounter';

const STATS = [
  { value: 7,  suffix: '+', label: 'Years Experience',    sub: 'In Dynamics NAV & BC' },
  { value: 40, suffix: '+', label: 'Projects Delivered',  sub: 'Across 10+ industries' },
  { value: 20, suffix: '+', label: 'Clients Served',      sub: 'Global & East Africa' },
  { value: 6,  suffix: '',  label: 'Employers / Roles',   sub: 'Progressive career growth' },
];

function StatCard({ value, suffix, label, sub, active }) {
  const count = useCounter(value, 1800, active);
  const [ref, revealed] = useReveal();
  return (
    <div ref={ref} className={`stat-card reveal${revealed ? ' show' : ''}`}>
      <div style={{
        fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif',
        background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        lineHeight: 1,
      }}>
        {count}{suffix}
      </div>
      <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.95rem', marginTop: 8 }}>{label}</div>
      <div style={{ color: '#4a5568', fontSize: '0.78rem', marginTop: 4 }}>{sub}</div>
    </div>
  );
}

export default function About() {
  const [secRef, secRevealed] = useReveal(0.1);
  const [textRef, textRevealed] = useReveal(0.15);

  return (
    <section id="about" style={{ position: 'relative', padding: '7rem 0', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      {/* Orbs */}
      <div className="orb" style={{ width: 400, height: 400, top: '-100px', right: '-80px', background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Section header */}
        <div ref={secRef} className={`reveal${secRevealed ? ' show' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>About Me</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: '#f1f5f9', margin: 0 }}>
            7+ Years Building{' '}
            <span className="gradient-text">Business Central</span>{' '}
            Solutions
          </h2>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }} className="about-grid">

          {/* Avatar / Visual */}
          <div className={`reveal-left${textRevealed ? ' show' : ''}`} ref={textRef} style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              {/* Avatar circle */}
              <div style={{
                width: 240, height: 240,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))',
                border: '2px solid rgba(59,130,246,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 0 60px rgba(59,130,246,0.1)',
              }}>
                <div style={{
                  width: 200, height: 200, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0f0f2e, #1a1a40)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: 8,
                }}>
                  {/* Initials */}
                  <div style={{
                    fontSize: '3.5rem', fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif',
                    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    lineHeight: 1,
                  }}>MO</div>
                  <div style={{ fontSize: '0.65rem', color: '#4a5568', letterSpacing: '0.12em', textTransform: 'uppercase' }}>BC Developer</div>
                </div>

                {/* Orbiting badges */}
                {[
                  { label: 'AL', angle: -30,  color: '#3b82f6' },
                  { label: 'BC', angle: 90,   color: '#8b5cf6' },
                  { label: 'API', angle: 210, color: '#06b6d4' },
                ].map(({ label, angle, color }) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 130;
                  const x = 120 + r * Math.cos(rad) - 20;
                  const y = 120 + r * Math.sin(rad) - 20;
                  return (
                    <div key={label} style={{
                      position: 'absolute', left: x, top: y,
                      width: 40, height: 40, borderRadius: '50%',
                      background: `${color}22`,
                      border: `1px solid ${color}55`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem', fontWeight: 700, color,
                      fontFamily: 'JetBrains Mono, monospace',
                    }}>{label}</div>
                  );
                })}
              </div>

              {/* Microsoft badge */}
              <div style={{
                position: 'absolute', bottom: -12, left: '50%', transform: 'translateX(-50%)',
                background: 'rgba(14,14,34,0.9)',
                border: '1px solid rgba(59,130,246,0.25)',
                borderRadius: 8, padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: 6,
                whiteSpace: 'nowrap',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 500 }}>Microsoft Dynamics Specialist</span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.85, margin: '0 0 1.25rem' }}>
              I'm a <strong style={{ color: '#f1f5f9' }}>Microsoft Dynamics 365 Business Central Technical Consultant</strong> with over 7 years of hands-on experience delivering ERP solutions across East Africa, Europe, and North America.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.85, margin: '0 0 1.25rem' }}>
              My expertise spans the full Business Central ecosystem — from AL and C/AL extension development and complex system customizations to <strong style={{ color: '#f1f5f9' }}>NAV-to-BC upgrade projects</strong>, REST API integrations, and CI/CD pipeline implementation using AL-Go.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.85, margin: '0 0 2rem' }}>
              I bring a client-focused, outcome-driven approach to every engagement — translating complex business requirements into robust, scalable BC solutions that deliver measurable results.
            </p>

            {/* Key highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '2rem' }}>
              {[
                'AL & C/AL Expert',
                'NAV → BC Upgrades',
                'API Integration Architect',
                'CI/CD with AL-Go',
                'RDLC & Word Reports',
                'Agile / Client-facing',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <polyline points="20 6 9 17 4 12" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Contact quick-links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <a href="mailto:markokoth96@gmail.com" className="btn-outline" style={{ fontSize: '0.82rem', padding: '0.55rem 1rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                markokoth96@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/mark-okoth-1b514115b/" target="_blank" rel="noreferrer"
                className="btn-outline" style={{ fontSize: '0.82rem', padding: '0.55rem 1rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="stats-grid">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} active={secRevealed} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } .about-grid > div:first-child { display: none; } }
        @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
