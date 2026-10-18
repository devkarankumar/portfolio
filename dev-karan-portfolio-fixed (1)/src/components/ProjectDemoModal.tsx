import React, { useState, useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, Play, RefreshCw, Volume2, Mic, MapPin, Store, CheckCircle, ExternalLink, Sparkles, Database, FileText, ArrowRight } from 'lucide-react';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
              <span>Interactive Project Simulator</span>
              <span aria-hidden="true">·</span>
              <span>{project.categoryLabel}</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <span>GitHub Repo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Switch by demoType */}
        <div className="p-6">
          {project.demoType === 'rag' && <RagChatbotDemo project={project} />}
          {project.demoType === 'shopnear' && <ShopNearDemo project={project} />}
          {project.demoType === 'voice' && <VoiceAssistantDemo project={project} />}
          {project.demoType === 'weather' && <WeatherNowDemo project={project} />}
        </div>
      </div>
    </div>
  );
};

/* ---------------- 1. RAG CHATBOT DEMO ---------------- */
function RagChatbotDemo({ project }: { project: Project }) {
  const [query, setQuery] = useState('How does hybrid search combine dense cosine embeddings with BM25?');
  const [selectedCitation, setSelectedCitation] = useState<number | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [output, setOutput] = useState('');

  const samplePrompts = [
    'How does hybrid search combine dense cosine embeddings with BM25?',
    'What are the best chunking strategies for multi-page PDF documents?',
    'How is Google Gemini API used for multimodal image and text synthesis?'
  ];

  const citations = [
    {
      id: 1,
      source: 'rag_architecture_spec.pdf (Page 4)',
      score: '0.94 Dense / 0.88 BM25',
      content: 'Hybrid search calculates reciprocal rank fusion (RRF): RRF_score(d) = sum(1 / (k + rank_i(d))). Dense vector search captures broad semantic intent while BM25 guarantees precision on exact keywords, serial numbers, and domain acronyms.'
    },
    {
      id: 2,
      source: 'chunking_benchmarks.md',
      score: '0.91 Dense / 0.85 BM25',
      content: 'Configurable chunking allows selecting recursive boundary chunking with 400 token windows and 50 token overlap, maintaining syntactic coherence across code blocks and tables.'
    }
  ];

  const runSimulation = (promptText = query) => {
    setIsStreaming(true);
    setOutput('');
    setSelectedCitation(null);

    const fullResponse = `Hybrid search in this RAG architecture addresses the classical vector blind-spots. Dense cosine embeddings evaluate contextual meaning, whereas BM25 ensures rare technical tokens and exact keywords are not lost [Citation 1]. The system uses Reciprocal Rank Fusion (RRF) to merge both candidate sets into a unified context payload passed directly to the Gemini API [Citation 2].`;

    let i = 0;
    const interval = setInterval(() => {
      i += 3;
      setOutput(fullResponse.slice(0, i));
      if (i >= fullResponse.length) {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 20);
  };

  useEffect(() => {
    runSimulation();
  }, []);

  return (
    <div className="space-y-6">
      <div className="text-sm text-slate-300">
        Simulate the hybrid retrieval and Gemini generation pipeline Dev Karan designed for the full-stack RAG Chatbot.
      </div>

      {/* Preset queries */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Select or customize query:
        </label>
        <div className="flex flex-wrap gap-2">
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(p);
                runSimulation(p);
              }}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors text-left"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Input box */}
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a technical document question..."
          className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
        />
        <button
          onClick={() => runSimulation()}
          disabled={isStreaming}
          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 shrink-0 disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5" />
          <span>Execute RAG</span>
        </button>
      </div>

      {/* RAG Pipeline Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Retrieval Breakdown */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-cyan-300">
            <span className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" />
              Hybrid Retrieval Pipeline
            </span>
            <span className="text-slate-400 font-mono">k=60 (RRF)</span>
          </div>

          <div className="space-y-2 text-xs">
            {citations.map((c) => (
              <div 
                key={c.id} 
                onClick={() => setSelectedCitation(selectedCitation === c.id ? null : c.id)}
                className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                  selectedCitation === c.id 
                    ? 'border-cyan-500 bg-cyan-950/30' 
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-slate-300 font-medium mb-1">
                  <span>Source [{c.id}]: {c.source}</span>
                  <span className="text-[11px] font-mono text-cyan-400">{c.score}</span>
                </div>
                <p className="text-slate-400 text-[11px] line-clamp-2">
                  {c.content}
                </p>
                {selectedCitation === c.id && (
                  <div className="mt-2 pt-2 border-t border-cyan-800/60 text-cyan-200 text-[11px]">
                    <strong>Full Chunk Excerpt:</strong> {c.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Synthesis & Grounded Output */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                Gemini Synthesis Stream
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                {isStreaming ? 'Streaming tokens...' : 'Completed (0.42s)'}
              </span>
            </div>

            <div className="text-sm text-slate-200 leading-relaxed font-sans min-h-[120px] bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
              {output}
              {isStreaming && <span className="inline-block w-1.5 h-4 ml-1 bg-cyan-400 animate-pulse align-middle" />}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Inline Citations are interactive</span>
            <span className="text-cyan-400">Grounding Confidence: 98.4%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- 2. SHOPNEAR DEMO ---------------- */
function ShopNearDemo({ project }: { project: Project }) {
  const [radiusMeters, setRadiusMeters] = useState(1000);
  const [isOwnerView, setIsOwnerView] = useState(false);
  const [flashDeals, setFlashDeals] = useState([
    { id: '1', store: 'Sharma Electronics & Accessories', distance: 280, deal: 'Flat 20% OFF on USB-C Cables & Power Banks', category: 'Electronics', active: true },
    { id: '2', store: 'Organic Daily Fresh Mart', distance: 450, deal: 'Buy 1KG Apples Get 1KG Oranges FREE (Next 2 Hours)', category: 'Groceries', active: true },
    { id: '3', store: 'The Artisan Coffee & Roastery', distance: 820, deal: '50% OFF on Cold Brews with Student ID', category: 'Cafe', active: true },
    { id: '4', store: 'Noida Fitness & Protein Hub', distance: 1650, deal: '15% OFF on Whey Isolate & Pre-Workout', category: 'Health', active: true },
    { id: '5', store: 'City Book Depot & Stationery', distance: 2400, deal: 'Flat 25% OFF on Competitive Exam Books', category: 'Books', active: true }
  ]);
  const [newDealTitle, setNewDealTitle] = useState('');

  const visibleDeals = flashDeals.filter(d => d.distance <= radiusMeters);

  const handleAddDeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDealTitle.trim()) return;
    const newDeal = {
      id: Date.now().toString(),
      store: "My Verified Local Shop (Noida Sec 62)",
      distance: 350,
      deal: newDealTitle.trim(),
      category: "Flash Deal",
      active: true
    };
    setFlashDeals([newDeal, ...flashDeals]);
    setNewDealTitle('');
  };

  return (
    <div className="space-y-6">
      <div className="text-sm text-slate-300">
        Simulate the hyper-local discovery radius and merchant real-time Firebase sync engineered in <strong>ShopNear</strong>.
      </div>

      {/* Mode Selector and Radius control */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Search Radius Slider:
            </span>
            <div className="text-lg font-bold text-cyan-400 font-mono">
              {radiusMeters < 1000 ? `${radiusMeters} Meters` : `${(radiusMeters / 1000).toFixed(1)} Kilometers`}
            </div>
          </div>

          <div className="flex items-center gap-2 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => setIsOwnerView(false)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                !isOwnerView ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Customer Radar Mode
            </button>
            <button
              onClick={() => setIsOwnerView(true)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                isOwnerView ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Shop Owner CMS Mode
            </button>
          </div>
        </div>

        {/* Range slider */}
        <input
          type="range"
          min="200"
          max="3000"
          step="100"
          value={radiusMeters}
          onChange={(e) => setRadiusMeters(Number(e.target.value))}
          className="w-full accent-cyan-400 cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-slate-500 font-mono">
          <span>200m (Walking)</span>
          <span>1km (Neighborhood)</span>
          <span>2km (Sector)</span>
          <span>3km (Sub-district)</span>
        </div>
      </div>

      {/* Owner CMS Mode */}
      {isOwnerView && (
        <form onSubmit={handleAddDeal} className="p-4 bg-slate-950/80 border border-cyan-800/50 rounded-xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-cyan-300">
              Merchant Live Deal Broadcast (Firebase Sync)
            </span>
            <span className="text-[11px] text-emerald-400 font-mono">
              Connected: Noida Sector 62
            </span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newDealTitle}
              onChange={(e) => setNewDealTitle(e.target.value)}
              placeholder="e.g. Flash 30% OFF on all items until 8 PM today..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors shrink-0"
            >
              Broadcast Deal
            </button>
          </div>
        </form>
      )}

      {/* Nearby Stores Feed */}
      <div>
        <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
          <span>Discovered stores within {radiusMeters}m ({visibleDeals.length} locations)</span>
          <span className="text-cyan-400 font-mono">GeoQuery: Lat 28.628 / Lng 77.364</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
          {visibleDeals.map((item) => (
            <div key={item.id} className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-2 hover:border-slate-700 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-xs font-bold text-white leading-snug">
                  {item.store}
                </h4>
                <span className="text-[11px] font-mono font-medium text-cyan-400 shrink-0">
                  {item.distance}m away
                </span>
              </div>
              <p className="text-xs text-amber-300 bg-amber-950/20 p-2 rounded-lg border border-amber-900/30">
                {item.deal}
              </p>
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>{item.category}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Live Offer
                </span>
              </div>
            </div>
          ))}

          {visibleDeals.length === 0 && (
            <div className="col-span-2 text-center py-8 text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl">
              No stores within {radiusMeters}m radius. Slide right to expand radius!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- 3. VOICE ASSISTANT DEMO ---------------- */
function VoiceAssistantDemo({ project }: { project: Project }) {
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState('Search Python Data Structures');
  const [assistantResponse, setAssistantResponse] = useState('Executing search for Python Data Structures and Algorithms. Found 14 local modules and web resources.');
  const [voiceVolume, setVoiceVolume] = useState([40, 75, 55, 90, 30, 60, 85, 45, 95, 30]);

  const commands = [
    { text: "Open GitHub Profile", response: "Opening Dev Karan's GitHub repository at github.com/devkarankumar." },
    { text: "Search Python DSA topics", response: "Accessing DSA library: Binary Search Trees, Heaps, Dynamic Programming, and Graph Traversal." },
    { text: "Check Noida Weather", response: "Current weather in Noida: 28°C, clear sky with 48% humidity. Perfect conditions." },
    { text: "System Diagnostic Test", response: "All Python subprocesses healthy. SpeechRecognition engine active, pyttsx3 synthesizer initialized." }
  ];

  const handleExecuteCommand = (cmd: { text: string; response: string }) => {
    setLastCommand(cmd.text);
    setIsListening(true);
    setAssistantResponse('Processing speech input...');

    // Jiggle frequency visualizer bars
    const interval = setInterval(() => {
      setVoiceVolume(Array.from({ length: 10 }, () => Math.floor(Math.random() * 80) + 15));
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setIsListening(false);
      setAssistantResponse(cmd.response);

      // Web Speech API synthesis simulation if supported
      if ('speechSynthesis' in window) {
        try {
          const utterance = new SpeechSynthesisUtterance(cmd.response);
          utterance.rate = 1.05;
          window.speechSynthesis.speak(utterance);
        } catch {
          // graceful fallback
        }
      }
    }, 900);
  };

  return (
    <div className="space-y-6">
      <div className="text-sm text-slate-300">
        Interactive audio simulator replicating Dev Karan's Python Voice Assistant workflow (SpeechRecognition & pyttsx3).
      </div>

      {/* High tech audio visualizer panel */}
      <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl flex flex-col items-center justify-center space-y-4 text-center">
        {/* Animated Sound Wave Bars */}
        <div className="flex items-center justify-center gap-1.5 h-16 w-full max-w-xs">
          {voiceVolume.map((height, idx) => (
            <div
              key={idx}
              className={`w-2.5 rounded-full transition-all duration-150 ${
                isListening ? 'bg-cyan-400' : 'bg-slate-700'
              }`}
              style={{ height: `${isListening ? height : 15}%` }}
            />
          ))}
        </div>

        <div className="space-y-1">
          <div className="text-xs uppercase tracking-widest font-mono text-cyan-400">
            {isListening ? 'LISTENING & PARSING SPEECH...' : 'VOICE ASSISTANT READY'}
          </div>
          <div className="text-sm font-semibold text-white">
            Last Input: "{lastCommand}"
          </div>
        </div>

        {/* Response block */}
        <div className="w-full max-w-lg p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 text-left flex items-start gap-2.5">
          <Volume2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-cyan-300 block mb-0.5">Synthesizer Response:</span>
            <span>{assistantResponse}</span>
          </div>
        </div>
      </div>

      {/* Preset Command Buttons */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
          Trigger simulated voice commands:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {commands.map((cmd, idx) => (
            <button
              key={idx}
              onClick={() => handleExecuteCommand(cmd)}
              disabled={isListening}
              className="p-3 text-left rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/70 hover:bg-cyan-950/20 text-slate-300 text-xs transition-colors flex items-center justify-between cursor-pointer disabled:opacity-50"
            >
              <span className="font-medium">"{cmd.text}"</span>
              <Mic className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- 4. WEATHERNOW DEMO ---------------- */
function WeatherNowDemo({ project }: { project: Project }) {
  const [city, setCity] = useState('Noida');

  const weatherData: Record<string, { temp: number; feels: number; condition: string; humidity: number; wind: number; pressure: number }> = {
    'Noida': { temp: 29, feels: 31, condition: 'Clear Sky', humidity: 48, wind: 11, pressure: 1012 },
    'New Delhi': { temp: 30, feels: 32, condition: 'Haze', humidity: 52, wind: 12, pressure: 1011 },
    'Ghaziabad': { temp: 28, feels: 30, condition: 'Partly Cloudy', humidity: 55, wind: 9, pressure: 1013 },
    'Bengaluru': { temp: 24, feels: 24, condition: 'Scattered Showers', humidity: 76, wind: 18, pressure: 1016 },
    'London': { temp: 15, feels: 14, condition: 'Light Rain', humidity: 82, wind: 22, pressure: 1008 }
  };

  const current = weatherData[city] || weatherData['Noida'];

  return (
    <div className="space-y-6">
      <div className="text-sm text-slate-300">
        Simulate the live Django REST integration with OpenWeatherMap API for real-time meteorological metrics.
      </div>

      {/* City Switcher */}
      <div className="flex flex-wrap gap-2">
        {Object.keys(weatherData).map((c) => (
          <button
            key={c}
            onClick={() => setCity(c)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              city === c 
                ? 'bg-cyan-500 text-slate-950 font-bold' 
                : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Weather Dashboard Card */}
      <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs text-slate-400">Live Station Feed</div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{city}, India</h3>
          </div>
          <div className="text-right">
            <div className="text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
              {current.temp}°C
            </div>
            <div className="text-xs text-slate-400">{current.condition}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3 bg-slate-900 border border-slate-800/80 rounded-lg">
            <span className="text-[11px] text-slate-500 block">Feels Like</span>
            <span className="text-base font-bold text-slate-200 font-mono">{current.feels}°C</span>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800/80 rounded-lg">
            <span className="text-[11px] text-slate-500 block">Humidity</span>
            <span className="text-base font-bold text-slate-200 font-mono">{current.humidity}%</span>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800/80 rounded-lg">
            <span className="text-[11px] text-slate-500 block">Wind Velocity</span>
            <span className="text-base font-bold text-slate-200 font-mono">{current.wind} km/h</span>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800/80 rounded-lg">
            <span className="text-[11px] text-slate-500 block">Atmospheric Pressure</span>
            <span className="text-base font-bold text-slate-200 font-mono">{current.pressure} hPa</span>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-800 pt-3">
          <span>Backend Framework: Django 4.x / Python 3</span>
          <span className="text-emerald-400">HTTP Status: 200 OK</span>
        </div>
      </div>
    </div>
  );
}
