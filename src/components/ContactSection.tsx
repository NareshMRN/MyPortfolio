import React, { useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Download, Send, Terminal, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';
import { SocialIcons } from './SocialIcons';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  // Keyboard navigation: Enter on Name moves to Email; Enter on Email moves to Message
  const handleNameKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      emailInputRef.current?.focus();
    }
  };

  const handleEmailKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      messageInputRef.current?.focus();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === 'sending') return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setTerminalLogs(['zsh: validation error: all parameters (name, email, message) are required']);
      return;
    }

    setStatus('sending');
    setTerminalLogs(['Establishing secure connection...']);

    const { name, email, message } = formData;
    const formspreeId = (import.meta.env.VITE_FORMSPREE_ID || 'mrpeyjyl').trim();

    try {
      await sleep(350);
      setTerminalLogs((prev) => [...prev, 'Encrypting message packet...']);

      await sleep(350);
      setTerminalLogs((prev) => [...prev, 'Dispatching to destination...']);

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `New Portfolio Message from ${name.trim()}`,
        }),
      });

      if (response.ok) {
        await sleep(300);
        setTerminalLogs((prev) => [...prev, 'Dispatching to destination... [DONE]']);

        await sleep(300);
        setTerminalLogs((prev) => [...prev, '✓ Message transmitted successfully']);

        await sleep(300);
        setTerminalLogs((prev) => [...prev, `✓ Notification delivered to ${PERSONAL_INFO.email}`]);

        await sleep(300);
        setTerminalLogs((prev) => [...prev, 'Process completed with status code 0 (SUCCESS)']);

        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMsg =
          errorData?.errors?.map((err: any) => err.message).join(', ') ||
          errorData?.error ||
          'Message dispatch failed';
        throw new Error(errorMsg);
      }
    } catch (err: any) {
      console.error('Form submission error:', err);
      await sleep(250);
      setTerminalLogs((prev) => [
        ...prev,
        'zsh: fatal: transmission interrupted',
        '✗ Error: Unable to deliver message right now',
        `Direct dispatch fallback: ${PERSONAL_INFO.email}`,
      ]);
      setStatus('error');
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t transition-colors duration-500"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="text-[11px] font-mono-code uppercase tracking-[0.35em]"
            style={{ color: 'var(--text-muted)' }}
          >
            06 / CONTACT
          </span>
        </motion.div>

        {/* Headline & Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4 items-start">
          {/* Left Column (6 cols): Headline, Text, CTAs, Social Icons */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95]"
                style={{ color: 'var(--text-primary)' }}
              >
                LET'S BUILD
                <br />
                <span style={{ color: 'var(--text-muted)' }}>SOMETHING BOLD.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-sm sm:text-base font-light mt-6 max-w-lg leading-relaxed font-body"
                style={{ color: 'var(--text-secondary)' }}
              >
                Whether you have an internship opportunity, a production AI challenge, or an ambitious vision to ship — reach out directly via terminal or ping my network.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: 'var(--accent-contrast)',
                    color: 'var(--accent-contrast-inv)',
                  }}
                >
                  <span>Say hello</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono-code uppercase tracking-wider border shadow-md transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: 'var(--border-strong)',
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-card)',
                  }}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
              </motion.div>
            </div>

            {/* Social Icons Row (Item 3 requirement) */}
            <div className="mt-14 pt-8 border-t max-w-lg" style={{ borderColor: 'var(--border-subtle)' }}>
              <span
                className="text-[10px] font-mono-code uppercase tracking-[0.25em] block mb-4"
                style={{ color: 'var(--text-muted)' }}
              >
                CONTACT ME ON
              </span>
              <SocialIcons size="md" />
            </div>
          </div>

          {/* Right Column (6 cols): Realistic Mac Terminal Window (Item 4 requirement) */}
          <div className="lg:col-span-6 sm:col-span-12 w-full ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl border overflow-hidden shadow-2xl transition-all duration-300"
              style={{
                backgroundColor: '#0c0e14',
                borderColor: 'rgba(255, 255, 255, 0.15)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
              }}
            >
              {/* macOS Title Bar with Red, Yellow, Green Traffic-Light Dots */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b select-none"
                style={{
                  backgroundColor: '#161922',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Traffic Light Buttons */}
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full cursor-pointer transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#ff5f56', border: '1px solid #e0443e' }}
                  />
                  <span
                    className="w-3 h-3 rounded-full cursor-pointer transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#ffbd2e', border: '1px solid #dea123' }}
                  />
                  <span
                    className="w-3 h-3 rounded-full cursor-pointer transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#27c93f', border: '1px solid #1aab29' }}
                  />
                </div>

                {/* Centered Title */}
                <div className="flex items-center gap-1.5 text-xs font-mono-code text-zinc-300 font-medium">
                  <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                  <span>naresh@portfolio: ~ (zsh)</span>
                </div>

                {/* Right spacer for centering */}
                <div className="w-12 text-right">
                  <span className="text-[10px] font-mono-code text-zinc-500">80×24</span>
                </div>
              </div>

              {/* Terminal Body (Always dark terminal with full terminal syntax coloring) */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5 font-mono-code text-xs" action="https://formspree.io/f/mrpeyjyl"
                method="POST">
                {/* Initial command line */}
                <div className="flex flex-wrap items-center gap-1.5 pb-3 border-b border-white/10">
                  <span className="text-emerald-400 font-bold">naresh@portfolio</span>
                  <span className="text-zinc-500">:</span>
                  <span className="text-cyan-400 font-bold">~</span>
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-white font-semibold">send_message</span>
                  <span className="text-cyan-300">--to</span>
                  <span className="text-yellow-300 font-semibold">naresh</span>
                </div>

                {/* Field 1: Name */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">$</span>
                    <label htmlFor="mac-name" className="text-cyan-300 font-semibold">
                      name:
                    </label>
                    <span className="text-zinc-500 text-[11px]">(press Enter to advance)</span>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      id="mac-name"
                      name="name"
                      type="text"
                      required
                      disabled={status === 'sending'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onKeyDown={handleNameKeyDown}
                      placeholder="Your Name"
                      className="w-full bg-[#11131b] border border-white/15 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono-code disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Field 2: Email */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">$</span>
                    <label htmlFor="mac-email" className="text-cyan-300 font-semibold">
                      email:
                    </label>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      ref={emailInputRef}
                      id="mac-email"
                      name="email"
                      type="email"
                      required
                      disabled={status === 'sending'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onKeyDown={handleEmailKeyDown}
                      placeholder="e.g. yourname@gmail.com"
                      className="w-full bg-[#11131b] border border-white/15 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono-code disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Field 3: Message */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">$</span>
                    <label htmlFor="mac-message" className="text-cyan-300 font-semibold">
                      message:
                    </label>
                  </div>
                  <div className="relative flex items-start">
                    <textarea
                      ref={messageInputRef}
                      id="mac-message"
                      name="message"
                      rows={3}
                      required
                      disabled={status === 'sending'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter details of your project, opportunity or message..."
                      className="w-full bg-[#11131b] border border-white/15 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono-code resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Submit Command Button: "$ send --execute" */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg border font-bold uppercase tracking-wider transition-all shadow-lg ${status === 'sending'
                      ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-400/70 cursor-not-allowed opacity-80 pointer-events-none'
                      : 'border-emerald-500/40 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/40 hover:border-emerald-400 active:scale-[0.99] cursor-pointer'
                      }`}
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                        <span>$ executing transmission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>$ send --execute</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Terminal Live Output Logs */}
                {terminalLogs.length > 0 && (
                  <div
                    className="p-3.5 rounded-lg border text-[11px] leading-relaxed space-y-1.5 font-mono-code bg-[#08090d] transition-all duration-300"
                    style={{
                      borderColor:
                        status === 'success'
                          ? 'rgba(39, 201, 63, 0.4)'
                          : status === 'error'
                            ? 'rgba(255, 95, 86, 0.4)'
                            : 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {terminalLogs.map((log, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className={`flex items-center gap-2 ${log.startsWith('✓')
                          ? 'text-emerald-400 font-bold'
                          : log.startsWith('✗') || log.startsWith('zsh:')
                            ? 'text-red-400 font-bold'
                            : 'text-zinc-400'
                          }`}
                      >
                        <span className="text-zinc-600 select-none">{'>'}</span>
                        <span>{log}</span>
                      </motion.div>
                    ))}
                    {status === 'sending' && (
                      <div className="flex items-center gap-2 text-cyan-400 pt-0.5">
                        <span className="text-zinc-600 select-none">{'>'}</span>
                        <span className="inline-block w-2 h-3.5 bg-cyan-400 animate-pulse" />
                      </div>
                    )}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
