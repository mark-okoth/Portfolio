import { techStack } from '../data';
import { useReveal } from '../hooks/useReveal';
import { useState } from 'react';

const CATEGORIES = ['All', 'Platform', 'Language', 'DevOps', 'Integration', 'Analytics', 'Cloud', 'Database', 'IDE', 'Reporting'];

function TechItem({ item, index, revealed }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${item.color}12` : 'rgba(14,14,34,0.7)',
        border: `1px solid ${hovered ? item.color + '55' : 'rgba(59,130,246,0.1)'}`,
        borderRadius: 14, padding: '1.25rem 1rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        cursor: 'default', transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px) scale(1.03)' : 'none',
        boxShadow: hovered ? `0 8px 30px ${item.color}25` : 'none',
        opacity: revealed ? 1 : 0,
        transitionDelay: `${(index % 8) * 60}ms`,
      }}
    >
      {/* Abbr badge */}
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: `${item.color}20`,
        border: `1px solid ${item.color}40`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.72rem', fontWeight: 800,
        color: item.color, fontFamily: 'JetBrains Mono, monospace',
        letterSpacing: '0.02em',
        boxShadow: hovered ? `0 0 15px ${item.color}40` : 'none',
        transition: 'box-shadow 0.25s',
      }}>{item.abbr}</div>

      <div style={{ textAlign: 'center' }}>
        <div style={{ color: hovered ? '#f1f5f9' : '#94a3b8', fontSize: '0.78rem', fontWeight: 600, transition: 'color 0.2s', lineHeight: 1.2 }}>{item.name}</div>
        <div style={{ color: '#3d4a5c', fontSize: '0.65rem', marginTop: 3 }}>{item.category}</div>
      </div>
    </div>
  );
}

export default function TechStack() {
  const [filter, setFilter] = useState('All');
  const [headerRef, headerRevealed] = useReveal(0.1);
  const [gridRef, gridRevealed] = useReveal(0.05);

  const visible = CATEGORIES.filter(c => techStack.some(t => c === 'All' || t.category === c));
  const filtered = filter === 'All' ? techStack : techStack.filter(t => t.category === filter);

  return (
    <section id="techstack" style={{ padding: '7rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>

        <div ref={headerRef} className={`reveal${headerRevealed ? ' show' : ''}`} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Tools & Technologies</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: '#f1f5f9', margin: '0 0 1rem' }}>
            BC <span className="gradient-text">Tech Ecosystem</span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            The tools, languages, and platforms that power my Business Central development workflow.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`reveal${headerRevealed ? ' show' : ''}`} style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8,
          marginBottom: '3rem', transitionDelay: '0.2s',
        }}>
          {visible.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '5px 14px', borderRadius: 99,
                fontSize: '0.75rem', fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s',
                background: filter === cat ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'rgba(255,255,255,0.04)',
                color: filter === cat ? '#fff' : '#64748b',
                border: filter === cat ? 'none' : '1px solid rgba(255,255,255,0.08)',
                boxShadow: filter === cat ? '0 4px 15px rgba(59,130,246,0.3)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div
          ref={gridRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '1rem' }}
          className="tech-grid"
        >
          {filtered.map((item, i) => (
            <TechItem key={item.name} item={item} index={i} revealed={gridRevealed} />
          ))}
        </div>

        {/* Legend row */}
        <div className={`reveal${headerRevealed ? ' show' : ''}`} style={{
          marginTop: '3rem', padding: '1.25rem 1.5rem',
          background: 'rgba(14,14,34,0.6)',
          border: '1px solid rgba(59,130,246,0.1)',
          borderRadius: 12, transitionDelay: '0.5s',
          display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <span style={{ color: '#4a5568', fontSize: '0.78rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ verticalAlign: 'middle', marginRight: 6 }}>
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            Hover over any technology for interaction
          </span>
          <div className="divider" style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ color: '#4a5568', fontSize: '0.78rem' }}>
            {techStack.length} technologies across {new Set(techStack.map(t => t.category)).size} categories
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .tech-grid { grid-template-columns: repeat(6, 1fr) !important; } }
        @media (max-width: 768px)  { .tech-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (max-width: 480px)  { .tech-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `}</style>
    </section>
  );
}
