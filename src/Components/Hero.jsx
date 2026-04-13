import React, { useState, useEffect } from 'react';
import ParticleCanvas from './ParticleCanvas';
import Resume from './Mark_Okoth.pdf';

const CODE_LINES = [
  { tokens: [{ t: 'comment', v: '// Business Central AL Extension' }] },
  { tokens: [{ t: 'keyword', v: 'codeunit' }, { t: 'var', v: ' 50100 ' }, { t: 'string', v: '"Sales Integration"' }] },
  { tokens: [{ t: 'var', v: '{' }] },
  { tokens: [{ t: 'keyword', v: '    procedure ' }, { t: 'fn', v: 'ProcessOrder' }, { t: 'var', v: '(var SalesHdr: Record ' }, { t: 'string', v: '"Sales Header"' }, { t: 'var', v: ')' }] },
  { tokens: [{ t: 'keyword', v: '    var' }] },
  { tokens: [{ t: 'var', v: '        BCHelper: Codeunit ' }, { t: 'string', v: '"BC Integration"' }, { t: 'var', v: ';' }] },
  { tokens: [{ t: 'keyword', v: '    begin' }] },
  { tokens: [{ t: 'var', v: '        BCHelper.' }, { t: 'fn', v: 'ValidateAndPost' }, { t: 'var', v: '(SalesHdr);' }] },
  { tokens: [{ t: 'var', v: '        BCHelper.' }, { t: 'fn', v: 'SyncExternal' }, { t: 'var', v: '(SalesHdr.' }, { t: 'string', v: '"No."' }, { t: 'var', v: ');' }] },
  { tokens: [{ t: 'keyword', v: '    end' }, { t: 'var', v: ';' }] },
  { tokens: [{ t: 'var', v: '}' }] },
];

const TOKEN_COLORS = {
  keyword: '#c678dd',
  fn:      '#61afef',
  string:  '#98c379',
  type:    '#e5c07b',
  comment: '#5c6370',
  var:     '#abb2bf',
};

const TITLES = [
  'Business Central Technical Consultant',
  'AL Extension Developer',
  'NAV → BC Upgrade Specialist',
  'ERP Integration Architect',
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [titleIdx, setTitleIdx]         = useState(0);
  const [displayTitle, setDisplayTitle] = useState('');
  const [typing, setTyping]             = useState(true);

  // Reveal code lines one by one
  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const t = setTimeout(() => setVisibleLines(v => v + 1), 160);
    return () => clearTimeout(t);
  }, [visibleLines]);

  // Typewriter title effect
  useEffect(() => {
    const full = TITLES[titleIdx];
    if (typing) {
      if (displayTitle.length < full.length) {
        const t = setTimeout(() => setDisplayTitle(full.slice(0, displayTitle.length + 1)), 50);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2500);
        return () => clearTimeout(t);
      }
    } else {
      if (displayTitle.length > 0) {
        const t = setTimeout(() => setDisplayTitle(d => d.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setTitleIdx(i => (i + 1) % TITLES.length);
        setTyping(true);
      }
    }
  }, [displayTitle, typing, titleIdx]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
      }}
    >
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />

      {/* Glow orbs */}
      <div className="orb" style={{ width: 600, height: 600, top: '-15%', left: '-10%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', zIndex: 1 }} />
      <div className="orb" style={{ width: 500, height: 500, bottom: '-10%', right: '-5%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', zIndex: 1 }} />
      <div className="orb" style={{ width: 350, height: 350, top: '30%', right: '20%', background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)', zIndex: 1 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '6rem 1.5rem 4rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">

          {/* Left — text */}
          <div>
            <div className="section-label" style={{ marginBottom: '1.5rem', animationDelay: '0.1s' }}>
              Available for projects
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981', marginLeft: 6 }} />
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: '800',
                lineHeight: 1.1,
                margin: '0 0 0.5rem',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              <span style={{ color: '#f1f5f9' }}>Mark </span>
              <span className="gradient-text">Okoth</span>
            </h1>

            <div
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                fontWeight: '600',
                color: '#94a3b8',
                minHeight: '2em',
                marginBottom: '1.25rem',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              <span style={{ color: '#60a5fa' }}>{displayTitle}</span>
              <span className="cursor-blink" />
            </div>

            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '520px', margin: '0 0 2.5rem' }}>
              Building scalable, high-performance Business Central solutions and seamless system integrations for enterprises worldwide.
            </p>

            {/* CTA row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '3rem' }}>
              <button
                onClick={() => scrollTo('experience')}
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                View Experience
              </button>
              <a href={Resume} target="_blank" rel="noreferrer" className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Resume
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-outline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Contact Me
              </button>
            </div>

            {/* Quick stats */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                { n: '7+', label: 'Years Experience' },
                { n: '40+', label: 'Projects Delivered' },
                { n: '20+', label: 'Clients Served' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', fontFamily: 'Space Grotesk, sans-serif' }} className="gradient-text">{s.n}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — code card */}
          <div className="float-anim" style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                background: 'rgba(6,6,15,0.92)',
                border: '1px solid rgba(59,130,246,0.25)',
                borderRadius: '16px',
                padding: '1.5rem',
                width: '100%',
                maxWidth: '460px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(59,130,246,0.06)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }} />
                <span style={{ marginLeft: 8, fontSize: '0.72rem', color: '#4a5568', fontFamily: 'JetBrains Mono, monospace' }}>SalesIntegration.al</span>
              </div>

              {/* Code lines */}
              <div style={{ fontFamily: 'JetBrains Mono, Fira Code, monospace', fontSize: '0.8rem', lineHeight: 1.8 }}>
                {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                  <div key={i} style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <span style={{ color: '#3d4a5c', userSelect: 'none', marginRight: '1rem', minWidth: '1.5rem', textAlign: 'right', fontSize: '0.72rem' }}>
                      {i + 1}
                    </span>
                    {line.tokens.map((tok, j) => (
                      <span key={j} style={{ color: TOKEN_COLORS[tok.t] || '#abb2bf' }}>{tok.v}</span>
                    ))}
                  </div>
                ))}
                {visibleLines < CODE_LINES.length && (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#3d4a5c', marginRight: '1rem', minWidth: '1.5rem', textAlign: 'right', fontSize: '0.72rem' }}>{visibleLines + 1}</span>
                    <span className="cursor-blink" />
                  </div>
                )}
              </div>

              {/* Glow */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          cursor: 'pointer',
        }}
        onClick={() => scrollTo('about')}
      >
        <span style={{ fontSize: '0.7rem', color: '#4a5568', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: 24, height: 38, border: '2px solid rgba(59,130,246,0.3)', borderRadius: 12,
          display: 'flex', justifyContent: 'center', paddingTop: 6,
        }}>
          <div style={{
            width: 3, height: 8, borderRadius: 2,
            background: 'var(--neon-blue)',
            animation: 'floatY 1.5s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-grid > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
