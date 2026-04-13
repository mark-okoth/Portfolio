import React, { useState, useEffect, useCallback } from 'react';
import Resume from './Mark_Okoth.pdf';

const NAV_LINKS = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Services',   href: '#services' },
  { label: 'Contact',    href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState('hero');

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    const sections = NAV_LINKS.map(l => l.href.slice(1));
    let current = sections[0];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 90) current = id;
    }
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(6,6,15,0.88)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(59,130,246,0.1)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: 36, height: 36,
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.88rem', fontWeight: 800, color: '#fff', fontFamily: 'Space Grotesk, sans-serif',
            }}>MO</div>
            <div>
              <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.1 }}>Mark Okoth</div>
              <div style={{ color: '#64748b', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>BC Technical Consultant</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '26px' }} className="nav-desktop">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                className={`nav-link${active === href.slice(1) ? ' active' : ''}`}>
                {label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href={Resume} target="_blank" rel="noreferrer"
              className="btn-primary nav-desktop"
              style={{ padding: '0.5rem 1.1rem', fontSize: '0.82rem' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>

            <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile-btn"
              style={{ background: 'none', border: 'none', color: '#f1f5f9', cursor: 'pointer', padding: 6, display: 'none' }}
              aria-label="Toggle menu">
              {menuOpen
                ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ paddingBottom: '1.25rem', borderTop: '1px solid rgba(59,130,246,0.1)', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                style={{
                  display: 'block', padding: '0.55rem 0.5rem',
                  color: active === href.slice(1) ? '#60a5fa' : '#94a3b8',
                  textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                  borderRadius: 6, transition: 'color 0.2s',
                }}>
                {label}
              </a>
            ))}
            <a href={Resume} target="_blank" rel="noreferrer"
              className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
              Download Resume
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) { .nav-mobile-btn { display: none !important; } }
        @media (max-width: 767px) { .nav-desktop { display: none !important; } .nav-mobile-btn { display: block !important; } }
      `}</style>
    </header>
  );
}
