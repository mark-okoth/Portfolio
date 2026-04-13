import { testimonials } from '../data';
import { useReveal } from '../hooks/useReveal';
import { useState } from 'react';

function TestimonialCard({ t, index }) {
  const [ref, revealed] = useReveal(0.1);
  return (
    <div ref={ref} className={`reveal${revealed ? ' show' : ''}`} style={{ transitionDelay: `${index * 0.15}s` }}>
      <div style={{
        background: 'rgba(14,14,34,0.85)',
        border: '1px solid rgba(59,130,246,0.12)',
        borderRadius: 16, padding: '2rem',
        height: '100%', display: 'flex', flexDirection: 'column',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(59,130,246,0.08)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.12)'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        {/* Stars */}
        <div style={{ display: 'flex', gap: 3, marginBottom: '1.25rem' }}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          ))}
        </div>

        {/* Quote mark */}
        <div style={{ fontSize: '3rem', color: 'rgba(59,130,246,0.2)', lineHeight: 1, marginBottom: '0.5rem', fontFamily: 'Georgia, serif' }}>"</div>

        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.75, margin: '0 0 1.5rem', flex: 1, fontStyle: 'italic' }}>
          {t.text}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: '1rem', borderTop: '1px solid rgba(59,130,246,0.08)' }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
            border: '1px solid rgba(59,130,246,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.8rem', fontWeight: 700, color: '#60a5fa',
            fontFamily: 'Space Grotesk, sans-serif',
          }}>
            {t.name.charAt(0)}
          </div>
          <div>
            <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.88rem' }}>{t.name}</div>
            <div style={{ color: '#4a5568', fontSize: '0.75rem' }}>{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [headerRef, headerRevealed] = useReveal(0.1);

  return (
    <section id="testimonials" style={{ padding: '7rem 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 400, height: 400, top: 0, right: '-100px', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div ref={headerRef} className={`reveal${headerRevealed ? ' show' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Client Feedback</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: '#f1f5f9', margin: '0 0 1rem' }}>
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: 460, margin: '0 auto', lineHeight: 1.7 }}>
            Feedback from enterprise clients and partners across multiple Business Central engagements.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>

        {/* Trust badges */}
        <div className={`reveal${headerRevealed ? ' show' : ''}`} style={{
          marginTop: '3.5rem', transitionDelay: '0.4s',
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem',
        }}>
          {[
            { icon: '🌍', label: 'Global Clients', sub: 'Europe, North America, East Africa' },
            { icon: '⭐', label: '5-Star Rated', sub: 'Consistent delivery excellence' },
            { icon: '🔒', label: 'Confidential', sub: 'NDA-compliant engagements' },
          ].map(b => (
            <div key={b.label} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: 'rgba(14,14,34,0.7)', border: '1px solid rgba(59,130,246,0.1)',
              borderRadius: 10, padding: '0.75rem 1.25rem',
            }}>
              <span style={{ fontSize: '1.2rem' }}>{b.icon}</span>
              <div>
                <div style={{ color: '#f1f5f9', fontSize: '0.82rem', fontWeight: 600 }}>{b.label}</div>
                <div style={{ color: '#4a5568', fontSize: '0.72rem' }}>{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 641px) and (max-width: 900px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
