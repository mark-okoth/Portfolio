import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import Resume from './Mark_Okoth.pdf';

const CONTACT_INFO = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'markokoth96@gmail.com',
    href: 'mailto:markokoth96@gmail.com',
    color: '#3b82f6',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+254 791 236 814',
    href: 'tel:+254791236814',
    color: '#10b981',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'mark-okoth-1b514115b',
    href: 'https://www.linkedin.com/in/mark-okoth-1b514115b/',
    color: '#8b5cf6',
  },
];

const EMPTY = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm]       = useState(EMPTY);
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState('idle'); // idle | sending | sent | error
  const [headerRef, headerRevealed] = useReveal(0.1);
  const [formRef, formRevealed]     = useReveal(0.1);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');

    // Mailto fallback (no backend required)
    const mailto = `mailto:markokoth96@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`;
    window.open(mailto, '_blank');

    setTimeout(() => {
      setStatus('sent');
      setForm(EMPTY);
      setTimeout(() => setStatus('idle'), 4000);
    }, 600);
  };

  const Field = ({ id, label, type = 'text', rows }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ color: '#94a3b8', fontSize: '0.82rem', fontWeight: 500 }}>{label}</label>
      {rows ? (
        <textarea
          id={id} rows={rows} value={form[id]}
          onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
          style={{
            background: 'rgba(14,14,34,0.8)',
            border: `1px solid ${errors[id] ? '#ef4444' : 'rgba(59,130,246,0.15)'}`,
            borderRadius: 10, padding: '0.75rem 1rem', color: '#f1f5f9',
            fontSize: '0.88rem', fontFamily: 'Inter, sans-serif',
            resize: 'vertical', outline: 'none', transition: 'border-color 0.2s',
            lineHeight: 1.6,
          }}
          onFocus={e => { e.target.style.borderColor = 'rgba(59,130,246,0.5)'; }}
          onBlur={e => { e.target.style.borderColor = errors[id] ? '#ef4444' : 'rgba(59,130,246,0.15)'; }}
          placeholder={`Your ${label.toLowerCase()}...`}
        />
      ) : (
        <input
          type={type} id={id} value={form[id]}
          onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
          style={{
            background: 'rgba(14,14,34,0.8)',
            border: `1px solid ${errors[id] ? '#ef4444' : 'rgba(59,130,246,0.15)'}`,
            borderRadius: 10, padding: '0.75rem 1rem', color: '#f1f5f9',
            fontSize: '0.88rem', fontFamily: 'Inter, sans-serif',
            outline: 'none', transition: 'border-color 0.2s',
          }}
          onFocus={e => { e.target.style.borderColor = 'rgba(59,130,246,0.5)'; }}
          onBlur={e => { e.target.style.borderColor = errors[id] ? '#ef4444' : 'rgba(59,130,246,0.15)'; }}
          placeholder={`Your ${label.toLowerCase()}...`}
        />
      )}
      {errors[id] && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors[id]}</span>}
    </div>
  );

  return (
    <section id="contact" style={{ padding: '7rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div className="orb" style={{ width: 500, height: 500, bottom: '-100px', left: '-100px', background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>

        <div ref={headerRef} className={`reveal${headerRevealed ? ' show' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: '#f1f5f9', margin: '0 0 1rem' }}>
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Have a Business Central project in mind? I'd love to hear about it.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">

          {/* Left — info */}
          <div className={`reveal-left${headerRevealed ? ' show' : ''}`}>
            {/* Availability badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)',
              borderRadius: 8, padding: '10px 16px', marginBottom: '2rem',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              <span style={{ color: '#10b981', fontSize: '0.82rem', fontWeight: 600 }}>Available for new projects</span>
            </div>

            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
              Whether you need a Business Central upgrade, a new AL extension, an API integration, or ongoing technical support — I'm here to help deliver results.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {CONTACT_INFO.map(info => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '1rem 1.25rem',
                    background: 'rgba(14,14,34,0.8)',
                    border: '1px solid rgba(59,130,246,0.1)',
                    borderRadius: 12, textDecoration: 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = info.color + '40'; e.currentTarget.style.boxShadow = `0 4px 20px ${info.color}15`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${info.color}15`, border: `1px solid ${info.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: info.color, flexShrink: 0,
                  }}>{info.icon}</div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{info.label}</div>
                    <div style={{ color: '#f1f5f9', fontSize: '0.88rem', fontWeight: 500, marginTop: 2 }}>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <a href={Resume} target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'inline-flex', fontSize: '0.85rem' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>

          {/* Right — form */}
          <div ref={formRef} className={`reveal-right${formRevealed ? ' show' : ''}`}>
            <div style={{
              background: 'rgba(14,14,34,0.85)',
              border: '1px solid rgba(59,130,246,0.15)',
              borderRadius: 16, padding: '2rem',
            }}>
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Your email client has been opened. I'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                    <Field id="name"    label="Full Name" />
                    <Field id="email"   label="Email Address" type="email" />
                  </div>
                  <Field id="subject"  label="Subject" />
                  <Field id="message"  label="Message" rows={5} />

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary"
                    style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                  >
                    {status === 'sending' ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                        Opening email client...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
