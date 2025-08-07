import React, { useState, useEffect } from 'react';
import './App.css';
import { readingQuestions as allQuestions, ReadingQuestion } from './questions';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Box,
  Chip,
} from '@mui/material';
import {
  PlayArrow as PlayArrowIcon,
  Refresh as RefreshIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

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
  const [showSubmitConfirmation, setShowSubmitConfirmation] = useState(false);
  const [showReviewScreen, setShowReviewScreen] = useState(false);

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
    // Check if there are any marked or skipped questions
    const hasMarkedOrSkipped = sectionIndices.some(idx => userAnswers[idx].marked || userAnswers[idx].skipped);
    if (hasMarkedOrSkipped) {
      setShowReviewScreen(true);
    } else {
      setShowSubmitConfirmation(true);
    }
  };

  const handleSubmitConfirm = () => {
    setShowSubmitConfirmation(false);
    setShowFeedback(true);

    // Mark current section as completed
    setCompletedSections((prev) => {
      const updated = [...prev];
      updated[currentSectionIndex] = true;
      return updated;
    });
  };

  const handleSubmitCancel = () => {
    setShowSubmitConfirmation(false);
  };

  const handleReviewComplete = () => {
    setShowReviewScreen(false);
    setShowSubmitConfirmation(true);
  };

  const handleReviewBack = () => {
    setShowReviewScreen(false);
  };

  const goToQuestion = (questionIndex: number) => {
    setCurrent(questionIndex);
    setShowReviewScreen(false);
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
    setShowSubmitConfirmation(false);
    setShowReviewScreen(false);
    setTimeLeft(sections[0].time);
    setCompletedSections(sections.map(() => false));
    setShowMainMenu(true);
  };

  // Timer display
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Feedback calculation
  const correctCountSection = sectionIndices.filter(idx => userAnswers[idx].answer === allQuestions[idx].answer).length;

  // Get marked and skipped questions
  const markedQuestions = sectionIndices.filter(idx => userAnswers[idx].marked).map(idx => idx + 1);
  const skippedQuestions = sectionIndices.filter(idx => userAnswers[idx].skipped).map(idx => idx + 1);

  // Render
  if (showFeedback) {
    const nextSectionAvailable = currentSectionIndex < sections.length - 1;
    return (
      <div className="App">
        <h2>{section.name} – Bewertung</h2>
        <p>
          Sie haben {correctCountSection} von {sectionLength} Fragen richtig beantwortet.
        </p>
        <ul style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto' }}>
          {sectionIndices.map((idx) => {
            const q = allQuestions[idx];
            return (
              <li key={q.id} style={{ marginBottom: 12 }}>
                <strong>Frage {idx + 1}:</strong>{' '}
                {Array.isArray(q.prompt) ? q.prompt[q.prompt.length - 1] : q.prompt}
                <br />
                <span>
                  Ihre Antwort:{' '}
                  <b>
                    {userAnswers[idx].answer
                      ? q.options?.find((opt) => opt[0] === userAnswers[idx].answer)?.substring(3) ??
                        userAnswers[idx].answer
                      : 'Keine Antwort'}
                  </b>
                  {userAnswers[idx].answer === q.answer ? ' ✅' : ' ❌'}
                  <br />Richtige Antwort:{' '}
                  <b>{q.options?.find((opt) => opt[0] === q.answer)?.substring(3) ?? q.answer}</b>
                </span>
              </li>
            );
          })}
        </ul>
        <div style={{ marginTop: 32 }}>
          {nextSectionAvailable ? (
            <button
              onClick={() => {
                const nextIdx = currentSectionIndex + 1;
                setCurrentSectionIndex(nextIdx);
                setCurrent(sections[nextIdx].indices[0]);
                setShowFeedback(false);
                setTimeLeft(sections[nextIdx].time);
              }}
              style={{
                padding: '10px 24px',
                borderRadius: 6,
                background: '#4caf50',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              Nächste Sektion starten
            </button>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ marginBottom: 12 }}>🎉 Glückwunsch!</h2>
              <p style={{ margin: '0 0 24px 0', fontSize: '16px' }}>
                Sie haben alle Sektionen abgeschlossen.<br />
                Möchten Sie das Quiz noch einmal absolvieren?
              </p>
              <button
                onClick={restartQuiz}
                style={{
                  padding: '12px 28px',
                  borderRadius: 8,
                  background: '#007bff',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 600,
                  boxShadow: '0 2px 6px #0003',
                }}
              >
                Quiz erneut starten
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Review screen
  if (showReviewScreen) {
    return (
      <div className="App">
        <div style={{ 
          background: '#fff', 
          borderRadius: 8, 
          padding: 32, 
          boxShadow: '0 4px 16px #0002', 
          maxWidth: 600, 
          margin: '50px auto',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: 24 }}>Überprüfen Sie Ihre Antworten</h3>
          
          {markedQuestions.length > 0 && (
            <div style={{ marginBottom: 24, textAlign: 'left' }}>
              <h4 style={{ color: '#007bff', marginBottom: 12 }}>📝 Zur Überprüfung markiert ({markedQuestions.length}):</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {markedQuestions.map((num) => (
                  <button
                    key={num}
                    onClick={() => goToQuestion(num - 1)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: 6,
                      border: '1px solid #007bff',
                      background: '#007bff',
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Frage {num}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {skippedQuestions.length > 0 && (
            <div style={{ marginBottom: 24, textAlign: 'left' }}>
              <h4 style={{ color: '#dc3545', marginBottom: 12 }}>⏭️ Übersprungen ({skippedQuestions.length}):</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skippedQuestions.map((num) => (
                  <button
                    key={num}
                    onClick={() => goToQuestion(num - 1)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: 6,
                      border: '1px solid #dc3545',
                      background: '#dc3545',
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Frage {num}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32 }}>
            <button
              onClick={handleReviewBack}
              style={{ 
                padding: '10px 24px', 
                borderRadius: 6, 
                border: '1px solid #6c757d',
                background: '#6c757d',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Zurück
            </button>
            <button
              onClick={handleReviewComplete}
              style={{ 
                padding: '10px 24px', 
                borderRadius: 6, 
                background: '#28a745', 
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              Abschicken
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Submit confirmation dialog
  if (showSubmitConfirmation) {
    return (
      <div className="App">
        <div style={{ 
          background: '#fff', 
          borderRadius: 8, 
          padding: 32, 
          boxShadow: '0 4px 16px #0002', 
          maxWidth: 500, 
          margin: '50px auto',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#d32f2f', marginBottom: 16 }}>⚠️ Abschicken bestätigen</h3>
          <p style={{ marginBottom: 24, fontSize: '16px' }}>
            Sind Sie sicher, dass Sie diese Sektion abschicken möchten? 
            Nach dem Absenden können Sie Ihre Antworten nicht mehr ändern.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <button
              onClick={handleSubmitCancel}
              style={{ 
                padding: '10px 24px', 
                borderRadius: 6, 
                border: '1px solid #ccc',
                background: '#f5f5f5',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Abbrechen
            </button>
            <button
              onClick={handleSubmitConfirm}
              style={{ 
                padding: '10px 24px', 
                borderRadius: 6, 
                background: '#d32f2f', 
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              Abschicken
            </button>
          </div>
        </div>
      </div>
    );
  }

  // MAIN MENU RENDER
  if (showMainMenu) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h2" component="h1" gutterBottom>
            B1 German Mock Test
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Bereiten Sie sich auf Ihre B1-Prüfung vor
          </Typography>
        </Box>
        
        <Box display="flex" flexDirection="column" gap={3}>
          {sections.map((sec, idx) => {
            const answered = sec.indices.filter(i => userAnswers[i].answer !== null).length;
            const len = sec.indices.length;
            const completed = completedSections[idx];
            const progressPct = Math.round((answered / len) * 100);
            
            return (
              <Card key={sec.name} elevation={3} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-2px)' } }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h5" component="h3">
                      {sec.name}
                    </Typography>
                    {completed && (
                      <Chip 
                        icon={<CheckCircleIcon />} 
                        label="Abgeschlossen" 
                        color="success" 
                        variant="outlined"
                      />
                    )}
                  </Box>
                  
                  <Box mb={2}>
                    <LinearProgress 
                      variant="determinate" 
                      value={progressPct} 
                      sx={{ height: 8, borderRadius: 4 }}
                      color={completed ? "success" : "primary"}
                    />
                  </Box>
                  
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" color="text.secondary">
                      {completed ? 'Alle Fragen beantwortet' : `${answered}/${len} beantwortet`}
                    </Typography>
                    
                    <Button
                      variant={completed ? "outlined" : "contained"}
                      color={completed ? "secondary" : "primary"}
                      onClick={() => startSection(idx)}
                      startIcon={completed ? <RefreshIcon /> : <PlayArrowIcon />}
                      size="large"
                    >
                      {completed ? 'Wiederholen' : answered > 0 ? 'Fortsetzen' : 'Starten'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    );
  }

  const q = allQuestions[current];
  const ua = userAnswers[current];

  return (
    <div className="App">
      <div className="progress-bar" style={{ width: '100%', background: '#eee', height: 8, marginBottom: 16 }}>
        <div
          style={{ width: `${progress}%`, background: '#4caf50', height: '100%', transition: 'width 0.3s' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span>Question {currentSectionPosition + 1} / {sectionLength}</span>
        <span style={{ fontVariantNumeric: 'tabular-nums' }}>
          ⏰ {minutes}:{seconds.toString().padStart(2, '0')}
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div style={{ flex: 1 }}></div>
        <div>
          <button
            onClick={handleSubmitClick}
            style={{ 
              background: '#dc3545', 
              color: '#fff', 
              padding: '8px 16px', 
              borderRadius: 6, 
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Submit Section
          </button>
        </div>
      </div>
      <div className="question-box" style={{ background: '#fff', borderRadius: 8, padding: 24, boxShadow: '0 2px 8px #0001', maxWidth: 600, margin: '0 auto' }}>
        <div style={{ marginBottom: 16, fontWeight: 500 }}>
          {Array.isArray(q.prompt)
            ? q.prompt.map((p, idx) => (
                <p key={idx} style={idx === 0 ? { margin: '0 0 12px 0' } : {}}>{p}</p>
              ))
            : q.prompt}
        </div>
        {q.options && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {q.options.map((opt, idx) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt[0])}
                style={{
                  padding: '10px 16px',
                  borderRadius: 6,
                  border: ua.answer === opt[0] ? '2px solid #4caf50' : '1px solid #ccc',
                  background: ua.answer === opt[0] ? '#e8f5e9' : '#fafafa',
                  cursor: 'pointer',
                  fontWeight: ua.answer === opt[0] ? 600 : 400,
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
      <div style={{ marginTop: 24, display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button 
          onClick={goPrev} 
          disabled={currentSectionPosition === 0}
          style={{
            padding: '10px 16px',
            borderRadius: 6,
            border: '1px solid #6c757d',
            background: currentSectionPosition === 0 ? '#e9ecef' : '#6c757d',
            color: currentSectionPosition === 0 ? '#6c757d' : '#fff',
            cursor: currentSectionPosition === 0 ? 'not-allowed' : 'pointer',
            fontSize: '14px'
          }}
        >
          Previous
        </button>
        <button 
          onClick={handleSkip} 
          style={{ 
            padding: '10px 16px',
            borderRadius: 6,
            border: '1px solid #6c757d',
            background: ua.skipped ? '#495057' : '#6c757d',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Skip
        </button>
        <button 
          onClick={handleMark} 
          style={{ 
            padding: '10px 16px',
            borderRadius: 6,
            border: '1px solid #6c757d',
            background: ua.marked ? '#495057' : '#6c757d',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {ua.marked ? 'Unmark' : 'Mark for Review'}
        </button>
        <button 
          onClick={goNext} 
          disabled={currentSectionPosition === sectionLength - 1}
          style={{
            padding: '10px 16px',
            borderRadius: 6,
            border: '1px solid #6c757d',
            background: currentSectionPosition === sectionLength - 1 ? '#e9ecef' : '#6c757d',
            color: currentSectionPosition === sectionLength - 1 ? '#6c757d' : '#fff',
            cursor: currentSectionPosition === sectionLength - 1 ? 'not-allowed' : 'pointer',
            fontSize: '14px'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
