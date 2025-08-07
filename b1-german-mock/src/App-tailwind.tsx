import React, { useState, useEffect } from 'react';
import { readingQuestions as allQuestions, ReadingQuestion } from './questions';

// Section configuration
const SECTION_ORDER = ['Reading', 'Language', 'Listening', 'Writing', 'Speaking'] as const;
const SECTION_CONFIG: Record<typeof SECTION_ORDER[number], number> = {
  Reading: 90 * 60,    // 90 minutes
  Language: 45 * 60,   // 45 minutes
  Listening: 30 * 60,  // 30 minutes
  Writing: 30 * 60,    // 30 minutes
  Speaking: 15 * 60,   // 15 minutes
};

// Helper to map a question to its section name
function getSectionName(q: ReadingQuestion): typeof SECTION_ORDER[number] {
  if (typeof (q as any).extra?.part === 'number') {
    return 'Reading';
  }
  const part = (q as any).extra?.part as string | undefined;
  if (part?.startsWith('language')) return 'Language';
  if (part?.startsWith('listening')) return 'Listening';
  if (q.type === 'writing') return 'Writing';
  if (q.type === 'speaking') return 'Speaking';
  return 'Reading';
}

interface UserAnswer {
  answer: string | null;
  marked: boolean;
  skipped: boolean;
}

