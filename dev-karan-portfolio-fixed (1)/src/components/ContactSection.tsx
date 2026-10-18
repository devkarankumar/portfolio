import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isCopied, setIsCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from Portfolio: ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Dev,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    )}`;
    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                <span>Let's Connect</span>
                <span aria-hidden="true">·</span>
                <span>Hire / Collaborate</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Get In Touch
              </h2>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Currently open to software engineering opportunities in Python development, Generative AI / RAG systems, and full-stack web/mobile roles.
              </p>
            </div>

            {/* Direct contact channels */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Direct Email</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center gap-3">
                <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-cyan-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Phone / WhatsApp</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center gap-3">
                <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Location</span>
                  <span className="text-sm font-semibold text-white">
                    {PERSONAL_INFO.location} (Open to Remote / Onsite)
                  </span>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Right contact form column */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1">
              <MessageSquare className="w-4 h-4" />
              <span>Send Message</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight mb-6">
              Write a Note
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / Tech Recruiter"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subject / Position
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Python Developer Role / GenAI Project Inquiry"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role, technical challenge, or project timeline..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-950/40"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSent ? 'Opening Email Client...' : 'Send Message to Dev Karan'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
