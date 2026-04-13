import { services } from '../data';
import { useReveal } from '../hooks/useReveal';
import { useState } from 'react';

const COLOR_MAP = {
  blue:   { accent: '#3b82f6', bg: 'rgba(59,130,246,0.08)',  border: 'rgba(59,130,246,0.2)',  glow: '0 12px 40px rgba(59,130,246,0.15)' },
  purple: { accent: '#8b5cf6', bg: 'rgba(139,92,246,0.08)',  border: 'rgba(139,92,246,0.2)',  glow: '0 12px 40px rgba(139,92,246,0.15)' },
  cyan:   { accent: '#06b6d4', bg: 'rgba(6,182,212,0.08)',   border: 'rgba(6,182,212,0.2)',   glow: '0 12px 40px rgba(6,182,212,0.15)'  },
  green:  { accent: '#10b981', bg: 'rgba(16,185,129,0.08)',  border: 'rgba(16,185,129,0.2)',  glow: '0 12px 40px rgba(16,185,129,0.15)' },
  orange: { accent: '#f97316', bg: 'rgba(249,115,22,0.08)',  border: 'rgba(249,115,22,0.2)',  glow: '0 12px 40px rgba(249,115,22,0.15)' },
};

const SERVICE_ICONS = {
  1: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  2: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
      <polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
    </svg>
  ),
  3: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  4: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  5: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
    </svg>
  ),
};

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, revealed] = useReveal(0.1);
  const c = COLOR_MAP[service.color] || COLOR_MAP.blue;

  return (
    <div ref={ref} className={`reveal${revealed ? ' show' : ''}`} style={{ transitionDelay: `${(index % 3) * 0.12}s` }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: 'rgba(14,14,34,0.8)',
          border: `1px solid ${hovered ? c.accent + '50' : c.border}`,
          borderRadius: 16, padding: '2rem',
          height: '100%', display: 'flex', flexDirection: 'column',
          transition: 'all 0.3s ease',
          transform: hovered ? 'translateY(-4px)' : 'none',
          boxShadow: hovered ? c.glow : 'none',
        }}
      >
        {/* Icon */}
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: c.bg, border: `1px solid ${c.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1.25rem',
          transition: 'box-shadow 0.3s',
          boxShadow: hovered ? `0 0 20px ${c.bg}` : 'none',
        }}>
          {(SERVICE_ICONS[service.id] || SERVICE_ICONS[1])(c.accent)}
        </div>

        <h3 style={{
          color: '#f1f5f9', fontWeight: 700, fontSize: '1.05rem',
          fontFamily: 'Space Grotesk, sans-serif', margin: '0 0 0.75rem',
        }}>{service.title}</h3>

        <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.7, margin: '0 0 1.25rem', flex: 1 }}>
          {service.description}
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {service.features.map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 5, height: 5, borderRadius: '50%',
                background: c.accent, flexShrink: 0,
                boxShadow: `0 0 6px ${c.accent}`,
              }} />
              <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>{f}</span>
            </li>
          ))}
        </ul>

        {/* Hover arrow */}
        <div style={{
          marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: 6,
          color: c.accent, fontSize: '0.82rem', fontWeight: 600,
          opacity: hovered ? 1 : 0, transition: 'opacity 0.2s',
        }}>
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [headerRef, headerRevealed] = useReveal(0.1);

  return (
    <section id="services" style={{ padding: '7rem 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, bottom: '-100px', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div ref={headerRef} className={`reveal${headerRevealed ? ' show' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>What I Offer</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: '#f1f5f9', margin: '0 0 1rem' }}>
            Consulting <span className="gradient-text">Services</span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            End-to-end Business Central expertise — from initial assessment and customization through integration, reporting, and ongoing optimization.
          </p>
        </div>

        {/* First row: 3 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }} className="services-grid-top">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '66.6%', margin: '0 auto' }} className="services-grid-bottom">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i + 3} />
          ))}
        </div>

        {/* CTA */}
        <div className={`reveal${headerRevealed ? ' show' : ''}`} style={{ textAlign: 'center', marginTop: '3.5rem', transitionDelay: '0.4s' }}>
          <p style={{ color: '#64748b', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
            Looking for a Business Central specialist for your project?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Get In Touch
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid-top    { grid-template-columns: 1fr !important; }
          .services-grid-bottom { grid-template-columns: 1fr !important; max-width: 100% !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .services-grid-top { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