function App() {
  // Build sections once from all questions
  const sections = React.useMemo(() => {
    return SECTION_ORDER
      .map((name) => {
        const indices = allQuestions
          .map((q, idx) => ({ q, idx }))
          .filter(({ q }) => getSectionName(q) === name)
          .map(({ idx }) => idx);
        return indices.length > 0
          ? { name, indices, time: SECTION_CONFIG[name] }
          : null;
      })
      .filter(Boolean) as Array<{
        name: typeof SECTION_ORDER[number];
        indices: number[];
        time: number;
      }>;
  }, []);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [current, setCurrent] = useState(sections[0].indices[0]);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(
    allQuestions.map(() => ({ answer: null, marked: false, skipped: false }))
  );
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(sections[0].time);

  // Main menu & section completion tracking
  const [showMainMenu, setShowMainMenu] = useState(true);
  const [completedSections, setCompletedSections] = useState<boolean[]>(sections.map(() => false));
  // Removed unused state variables to clean up ESLint warnings

  // Timer effect
  useEffect(() => {
    if (showFeedback || showMainMenu) return;
    if (timeLeft <= 0) {
      setShowFeedback(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showFeedback, showMainMenu]);

  // Progress bar
  const section = sections[currentSectionIndex];
  const sectionIndices = section.indices;
  const sectionLength = sectionIndices.length;
  const currentSectionPosition = sectionIndices.indexOf(current);
  const progress = ((currentSectionPosition + 1) / sectionLength) * 100;

  // Handlers
  const handleAnswer = (ans: string) => {
    const updated = [...userAnswers];
    updated[current].answer = ans;
    updated[current].skipped = false;
    setUserAnswers(updated);

    // If this is the last question of the current section, open the submit popup automatically
    const isLastQuestionOfSection = currentSectionPosition === sectionLength - 1;
    if (isLastQuestionOfSection) {
      handleSubmitClick();
    }
  };

  const handleSkip = () => {
    const updated = [...userAnswers];
    updated[current].skipped = true;
    setUserAnswers(updated);
  };

  const handleMark = () => {
    const updated = [...userAnswers];
    updated[current].marked = !updated[current].marked;
    setUserAnswers(updated);
  };

  const goNext = () => {
    const idx = sectionIndices.indexOf(current);
    if (idx < sectionLength - 1) setCurrent(sectionIndices[idx + 1]);
  };
  const goPrev = () => {
    const idx = sectionIndices.indexOf(current);
    if (idx > 0) setCurrent(sectionIndices[idx - 1]);
  };

  const handleSubmitClick = () => {
    if (window.confirm('Are you sure you want to submit this section?')) {
      setShowFeedback(true);

      // Mark current section as completed
      setCompletedSections((prev) => {
        const updated = [...prev];
        updated[currentSectionIndex] = true;
        return updated;
      });
    }
  };

  // Start or resume a section from the main menu
  const startSection = (sectionIdx: number) => {
    const sec = sections[sectionIdx];
    const firstUnanswered = sec.indices.find(idx => userAnswers[idx].answer === null);
    setCurrentSectionIndex(sectionIdx);
    setCurrent(firstUnanswered ?? sec.indices[0]);
    setShowMainMenu(false);
  };

  // Restart the entire quiz from the beginning
  const restartQuiz = () => {
    setUserAnswers(allQuestions.map(() => ({ answer: null, marked: false, skipped: false })));
    setCurrentSectionIndex(0);
    setCurrent(sections[0].indices[0]);
    setShowFeedback(false);
    setTimeLeft(sections[0].time);
    setCompletedSections(sections.map(() => false));
    setShowMainMenu(true);
  };

  // Timer display
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Feedback calculation
  const correctCountSection = sectionIndices.filter(idx => userAnswers[idx].answer === allQuestions[idx].answer).length;

  // Removed unused variables for cleaner code

  // Render
  if (showFeedback) {
    const nextSectionAvailable = currentSectionIndex < sections.length - 1;
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.name} – Bewertung</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-lg text-blue-800">
                Sie haben <span className="font-bold">{correctCountSection}</span> von <span className="font-bold">{sectionLength}</span> Fragen richtig beantwortet.
              </p>
            </div>
            
            <div className="space-y-6">
              {sectionIndices.map((idx) => {
                const q = allQuestions[idx];
                const isCorrect = userAnswers[idx].answer === q.answer;
                return (
                  <div key={q.id} className={`border-l-4 pl-6 py-4 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                    <div className="mb-2">
                      <span className="font-semibold text-gray-900">Frage {idx + 1}:</span>
                      <span className="ml-2 text-gray-700">
                        {Array.isArray(q.prompt) ? q.prompt[q.prompt.length - 1] : q.prompt}
                      </span>
                    </div>
                    <div className="text-sm space-y-1">
                      <div className={`${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        <span className="font-medium">Ihre Antwort:</span>
                        <span className="ml-2">
                          {userAnswers[idx].answer
                            ? q.options?.find((opt) => opt[0] === userAnswers[idx].answer)?.substring(3) ??
                              userAnswers[idx].answer
                            : 'Keine Antwort'}
                        </span>
                        <span className="ml-2">{isCorrect ? '✅' : '❌'}</span>
                      </div>
                      <div className="text-green-700">
                        <span className="font-medium">Richtige Antwort:</span>
                        <span className="ml-2">
                          {q.options?.find((opt) => opt[0] === q.answer)?.substring(3) ?? q.answer}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              {nextSectionAvailable ? (
                <button
                  onClick={() => {
                    const nextIdx = currentSectionIndex + 1;
                    setCurrentSectionIndex(nextIdx);
                    setCurrent(sections[nextIdx].indices[0]);
                    setShowFeedback(false);
                    setTimeLeft(sections[nextIdx].time);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Nächste Sektion starten
                </button>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">🎉 Glückwunsch!</h2>
                  <p className="text-gray-600 mb-6">
                    Sie haben alle Sektionen abgeschlossen.<br />
                    Möchten Sie das Quiz noch einmal absolvieren?
                  </p>
                  <button
                    onClick={restartQuiz}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
                  >
                    Quiz erneut starten
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // MAIN MENU RENDER WITH TAILWIND
  if (showMainMenu) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              B1 German Mock Test
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bereiten Sie sich optimal auf Ihre B1-Deutschprüfung vor. 
              Üben Sie mit authentischen Prüfungsaufgaben in allen Fertigkeitsbereichen.
            </p>
          </div>
          
          {/* Sections Grid */}
          <div className="grid gap-6 md:gap-8">
            {sections.map((sec, idx) => {
              const answered = sec.indices.filter(i => userAnswers[i].answer !== null).length;
              const len = sec.indices.length;
              const completed = completedSections[idx];
              const progressPct = Math.round((answered / len) * 100);
              
              return (
                <div 
                  key={sec.name} 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {sec.name}
                        </h3>
                        <p className="text-gray-500">
                          {Math.floor(sec.time / 60)} Minuten • {len} Fragen
                        </p>
                      </div>
                      {completed && (
                        <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Abgeschlossen
                        </div>
                      )}
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {completed ? 'Alle Fragen beantwortet' : `${answered}/${len} beantwortet`}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          {progressPct}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-500 ${
                            completed ? 'bg-green-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <button
                      onClick={() => startSection(idx)}
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                        completed
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-200'
                          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {completed ? (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <span>Wiederholen</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a1 1 0 001 1h4M9 10V9a1 1 0 011-1h4a1 1 0 011 1v1M9 10H6m3 0h6" />
                          </svg>
                          <span>{answered > 0 ? 'Fortsetzen' : 'Starten'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Quiz page with improved responsive layout
  const q = allQuestions[current];
  const ua = userAnswers[current];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Fixed header with progress bar */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1">
          <div
            className="bg-blue-500 h-1 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Header content */}
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-600">
                {section.name}
              </span>
              <span className="text-sm text-gray-500">
                Question {currentSectionPosition + 1} / {sectionLength}
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm font-mono font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-md">
                ⏰ {minutes}:{seconds.toString().padStart(2, '0')}
              </span>
              <button
                onClick={handleSubmitClick}
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-1.5 rounded-md transition-colors duration-200 text-sm"
              >
                Submit Section
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content area - scrollable */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Question card - responsive layout */}
          <div className="bg-white rounded-xl shadow-lg mb-6 flex flex-col lg:flex-row h-full max-h-[calc(100vh-200px)]">
            {/* Question section - left side on desktop */}
            <div className="lg:w-1/2 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-gray-100 flex-shrink-0 lg:overflow-y-auto">
              <div>
                {Array.isArray(q.prompt)
                  ? q.prompt.map((p, idx) => (
                      <p key={idx} className={`text-gray-800 leading-relaxed ${idx === 0 ? 'mb-4 font-medium text-lg' : 'mb-3'}`}>
                        {p}
                      </p>
                    ))
                  : <p className="text-gray-800 font-medium text-lg leading-relaxed">{q.prompt}</p>}
              </div>
            </div>
            
            {/* Answer options - right side on desktop */}
            {q.options && (
              <div className="lg:w-1/2 flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="space-y-3">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt[0])}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-sm ${
                        ua.answer === opt[0]
                          ? 'border-blue-500 bg-blue-50 text-blue-900 font-semibold shadow-sm'
                          : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <span className="block text-sm sm:text-base">{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Fixed bottom navigation - sticky */}
      <div className="bg-white border-t shadow-lg sticky bottom-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-center gap-2 sm:gap-4">
            <button 
              onClick={goPrev} 
              disabled={currentSectionPosition === 0}
              className={`w-20 sm:w-24 h-10 sm:h-12 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base flex items-center justify-center ${
                currentSectionPosition === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>
            
            <button 
              onClick={handleSkip} 
              className={`w-16 sm:w-20 h-10 sm:h-12 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base flex items-center justify-center ${
                ua.skipped 
                  ? 'bg-yellow-200 text-yellow-800 border-2 border-yellow-300' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Skip
            </button>
            
            <button 
              onClick={handleMark} 
              className={`w-32 sm:w-40 h-10 sm:h-12 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base flex items-center justify-center ${
                ua.marked 
                  ? 'bg-orange-200 text-orange-800 border-2 border-orange-300' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <span className="hidden sm:inline">{ua.marked ? 'Unmark' : 'Mark for Review'}</span>
              <span className="sm:hidden">{ua.marked ? 'Unmark' : 'Mark'}</span>
            </button>
            
            <button 
              onClick={goNext} 
              disabled={currentSectionPosition === sectionLength - 1}
              className={`w-16 sm:w-20 h-10 sm:h-12 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base flex items-center justify-center ${
                currentSectionPosition === sectionLength - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;