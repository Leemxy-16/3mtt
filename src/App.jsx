import React, { useState } from 'react';

const techSuggestions = [
  {
    skill: "Front-End Web Development",
    months: 6,
    note: "Deepen your JavaScript knowledge, explore React or Vue, and learn about responsive design. Try building a portfolio website.",
    keyword: ["html", "css", "javascript", "react", "frontend", "front end", "vue", "web design","web"]
  },
  {
    skill: "Back-End Web Development",
    months: 7,
    note: "Learn Node.js or Python (Django/Flask), databases (SQL/NoSQL), and REST APIs. Build simple CRUD web apps.",
    keyword: ["back end", "backend", "node", "django", "flask", "express", "api", "sql", "database","web","web design"]
  },
  {
    skill: "Mobile App Development (Android)",
    months: 7,
    note: "Learn Java or Kotlin with Android Studio. Try Flutter for cross-platform apps. Build a simple to-do list app.",
    keyword: ["android","mobile", "kotlin", "java", "java android", "mobile app", "android studio"]
  },
  {
    skill: "Mobile App Development (IOS)",
    months: 7,
    note: "Swift and Xcode are the essentials. Try building a weather or notes app.",
    keyword: ["ios","mobile","phone", "swift", "xcode","dev","developer" ,"apple", "iphone", "ipad"]
  },
  {
    skill: "Cloud Computing",
    months: 6,
    note: "Start with AWS or Azure. Learn basic infrastructure, serverless, and cloud storage. Try deploying a static site.",
    keyword: ["cloud", "aws", "azure", "gcp", "google cloud", "serverless", "cloud services"]
  },
  {
    skill: "Cybersecurity & Ethical Hacking",
    months: 8,
    note: "Learn about networks, penetration testing, and security tools (Kali Linux, Metasploit). Practice in safe labs.",
    keyword: ["cybersecurity","hacker", "security", "hacking", "ethical hack", "pentest", "penetration test", "ctf"]
  },
  {
    skill: "Data Science & Machine Learning",
    months: 9,
    note: "Python is key. Learn pandas, scikit-learn, and basic ML theory. Try Kaggle competitions.",
    keyword: ["data science", "python","data", "machine learning", "ml", "ai", "artificial intelligence", "pandas", "scikit", "tensorflow"]
  },
  {
    skill: "DevOps & Automation",
    months: 6,
    note: "Learn CI/CD, Docker, and scripting (Bash/Python). Automate deployments and set up GitHub Actions.",
    keyword: ["devops", "automation", "docker", "ci/cd", "github actions", "jenkins", "bash", "pipeline", "python"]
  },
  {
    skill: "Game Development",
    months: 8,
    note: "Try Unity (C#) or Godot. Make small games and join game jams.",
    keyword: ["game development", "game","dev","developer","unity", "c#", "godot", "unreal", "game dev"]
  }
];

function App() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');

  const examplePrompts = [
    "I know HTML and CSS, but not much JavaScript.",
    "I like making mobile apps for Android.",
    "I'm interested in cybersecurity and ethical hacking."
  ];

  const normalizeText = (text) =>
    text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError('');
  };

  const analyzeKnowledge = () => {
    if (!input.trim()) {
      setError('Please describe your current tech knowledge before getting a suggestion.');
      setSuggestions([]);
      return;
    }

    const lowerInput = normalizeText(input);

    const matches = techSuggestions.filter(item =>
      item.keyword.some(keyword => {
        const normalizedKeyword = normalizeText(keyword);
        const regex = new RegExp(`\\b${normalizedKeyword}\\b`, 'i');
        return regex.test(lowerInput);
      })
    );

    if (matches.length > 0) {
      setSuggestions(matches);
    } else {
      setSuggestions([{
        skill: 'General Tech Skills',
        months: 3,
        note: 'Build a broad foundation with tools like Git, basic coding, and internet protocols.'
      }]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 sticky top-0 z-10">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-800">🚀 Tech Skill Advisor</h1>
        <p className="text-center text-gray-700 mb-6">
          Describe your tech knowledge or interests, and we'll suggest a learning path for you!
        </p>

        <div className="text-center mb-2">
          <label htmlFor="tech-input" className="text-lg font-semibold text-gray-800">
            Your Tech Background:
          </label>
        </div>

        <textarea
          id="tech-input"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your tech knowledge or interests"
          className="w-full resize-none p-3 border border-gray-300 rounded-md text-gray-900 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />

        <div className="mb-4 text-gray-600 text-sm">
          <p className="font-medium mb-1">Examples:</p>
          <ul className="list-disc ml-6">
            {examplePrompts.map((ex, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-blue-600"
                onClick={() => setInput(ex)}
              >
                {ex}
              </li>
            ))}
          </ul>
        </div>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <button
          onClick={analyzeKnowledge}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Get Suggestions
        </button>
      </div>

      {suggestions.length > 0 && (
        <div className="mt-8 max-w-3xl mx-auto grid gap-6">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="border-2 border-blue-200 bg-white rounded-xl shadow-lg p-6 flex flex-col"
              style={{
                boxShadow: '0 6px 24px 0 rgba(66,153,225,0.08), 0 1.5px 3px 0 rgba(0,0,0,0.04)'
              }}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-blue-700 text-2xl">🌟</span>
                <span className="text-xl font-bold text-blue-700">Suggested Path:</span>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded px-3 py-2 font-semibold text-blue-900 text-lg mb-2">
                {suggestion.skill}
              </div>
              <div className="flex items-center mb-2">
                <span className="text-green-700 text-xl mr-2">⏳</span>
                <span className="text-lg text-green-700 font-semibold">
                  Estimated time: {suggestion.months} months
                </span>
              </div>
              {suggestion.note && (
                <p className="text-md mt-2 text-gray-700 italic leading-relaxed">
                  💡 {suggestion.note}
                </p>
              )}
            </div>
          ))}
          <button
            className="mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-full text-white text-sm"
            onClick={() => { setSuggestions([]); setInput(''); }}
          >
            🔄 Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export default App;