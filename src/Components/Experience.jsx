import React, { useState } from 'react';
import { experiences } from '../data';
import { useReveal } from '../hooks/useReveal';

function TimelineItem({ exp, index, isLeft }) {
  const [open, setOpen] = useState(index === 0);
  const [ref, revealed] = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal${revealed ? ' show' : ''}`}
      style={{
        transitionDelay: `${index * 0.1}s`,
        display: 'grid',
        gridTemplateColumns: '1fr 60px 1fr',
        gap: 0,
        marginBottom: '1.5rem',
        alignItems: 'start',
      }}
      className={`reveal timeline-row${revealed ? ' show' : ''}`}
    >
      {/* Left column */}
      <div style={{ paddingRight: '2rem', textAlign: 'right' }}>
        {isLeft ? (
          <TimelineCard exp={exp} open={open} setOpen={setOpen} />
        ) : (
          <div style={{ paddingTop: '0.5rem' }}>
            <span style={{ color: '#4a5568', fontSize: '0.8rem', fontWeight: 500 }}>{exp.period}</span>
          </div>
        )}
      </div>

      {/* Center dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          onClick={() => setOpen(!open)}
          style={{
            width: 16, height: 16, borderRadius: '50%',
            background: exp.current
              ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
              : 'var(--bg-card)',
            border: `2px solid ${exp.current ? '#3b82f6' : 'rgba(59,130,246,0.3)'}`,
            boxShadow: exp.current ? '0 0 12px rgba(59,130,246,0.5)' : 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
            zIndex: 1,
            flexShrink: 0,
          }}
        />
      </div>

      {/* Right column */}
      <div style={{ paddingLeft: '2rem' }}>
        {!isLeft ? (
          <TimelineCard exp={exp} open={open} setOpen={setOpen} />
        ) : (
          <div style={{ paddingTop: '0.5rem' }}>
            <span style={{ color: '#4a5568', fontSize: '0.8rem', fontWeight: 500 }}>{exp.period}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function TimelineCard({ exp, open, setOpen }) {
  return (
    <div
      style={{
        background: 'rgba(14,14,34,0.8)',
        border: `1px solid ${open ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.1)'}`,
        borderRadius: 14,
        padding: '1.25rem 1.5rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: open ? '0 8px 30px rgba(59,130,246,0.08)' : 'none',
        textAlign: 'left',
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
            <span style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', fontFamily: 'Space Grotesk, sans-serif' }}>
              {exp.company}
            </span>
            {exp.current && (
              <span style={{
                fontSize: '0.65rem', fontWeight: 600, color: '#10b981',
                background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
                borderRadius: 99, padding: '1px 8px',
              }}>Current</span>
            )}
          </div>
          <div style={{ color: '#60a5fa', fontSize: '0.85rem', fontWeight: 500, marginBottom: 2 }}>{exp.role}</div>
          <div style={{ color: '#4a5568', fontSize: '0.75rem' }}>{exp.type}</div>
        </div>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2"
          style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>

      {open && (
        <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(59,130,246,0.08)', paddingTop: '1rem' }}>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.65, margin: '0 0 0.75rem' }}>{exp.summary}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {exp.achievements.map((a, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, color: '#64748b', fontSize: '0.82rem', lineHeight: 1.55 }}>
                <span style={{ color: '#3b82f6', flexShrink: 0, marginTop: 3 }}>›</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const [headerRef, headerRevealed] = useReveal(0.1);

  return (
    <section id="experience" style={{ padding: '7rem 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
      <div className="orb" style={{ width: 400, height: 400, top: '10%', left: '-100px', background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>

        <div ref={headerRef} className={`reveal${headerRevealed ? ' show' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Career Journey</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: '#f1f5f9', margin: '0 0 1rem' }}>
            7 Years of{' '}<span className="gradient-text">BC Expertise</span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            A progressive career across leading Microsoft Dynamics practices in Kenya and globally.
          </p>
        </div>

        {/* Desktop timeline */}
        <div style={{ position: 'relative' }} className="timeline-desktop">
          {/* Center line */}
          <div style={{
            position: 'absolute', left: 'calc(50% - 1px)', top: 0, bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, transparent, rgba(59,130,246,0.5) 5%, rgba(139,92,246,0.5) 95%, transparent)',
          }} />

          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} isLeft={i % 2 === 0} />
          ))}
        </div>

        {/* Mobile timeline */}
        <div style={{ display: 'none', flexDirection: 'column', gap: '1rem', position: 'relative' }} className="timeline-mobile">
          <div style={{
            position: 'absolute', left: 8, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(180deg, transparent, rgba(59,130,246,0.5) 5%, rgba(139,92,246,0.5) 95%, transparent)',
          }} />
          {experiences.map((exp, i) => (
            <MobileTimelineItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-desktop { display: none !important; }
          .timeline-mobile   { display: flex !important; }
        }
        .timeline-row { grid-template-columns: 1fr 60px 1fr !important; }
      `}</style>
    </section>
  );
}

function MobileTimelineItem({ exp, index }) {
  const [open, setOpen] = useState(index === 0);
  const [ref, revealed] = useReveal(0.1);

  return (
    <div ref={ref} className={`reveal${revealed ? ' show' : ''}`}
      style={{ display: 'flex', gap: '1rem', transitionDelay: `${index * 0.08}s`, paddingLeft: '1.5rem' }}>
      <div style={{
        position: 'absolute', left: 2,
        width: 14, height: 14, borderRadius: '50%',
        background: exp.current ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'var(--bg-card)',
        border: `2px solid ${exp.current ? '#3b82f6' : 'rgba(59,130,246,0.3)'}`,
        boxShadow: exp.current ? '0 0 10px rgba(59,130,246,0.5)' : 'none',
        marginTop: 6, flexShrink: 0,
      }} />
      <div style={{ flex: 1 }}>
        <div style={{
          background: 'rgba(14,14,34,0.8)',
          border: `1px solid ${open ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.1)'}`,
          borderRadius: 12, padding: '1rem 1.25rem',
          cursor: 'pointer',
        }} onClick={() => setOpen(!open)}>
          <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem', fontFamily: 'Space Grotesk, sans-serif' }}>{exp.company}</div>
          <div style={{ color: '#60a5fa', fontSize: '0.82rem', fontWeight: 500, marginTop: 2 }}>{exp.role}</div>
          <div style={{ color: '#4a5568', fontSize: '0.72rem', marginTop: 2 }}>{exp.period} · {exp.type}</div>
          {open && (
            <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(59,130,246,0.08)' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {exp.achievements.map((a, i) => (
                  <li key={i} style={{ display: 'flex', gap: 6, color: '#64748b', fontSize: '0.8rem', lineHeight: 1.5 }}>
                    <span style={{ color: '#3b82f6', flexShrink: 0 }}>›</span><span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
