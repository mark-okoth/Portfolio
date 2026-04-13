import React, { useState } from 'react';
import { skillCategories } from '../data';
import { useReveal } from '../hooks/useReveal';

const COLOR_MAP = {
  blue:   { accent: '#3b82f6', bg: 'rgba(59,130,246,0.08)',  border: 'rgba(59,130,246,0.25)',  glow: 'rgba(59,130,246,0.3)'  },
  purple: { accent: '#8b5cf6', bg: 'rgba(139,92,246,0.08)',  border: 'rgba(139,92,246,0.25)',  glow: 'rgba(139,92,246,0.3)'  },
  cyan:   { accent: '#06b6d4', bg: 'rgba(6,182,212,0.08)',   border: 'rgba(6,182,212,0.25)',   glow: 'rgba(6,182,212,0.3)'   },
  green:  { accent: '#10b981', bg: 'rgba(16,185,129,0.08)',  border: 'rgba(16,185,129,0.25)',  glow: 'rgba(16,185,129,0.3)'  },
};

function SkillBar({ name, level, desc, accent, revealed, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '1rem',
        borderRadius: 10,
        background: hovered ? 'rgba(255,255,255,0.03)' : 'transparent',
        border: `1px solid ${hovered ? accent + '40' : 'transparent'}`,
        transition: 'all 0.25s ease',
        cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <span style={{ color: hovered ? '#f1f5f9' : '#cbd5e1', fontWeight: 600, fontSize: '0.88rem', transition: 'color 0.2s' }}>{name}</span>
        <span style={{ color: accent, fontWeight: 700, fontSize: '0.8rem' }}>{level}%</span>
      </div>
      {hovered && <p style={{ color: '#64748b', fontSize: '0.78rem', margin: '0 0 8px', lineHeight: 1.5 }}>{desc}</p>}
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: revealed ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${accent}, ${accent}99)`,
            transitionDelay: `${delay}ms`,
            boxShadow: revealed ? `0 0 8px ${accent}66` : 'none',
          }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ category, index }) {
  const [ref, revealed] = useReveal(0.1);
  const c = COLOR_MAP[category.color] || COLOR_MAP.blue;

  return (
    <div
      ref={ref}
      className={`reveal${revealed ? ' show' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div style={{
        background: 'rgba(14,14,34,0.8)',
        border: `1px solid ${c.border}`,
        borderRadius: 16,
        padding: '1.75rem',
        height: '100%',
        transition: 'box-shadow 0.3s',
      }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 40px ${c.glow}`; }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
      >
        {/* Category header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: c.bg, border: `1px solid ${c.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <CategoryIcon name={category.id} color={c.accent} />
          </div>
          <div>
            <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', fontFamily: 'Space Grotesk, sans-serif' }}>{category.name}</div>
            <div style={{ color: '#64748b', fontSize: '0.72rem' }}>{category.skills.length} skills</div>
          </div>
        </div>

        {/* Skill bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {category.skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              {...skill}
              accent={c.accent}
              revealed={revealed}
              delay={i * 180}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryIcon({ name, color }) {
  const icons = {
    core: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    devops: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    integration: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    reporting: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  };
  return icons[name] || icons.core;
}

export default function Skills() {
  const [headerRef, headerRevealed] = useReveal(0.1);

  return (
    <section id="skills" style={{ padding: '7rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, bottom: 0, left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>

        <div ref={headerRef} className={`reveal${headerRevealed ? ' show' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Technical Skills</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: '#f1f5f9', margin: '0 0 1rem' }}>
            The BC{' '}<span className="gradient-text">Tech Stack</span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Specialized tools and technologies across the full Business Central development and integration landscape.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="skills-grid">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

        {/* Proficiency legend */}
        <div className={`reveal${headerRevealed ? ' show' : ''}`} style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', transitionDelay: '0.5s' }}>
          {[
            { range: '90–100%', label: 'Expert', color: '#3b82f6' },
            { range: '75–89%',  label: 'Advanced', color: '#8b5cf6' },
            { range: '60–74%',  label: 'Proficient', color: '#06b6d4' },
          ].map(l => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 4, borderRadius: 2, background: l.color }} />
              <span style={{ color: '#64748b', fontSize: '0.78rem' }}><strong style={{ color: l.color }}>{l.label}</strong> {l.range}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
