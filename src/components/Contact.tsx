import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Mail, Send } from 'lucide-react';
import ParticleButton, { type ParticleButtonStatus } from '@/components/kokonutui/particle-button';
import { profile } from '@/data/content';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<ParticleButtonStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || status === 'pending') return;

    setStatus('pending');

    try {
      const response = await fetch(profile.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Name: name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        window.setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        window.setTimeout(() => setStatus('idle'), 3200);
      }
    } catch {
      setStatus('error');
      window.setTimeout(() => setStatus('idle'), 3200);
    }
  };

  return (
    <section id="contact" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Info */}
          <div>
            <div className="font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              07 / Connect
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let’s Talk
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Whether it’s system architecture, full-stack engineering, or design collaboration, I’m
              always happy to chat.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-4" />
                </div>
                <div>
                  <div className="font-mono text-[11px] text-muted-foreground uppercase">
                    Direct Email
                  </div>
                  <div className="text-sm font-semibold text-foreground">{profile.email}</div>
                </div>
              </a>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  { label: 'LinkedIn', href: profile.socials.linkedin },
                  { label: 'GitHub', href: profile.socials.github },
                  { label: 'LeetCode', href: profile.socials.leetcode },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3.5 py-2 font-mono text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {link.label}
                    <ExternalLink className="size-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-mono text-xs font-medium text-muted-foreground uppercase"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-mono text-xs font-medium text-muted-foreground uppercase"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block font-mono text-xs font-medium text-muted-foreground uppercase"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about what you’re building..."
                className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-1">
              <ParticleButton
                type="submit"
                status={status}
                icon={<Send className="size-4" />}
                pendingLabel="Sending..."
                successLabel="Message Sent"
                errorLabel="Failed — Retry"
                className="h-11 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </ParticleButton>

              {status === 'success' && (
                <span className="font-mono text-xs text-emerald-500">
                  Thanks! I’ll reply soon.
                </span>
              )}
              {status === 'error' && (
                <span className="font-mono text-xs text-destructive">
                  Could not send. Try email directly.
                </span>
              )}
            </div>
          </motion.form>
        </div>

        {/* Footer */}
        <footer className="mt-24 flex items-center justify-between border-t border-border pt-8 text-xs text-muted-foreground">
          <div className="font-mono">
            © {new Date().getFullYear()} {profile.name}
          </div>
        </footer>
      </div>
    </section>
  );
}
