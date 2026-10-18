import React, { useState } from 'react';
import { X, Copy, Check, Terminal, ExternalLink, Globe, Sparkles, BookOpen, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface GitHubUploadGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubUploadGuideModal: React.FC<GitHubUploadGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'cli' | 'readme' | 'hosting'>('cli');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitSteps = [
    {
      title: "1. Open your terminal in project root folder",
      description: "Make sure you are inside this project directory.",
      command: "cd path/to/dev-karan-portfolio"
    },
    {
      title: "2. Initialize Git repository",
      description: "Sets up local version control for your portfolio files.",
      command: "git init"
    },
    {
      title: "3. Stage all portfolio files",
      description: "Includes all components, assets, resume data, and Tailwind configuration.",
      command: "git add ."
    },
    {
      title: "4. Create initial commit",
      description: "Records snapshot of your production-ready portfolio.",
      command: 'git commit -m "feat: initial commit for Dev Karan Python & AI portfolio"'
    },
    {
      title: "5. Set default branch to main",
      description: "Ensures standard GitHub main branch naming.",
      command: "git branch -M main"
    },
    {
      title: "6. Connect to your GitHub repository",
      description: `Create a new repo named 'portfolio' at https://github.com/new, then run:`,
      command: `git remote add origin https://github.com/${PERSONAL_INFO.githubUsername}/portfolio.git`
    },
    {
      title: "7. Push your code to GitHub!",
      description: "Uploads all your files and commits to GitHub.",
      command: "git push -u origin main"
    }
  ];

  const allInOneScript = `# Dev Karan Portfolio - Quick Upload Commands
git init
git add .
git commit -m "feat: initial commit for Dev Karan Python & AI portfolio"
git branch -M main
git remote add origin https://github.com/${PERSONAL_INFO.githubUsername}/portfolio.git
git push -u origin main`;

  const readmeContent = `# Dev Karan — Python Developer & AI Enthusiast 🚀

> **Portfolio Website:** Built with React 19, TypeScript, Tailwind CSS, and Motion. Showcasing Full-Stack RAG, Mobile Proximity Radar, Voice Automation, and Django systems.

[![GitHub](https://img.shields.io/badge/GitHub-devkarankumar-181717?style=flat&logo=github)](https://github.com/${PERSONAL_INFO.githubUsername})
[![LinkedIn](https://img.shields.io/badge/LinkedIn-dev--karan-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/${PERSONAL_INFO.linkedinHandle})
[![Email](https://img.shields.io/badge/Email-thedevkaran%40gmail.com-D14836?style=flat&logo=gmail)](mailto:${PERSONAL_INFO.email})

---

## 🌟 Key Featured Projects

1. **Multimodal RAG Chatbot (Google Gemini API, React, TypeScript)**
   - Hybrid dense vector cosine retrieval + sparse BM25 scoring with reciprocal rank fusion.
   - Configurable chunking, multimodal ingestion, real-time citation streaming.
   - Repo: [github.com/${PERSONAL_INFO.githubUsername}/rag-chatbot](https://github.com/${PERSONAL_INFO.githubUsername}/rag-chatbot)

2. **ShopNear (React Native, Expo, Firebase Firestore)**
   - Hyper-local deals radar (200m–3km radius) for real-time merchant flash offers.
   - Repo: [github.com/${PERSONAL_INFO.githubUsername}/ShopNearV2](https://github.com/${PERSONAL_INFO.githubUsername}/ShopNearV2)

3. **Python Voice Assistant (SpeechRecognition, pyttsx3)**
   - Hands-free desktop workflow automation with speech-to-text and voice synthesis.
   - Repo: [github.com/${PERSONAL_INFO.githubUsername}/voice-assistant](https://github.com/${PERSONAL_INFO.githubUsername}/voice-assistant)

4. **WeatherNow (Django, OpenWeatherMap REST API)**
   - Live meteorological forecasting dashboard built on Django.

---

## 🛠️ Tech Stack & Skills

- **AI & GenAI:** Prompt Engineering, LLMs, RAG, AI Agents, Gemini API, Vector Search
- **Languages:** Python, JavaScript (ES6+), C/C++, SQL
- **Web & Mobile:** React, React Native, Expo, Django, Express, HTML5, Tailwind CSS
- **Databases & Tools:** Firebase, DBMS, Git/GitHub, VS Code, Android Studio

---

## 🚀 Running Locally

\`\`\`bash
# 1. Clone repository
git clone https://github.com/${PERSONAL_INFO.githubUsername}/portfolio.git

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
\`\`\`

---

## 📬 Contact
- **Email:** ${PERSONAL_INFO.email}
- **Phone:** ${PERSONAL_INFO.phone}
- **Location:** ${PERSONAL_INFO.location}
`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>GitHub Upload & Deployment Guide</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
              Portfolio ko GitHub pe upload karne ka tarika
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="px-6 pt-4 border-b border-slate-800 flex items-center gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('cli')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'cli'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Git Commands (Step-by-Step)</span>
          </button>

          <button
            onClick={() => setActiveTab('readme')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'readme'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ready-made README.md</span>
          </button>

          <button
            onClick={() => setActiveTab('hosting')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'hosting'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Free Live Hosting (Vercel / Pages)</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {activeTab === 'cli' && (
            <div className="space-y-6">
              {/* One-click copy all */}
              <div className="p-4 bg-slate-950 border border-cyan-800/60 rounded-xl flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold text-cyan-300">
                    Ek saath saari commands copy karein (All-in-One):
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Terminal mein paste karte hi aapka portfolio aapke GitHub account par push ho jayega.
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(allInOneScript, 'all')}
                  className="px-3.5 py-2 text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {copiedIndex === 'all' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy All Script</span>
                    </>
                  )}
                </button>
              </div>

              {/* Step by step */}
              <div className="space-y-4">
                {gitSteps.map((step, idx) => (
                  <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-xs font-bold text-white">
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-slate-400">
                          {step.description}
                        </p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(step.command, `step-${idx}`)}
                        className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                        title="Copy command"
                      >
                        {copiedIndex === `step-${idx}` ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="font-mono text-xs bg-slate-900 p-2.5 rounded-lg text-cyan-300 border border-slate-800 overflow-x-auto">
                      {step.command}
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Tip / Troubleshooting */}
              <div className="p-4 bg-amber-950/20 border border-amber-900/40 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-200/90 leading-relaxed">
                  <strong>Important:</strong> Step 6 se pehle aapko GitHub par ek naya repository create karna hoga (repo name: <code>portfolio</code>). Agar GitHub password maange, toh password ki jagah apna <strong>GitHub Personal Access Token (classic)</strong> use karein ya <code>gh auth login</code> run karein.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'readme' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">
                  Yeh <code>README.md</code> file aapke GitHub repository ke main page par dikhegi:
                </p>
                <button
                  onClick={() => copyToClipboard(readmeContent, 'readme')}
                  className="px-3.5 py-1.5 text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copiedIndex === 'readme' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied README.md!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy README.md Content</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed max-h-96">
                {readmeContent}
              </pre>
            </div>
          )}

          {activeTab === 'hosting' && (
            <div className="space-y-4 text-xs text-slate-300">
              <p className="leading-relaxed">
                GitHub par code upload karne ke baad, aap is portfolio ko internet par bilkul free mein live kar sakte hain (custom link ya <code>devkaran.vercel.app</code>):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Method 1: Vercel (Recommended)</span>
                    <span className="text-[11px] font-semibold text-emerald-400">1-Minute Setup</span>
                  </div>
                  <ol className="space-y-2 list-decimal list-inside text-slate-400 leading-relaxed">
                    <li><a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline">Vercel.com</a> par jaakar GitHub se Sign In karein.</li>
                    <li>"Add New Project" par click karein aur apna <code>portfolio</code> repo select karein.</li>
                    <li>Framework: <strong>Vite</strong> automatically select ho jayega.</li>
                    <li>"Deploy" button dabayein. Bas 30 seconds mein portfolio live link mil jayega!</li>
                  </ol>
                </div>

                <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Method 2: GitHub Pages</span>
                    <span className="text-[11px] font-semibold text-cyan-400">Built-in GitHub</span>
                  </div>
                  <ol className="space-y-2 list-decimal list-inside text-slate-400 leading-relaxed">
                    <li>Repo settings mein jakar <strong>Pages</strong> tab kholein.</li>
                    <li>Source mein <strong>GitHub Actions</strong> select karein.</li>
                    <li>Vite deployment template choose karein aur commit karein.</li>
                    <li>Aapka site <code>devkarankumar.github.io/portfolio</code> par live ho jayega!</li>
                  </ol>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
