import { useState } from 'react';
import { projects } from '../data';
import { useReveal } from '../hooks/useReveal';

const COLOR_MAP = {
  blue:   { accent: '#3b82f6', bg: 'rgba(59,130,246,0.08)',  border: 'rgba(59,130,246,0.2)',  glow: 'rgba(59,130,246,0.15)' },
  purple: { accent: '#8b5cf6', bg: 'rgba(139,92,246,0.08)',  border: 'rgba(139,92,246,0.2)',  glow: 'rgba(139,92,246,0.15)' },
  cyan:   { accent: '#06b6d4', bg: 'rgba(6,182,212,0.08)',   border: 'rgba(6,182,212,0.2)',   glow: 'rgba(6,182,212,0.15)'  },
  green:  { accent: '#10b981', bg: 'rgba(16,185,129,0.08)',  border: 'rgba(16,185,129,0.2)',  glow: 'rgba(16,185,129,0.15)' },
  orange: { accent: '#f97316', bg: 'rgba(249,115,22,0.08)',  border: 'rgba(249,115,22,0.2)',  glow: 'rgba(249,115,22,0.15)' },
  pink:   { accent: '#ec4899', bg: 'rgba(236,72,153,0.08)',  border: 'rgba(236,72,153,0.2)',  glow: 'rgba(236,72,153,0.15)' },
};

function ProjectIcon({ category, color }) {
  const map = {
    'Upgrade':       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
    'Integration':   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    'AL Extension':  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    'Reporting':     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    'Implementation':<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    'DevOps':        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
  };
  return map[category] || map['AL Extension'];
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, revealed] = useReveal(0.1);
  const c = COLOR_MAP[project.color] || COLOR_MAP.blue;

  return (
    <div ref={ref} className={`reveal${revealed ? ' show' : ''}`} style={{ transitionDelay: `${(index % 3) * 0.12}s` }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: 'rgba(14,14,34,0.85)',
          border: `1px solid ${hovered ? c.accent + '55' : c.border}`,
          borderRadius: 16, padding: '1.75rem',
          height: '100%', display: 'flex', flexDirection: 'column',
          transition: 'all 0.3s ease',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered ? `0 16px 50px ${c.glow}` : 'none',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <span style={{
            fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em',
            color: c.accent, background: c.bg, border: `1px solid ${c.border}`,
            borderRadius: 99, padding: '3px 10px', textTransform: 'uppercase',
          }}>{project.category}</span>
          <div style={{
            width: 34, height: 34, borderRadius: 8, background: c.bg, border: `1px solid ${c.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ProjectIcon category={project.category} color={c.accent} />
          </div>
        </div>

        <h3 style={{
          color: '#f1f5f9', fontWeight: 700, fontSize: '1rem',
          fontFamily: 'Space Grotesk, sans-serif', margin: '0 0 1.25rem', lineHeight: 1.35,
        }}>{project.title}</h3>

        {/* Problem / Solution / Outcome */}
        {[
          { label: 'Problem',  text: project.problem,  color: '#ef4444' },
          { label: 'Solution', text: project.solution, color: '#3b82f6' },
          { label: 'Outcome',  text: project.outcome,  color: '#10b981' },
        ].map(({ label, text, color }) => (
          <div key={label} style={{ marginBottom: '0.7rem', display: 'flex', gap: '0.65rem' }}>
            <span style={{
              fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color,
              background: `${color}15`, border: `1px solid ${color}30`,
              borderRadius: 4, padding: '2px 5px', flexShrink: 0, height: 'fit-content',
              marginTop: 2, textTransform: 'uppercase',
            }}>{label}</span>
            <p style={{ color: '#94a3b8', fontSize: '0.81rem', lineHeight: 1.6, margin: 0 }}>{text}</p>
          </div>
        ))}

        {/* Tags */}
        <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontSize: '0.67rem', fontWeight: 600, color: '#4a5568',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 99, padding: '2px 8px',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [headerRef, headerRevealed] = useReveal(0.1);

  return (
    <section id="projects" style={{ padding: '7rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
      <div className="orb" style={{ width: 600, height: 600, top: '20%', right: '-200px', background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div ref={headerRef} className={`reveal${headerRevealed ? ' show' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Case Studies</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: '#f1f5f9', margin: '0 0 1rem' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Real Business Central engagements — showing the problem, technical solution, and measurable business outcome.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
