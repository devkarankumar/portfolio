import avatar from '../assets/images/dev_karan_photo.jpg';
import placeholderImg from '../assets/images/dev_karan_avatar_1791812173988.jpg';
import ragImg from '../assets/images/rag_chatbot_preview_1791812189083.jpg';
import shopnearImg from '../assets/images/shopnear_app_preview_1791812201711.jpg';
import voiceImg from '../assets/images/voice_assistant_preview_1791812217562.jpg';

export const PERSONAL_INFO = {
  name: 'Dev Karan',
  title: 'Python Developer | AI & Generative AI Enthusiast',
  email: 'thedevkaran@gmail.com',
  phone: '+91 9315628567',
  location: 'Noida, Uttar Pradesh, India',
  github: 'https://github.com/devkarankumar',
  githubUsername: 'devkarankumar',
  linkedin: 'https://linkedin.com/in/dev-karan-77a969223',
  linkedinHandle: 'dev-karan-77a969223',
  avatar,
  summary:
    'Computer Science graduate (MCA) and Technical Mentor with 3+ years of experience training students in Python, SQL, DBMS and AI, combined with hands-on experience in full-stack web and mobile development. Skilled at breaking down complex technical concepts into clear, practical learning while also building production-ready applications. Recently completed specialized training in Generative AI, LLMs, RAG, AI Agents, and Prompt Engineering, and quick to pick up new technologies.',
};

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'genai' | 'mobile' | 'python' | 'fullstack';
  categoryLabel: string;
  demoType: 'rag' | 'shopnear' | 'voice' | 'weather';
  description: string;
  bulletPoints: string[];
  techStack: string[];
  image: string;
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'rag-chatbot',
    title: 'Multimodal RAG Chatbot',
    subtitle: 'Generative AI · Full-Stack',
    category: 'genai',
    categoryLabel: 'GenAI & LLMs',
    demoType: 'rag',
    description:
      'Full-stack RAG chatbot that answers questions over your own documents and images using the Google Gemini API.',
    bulletPoints: [
      'Hybrid search combining dense cosine embeddings with sparse BM25.',
      'Configurable chunking strategies and multimodal text + image ingestion.',
      'Real-time streaming responses with inline citations.',
    ],
    techStack: ['React', 'TypeScript', 'Express', 'Vite', 'Google Gemini API'],
    image: ragImg,
    githubUrl: 'https://github.com/devkarankumar/rag-chatbot',
  },
  {
    id: 'shopnear',
    title: 'ShopNear Mobile App',
    subtitle: 'React Native · Hyper-local discovery',
    category: 'mobile',
    categoryLabel: 'Mobile & Apps',
    demoType: 'shopnear',
    description:
      'Location-based app for customers to find nearby shops with live offers, while owners manage listings in real time.',
    bulletPoints: [
      'Adjustable 200m–3km radius radar for nearby shop discovery.',
      'Dual-portal merchant CMS for publishing live flash offers.',
      'Instant deal redemption backed by Firebase Firestore.',
    ],
    techStack: ['React Native', 'Expo', 'Firebase Firestore'],
    image: shopnearImg,
    githubUrl: 'https://github.com/devkarankumar/ShopNearV2',
  },
  {
    id: 'voice-assistant',
    title: 'Python Voice Assistant',
    subtitle: 'Python · Speech automation',
    category: 'python',
    categoryLabel: 'Python Core',
    demoType: 'voice',
    description:
      'Python-based voice assistant using speech recognition and text-to-speech for hands-free command execution.',
    bulletPoints: [
      'Command dispatcher to open apps, search the web and fetch real-time info.',
      'Speech recognition with background noise calibration.',
      'Spoken responses via speech synthesis.',
    ],
    techStack: ['Python 3', 'SpeechRecognition', 'pyttsx3', 'PyAudio'],
    image: voiceImg,
    githubUrl: 'https://github.com/devkarankumar/voice-assistant',
  },
  {
    id: 'weathernow',
    title: 'WeatherNow Web App',
    subtitle: 'Django · REST API',
    category: 'python',
    categoryLabel: 'Python Core',
    demoType: 'weather',
    description:
      'Real-time weather web app built with Django and the OpenWeatherMap API.',
    bulletPoints: [
      'Real-time atmospheric metrics for any searched city.',
      'Multi-city forecasts.',
      'Responsive HTML/CSS interface.',
    ],
    techStack: ['Python', 'Django', 'REST API', 'OpenWeatherMap', 'HTML/CSS'],
    image: placeholderImg,
    githubUrl: 'https://github.com/devkarankumar',
  },
];

