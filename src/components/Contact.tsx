import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/mjvnowae', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: name,
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ padding: '10rem 0 6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-grid">
          
          {/* Sticky Left Column */}
          <div className="sticky-header">
            <div className="section-subtitle">Connect</div>
            <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's Talk</h2>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '2.5rem' }}>
              I am actively seeking full-stack software development opportunities and am always open to discussing new technical projects, architectures, and system designs. Let's connect!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div
                  style={{
                    width: '2rem',
                    height: '2rem',
                    backgroundColor: 'var(--accent-glow)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mail size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>EMAIL</div>
                  <a
                    href="mailto:vishalkanwar10@gmail.com"
                    className="hoverable"
                    style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}
                  >
                    vishalkanwar10@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="http://www.linkedin.com/in/vishal-kanwar/"
                target="_blank"
                rel="noreferrer"
                className="hoverable social-icon-btn"
                aria-label="LinkedIn"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Kanvi1"
                target="_blank"
                rel="noreferrer"
                className="hoverable social-icon-btn"
                aria-label="GitHub"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Flowing Right Column (Form Container) */}
          <div className="glass-card" style={{ padding: '2.5rem', minHeight: '380px', position: 'relative' }}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: '330px',
                    textAlign: 'center',
                    gap: '1rem',
                  }}
                >
                  <CheckCircle2 size={56} style={{ color: 'var(--success)' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Thank You!</h3>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', lineHeight: 1.5 }}>
                    Your message has been delivered successfully. I will get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input hoverable"
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        transition: 'border-color var(--transition-fast)',
                      }}
                      placeholder="Your Name"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input hoverable"
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        transition: 'border-color var(--transition-fast)',
                      }}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-input hoverable"
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        transition: 'border-color var(--transition-fast)',
                        resize: 'none',
                      }}
                      placeholder="Your Message..."
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ color: 'var(--error)', fontSize: '0.85rem', fontWeight: 600 }}>
                      Oops! Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-primary hoverable"
                    style={{
                      width: '100%',
                      marginTop: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        Sending Message <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer Block */}
      <div
        className="container"
        style={{
          marginTop: '8rem',
          borderTop: '1px solid var(--border-color)',
          paddingTop: '2.5rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
          &copy; {new Date().getFullYear()} Vishal Kanwar. Crafted with <Sparkles size={14} style={{ color: 'var(--warning)' }} /> in React
        </p>
      </div>

      <style>{`
        .form-input:focus {
          border-color: var(--accent) !important;
          box-shadow: 0 0 0 2px var(--accent-glow) !important;
        }
        .social-icon-btn {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }
        .social-icon-btn:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--accent-glow);
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
}
