import React, { useState } from 'react';
import { X, Printer, Copy, Check, ExternalLink, Download } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, EDUCATIONS, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `DEV KARAN
Python Developer | AI & Generative AI Enthusiast
Noida, India | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

WORK EXPERIENCE
Technical Mentor & Co-Founder — Path Creation Academy, Noida (June 2023 – 2026)
- Co-founded and led the academy's technical training vertical, teaching Python, SQL, DBMS and AI to Class 9–12 students (CBSE curriculum) while also serving as a CBSE Board examiner.
- Designed the curriculum and lesson plans, conducted practicals, and prepared students for board examinations, driving consistent improvement in student outcomes.

Android Developer — Rebliss, Noida (May 2022 – Aug 2022)
- Developed Android features and integrated REST APIs for seamless data communication and dynamic content display.
- Fixed bugs, optimized performance, and performed testing/debugging using Android Studio and Logcat across the full SDLC.
- Collaborated with senior developers to translate UI/UX designs into functional Android screens, improving app responsiveness and user experience.
- Contributed to code reviews and version control (Git) workflows, ensuring clean, maintainable code across the project.

PROJECTS
Multimodal RAG Chatbot — React, TypeScript, Node.js (github.com/devkarankumar/rag-chatbot)
- Full-stack RAG chatbot with hybrid search (cosine similarity + BM25), configurable chunking, multimodal (text + image) ingestion, and streaming responses with inline citations, built using Google Gemini API.

ShopNear — React Native App (github.com/devkarankumar/ShopNearV2)
- Location-based app for customers to find nearby shops with live offers (200m–3km radius); owners manage listings in real time. Tech: React Native, Expo, Firebase.

Voice Assistant — Python (github.com/devkarankumar/voice-assistant)
- Python-based voice assistant using speech recognition and text-to-speech for hands-free command execution.

WeatherNow — Django Web App
- Real-time weather app using Django and the OpenWeatherMap API.

EDUCATION
MCA — HR Institute of Science & Technology, Ghaziabad (2024)
BCA — HR Institute of Science & Technology, Ghaziabad (2022)
Class 12 (CBSE) — Vishal International School, Ghaziabad (2019)

CERTIFICATIONS
- Generative AI Program — Be10x (2026)
- Python Full Stack with AI — Ducat Institute (2025–26)
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-6 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="no-print bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
            <span>Dev Karan — Official Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content (Standard Clean Professional Resume Format) */}
        <div className="p-8 sm:p-12 font-sans text-slate-900 max-h-[82vh] overflow-y-auto text-left leading-relaxed text-sm bg-white">
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-300">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              DEV KARAN
            </h1>
            <p className="text-base font-semibold text-slate-700 mt-1">
              Python Developer | AI & Generative AI Enthusiast
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-2">
              <span>Noida, India</span>
              <span>|</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-800 underline">
                {PERSONAL_INFO.email}
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-800 underline">
                linkedin.com/in/{PERSONAL_INFO.linkedinHandle}
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-800 underline">
                github.com/{PERSONAL_INFO.githubUsername}
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="py-4 border-b border-slate-200">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 mb-1.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div className="py-4 border-b border-slate-200 text-xs">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-slate-800">
              <p>
                <strong>Programming Languages:</strong> Python, C, C++, JavaScript (ES6+)
              </p>
              <p>
                <strong>AI & Generative AI:</strong> Prompt Engineering, LLMs, RAG, AI Agents, AI Tools Mastery, ML & AI Algorithms, Statistics & Maths for AI
              </p>
              <p>
                <strong>Python & Data:</strong> Core Python, OOP, File I/O, Error Handling, NumPy, Pandas, Requests, JSON
              </p>
              <p>
                <strong>Web & Mobile Development:</strong> HTML5, CSS3, JavaScript, React.js, React Native, Django, REST API, Axios/Fetch
              </p>
              <p>
                <strong>Databases & Tools:</strong> SQL, DBMS, Git & GitHub, VS Code, Chrome DevTools, Firebase
              </p>
            </div>
          </div>

          {/* Section: Work Experience */}
          <div className="py-4 border-b border-slate-200 text-xs">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 mb-3">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>Technical Mentor & Co-Founder — Path Creation Academy, Noida</span>
                  <span className="font-normal text-slate-600">June 2023 – 2026</span>
                </div>
                <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-700">
                  <li>Co-founded and led the academy's technical training vertical, teaching Python, SQL, DBMS and AI to Class 9–12 students (CBSE curriculum) while also serving as a CBSE Board examiner.</li>
                  <li>Designed the curriculum and lesson plans, conducted practicals, and prepared students for board examinations, driving consistent improvement in student outcomes.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>Android Developer — Rebliss, Noida</span>
                  <span className="font-normal text-slate-600">May 2022 – Aug 2022</span>
                </div>
                <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-700">
                  <li>Developed Android features and integrated REST APIs for seamless data communication and dynamic content display.</li>
                  <li>Fixed bugs, optimized performance, and performed testing/debugging using Android Studio and Logcat across the full SDLC.</li>
                  <li>Collaborated with senior developers to translate UI/UX designs into functional Android screens, improving app responsiveness and user experience.</li>
                  <li>Contributed to code reviews and version control (Git) workflows, ensuring clean, maintainable code across the project.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="py-4 border-b border-slate-200 text-xs">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 mb-3">
              PROJECTS
            </h2>
            <div className="space-y-3.5">
              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>Multimodal RAG Chatbot — React, TypeScript, Node.js</span>
                  <span className="font-normal text-slate-600">github.com/{PERSONAL_INFO.githubUsername}/rag-chatbot</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-700">
                  <li>Full-stack RAG chatbot with hybrid search (cosine similarity + BM25), configurable chunking, multimodal (text + image) ingestion, and streaming responses with inline citations, built using the Google Gemini API. Tech: React, TypeScript, Express, Vite.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>ShopNear — React Native App</span>
                  <span className="font-normal text-slate-600">github.com/{PERSONAL_INFO.githubUsername}/ShopNearV2</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-700">
                  <li>Location-based app for customers to find nearby shops with live offers (200m–3km radius); owners manage listings in real time. Tech: React Native, Expo, Firebase.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>Voice Assistant — Python</span>
                  <span className="font-normal text-slate-600">github.com/{PERSONAL_INFO.githubUsername}/voice-assistant</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-700">
                  <li>Python-based voice assistant using speech recognition and text-to-speech for hands-free command execution (open apps, web search, real-time info).</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>WeatherNow — Django Web App</span>
                  <span className="font-normal text-slate-600">Python, Django, OpenWeatherMap</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-700">
                  <li>Real-time weather app using Django and the OpenWeatherMap API. Tech: Python, Django, REST API, HTML/CSS.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div className="py-4 border-b border-slate-200 text-xs">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 mb-2">
              EDUCATION
            </h2>
            <div className="space-y-1.5 text-slate-800">
              <div className="flex items-center justify-between">
                <span><strong>MCA</strong> — HR Institute of Science & Technology, Ghaziabad</span>
                <span className="text-slate-600">2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span><strong>BCA</strong> — HR Institute of Science & Technology, Ghaziabad</span>
                <span className="text-slate-600">2022</span>
              </div>
              <div className="flex items-center justify-between">
                <span><strong>Class 12 (CBSE)</strong> — Vishal International School, Ghaziabad</span>
                <span className="text-slate-600">2019</span>
              </div>
            </div>
          </div>

          {/* Section: Certifications */}
          <div className="pt-4 text-xs">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 mb-2">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li><strong>Generative AI Program — Be10x (2026):</strong> AI Foundation & AI Tools Mastery, Prompt Engineering, LLM/RAG/GenAI & AI Agents, Python for AI, Statistics & Maths for AI, ML & AI Algorithms.</li>
              <li><strong>Python Full Stack with AI — Ducat Institute (2025–26)</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