export interface Skill {
  name: string;
  level: number;
  highlight?: boolean;
}
export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Generative AI',
    description: 'Building LLM-powered applications, retrieval pipelines and agents.',
    skills: [
      { name: 'Prompt Engineering', level: 90, highlight: true },
      { name: 'LLMs', level: 85, highlight: true },
      { name: 'RAG', level: 85, highlight: true },
      { name: 'AI Agents', level: 75 },
      { name: 'AI Tools Mastery', level: 80 },
      { name: 'ML & AI Algorithms', level: 70 },
      { name: 'Statistics & Maths for AI', level: 70 },
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Strong fundamentals across scripting and systems languages.',
    skills: [
      { name: 'Python', level: 92, highlight: true },
      { name: 'JavaScript (ES6+)', level: 82 },
      { name: 'C', level: 72 },
      { name: 'C++', level: 72 },
    ],
  },
  {
    title: 'Python & Data',
    description: 'Core Python, data handling and automation tooling.',
    skills: [
      { name: 'Core Python', level: 92, highlight: true },
      { name: 'OOP', level: 88 },
      { name: 'File I/O & Error Handling', level: 85 },
      { name: 'NumPy', level: 78 },
      { name: 'Pandas', level: 80 },
      { name: 'Requests & JSON', level: 85 },
    ],
  },
  {
    title: 'Web & Mobile Development',
    description: 'Full-stack web and cross-platform mobile development.',
    skills: [
      { name: 'HTML5 & CSS3', level: 85 },
      { name: 'JavaScript', level: 82 },
      { name: 'React.js', level: 82, highlight: true },
      { name: 'React Native', level: 78 },
      { name: 'Django', level: 80 },
      { name: 'REST API', level: 80 },
      { name: 'Axios / Fetch', level: 80 },
    ],
  },
  {
    title: 'Databases & Tools',
    description: 'Data storage, version control and developer tooling.',
    skills: [
      { name: 'SQL', level: 82 },
      { name: 'DBMS', level: 82 },
      { name: 'Git & GitHub', level: 85, highlight: true },
      { name: 'VS Code', level: 90 },
      { name: 'Chrome DevTools', level: 80 },
      { name: 'Firebase', level: 78 },
    ],
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  skills: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Technical Mentor & Co-Founder',
    company: 'Path Creation Academy',
    location: 'Noida',
    period: 'June 2023 – 2026',
    type: 'Co-Founder',
    bullets: [
      "Co-founded and led the academy's technical training vertical, teaching Python, SQL, DBMS and AI to Class 9–12 students (CBSE curriculum) while also serving as a CBSE Board examiner.",
      'Designed the curriculum and lesson plans, conducted practicals, and prepared students for board examinations, driving consistent improvement in student outcomes.',
    ],
    skills: ['Python', 'SQL', 'DBMS', 'AI', 'Curriculum Design', 'Mentoring'],
  },
  {
    role: 'Android Developer',
    company: 'Rebliss',
    location: 'Noida',
    period: 'May 2022 – Aug 2022',
    type: 'Internship',
    bullets: [
      'Developed Android features and integrated REST APIs for seamless data communication and dynamic content display.',
      'Fixed bugs, optimized performance, and performed testing/debugging using Android Studio and Logcat across the full SDLC.',
      'Collaborated with senior developers to translate UI/UX designs into functional Android screens, improving app responsiveness and user experience.',
      'Contributed to code reviews and version control (Git) workflows, ensuring clean, maintainable code across the project.',
    ],
    skills: ['Android Studio', 'REST APIs', 'Logcat', 'Git', 'SDLC'],
  },
];

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  score?: string;
  description?: string;
}

export const EDUCATIONS: Education[] = [
  { degree: 'MCA', institution: 'HR Institute of Science & Technology', location: 'Ghaziabad', year: '2024' },
  { degree: 'BCA', institution: 'HR Institute of Science & Technology', location: 'Ghaziabad', year: '2022' },
  { degree: 'Class 12 (CBSE)', institution: 'Vishal International School', location: 'Ghaziabad', year: '2019' },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  topics: string[];
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Generative AI Program',
    issuer: 'Be10x',
    year: '2026',
    topics: ['AI Foundation & AI Tools Mastery', 'Prompt Engineering', 'LLM / RAG / GenAI & AI Agents', 'Python for AI', 'Statistics & Maths for AI', 'ML & AI Algorithms'],
  },
  {
    title: 'Python Full Stack with AI',
    issuer: 'Ducat Institute',
    year: '2025–26',
    topics: ['Python', 'Django', 'Full Stack', 'AI'],
  },
];
