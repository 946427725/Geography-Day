import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import { 
  TOTAL_QUESTIONS,
  GameStatus,
  DIFFICULTIES,
  DifficultySetting,
  Question
} from "./constants";
import { questions } from "./data/questions";
import { DifficultySelection } from "./components/DifficultySelection";
import { QuestionCard } from "./components/QuestionCard";
import { AnswerButton } from "./components/AnswerButton";
import { Timer } from "./components/Timer";
import { WaterLevel } from "./components/WaterLevel";
import { ScoutBoat } from "./components/ScoutBoat";
import { WinScreen } from "./components/WinScreen";
import { LoseScreen } from "./components/LoseScreen";

export default function App() {
  const [status, setStatus] = useState<GameStatus>('DIFFICULTY_SELECT');
  const [difficulty, setDifficulty] = useState<DifficultySetting | null>(null);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [answerStatus, setAnswerStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRefs = useRef<{
    click: HTMLAudioElement;
    correct: HTMLAudioElement;
    wrong: HTMLAudioElement;
    win: HTMLAudioElement;
    lose: HTMLAudioElement;
    bg: HTMLAudioElement;
  } | null>(null);

  useEffect(() => {
    audioRefs.current = {
      click: new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"),
      correct: new Audio("https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3"),
      wrong: new Audio("https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3"),
      win: new Audio("https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3"),
      lose: new Audio("https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3"),
      bg: new Audio("https://www.soundjay.com/nature/ocean-wave-1.mp3"),
    };
    audioRefs.current.bg.loop = true;
    audioRefs.current.bg.volume = 0.2;

    return () => {
      if (audioRefs.current) {
        Object.values(audioRefs.current).forEach((a: any) => {
          a.pause();
          a.src = "";
        });
      }
    };
  }, []);

  useEffect(() => {
    if (audioRefs.current) {
      if (isMuted) {
        audioRefs.current.bg.pause();
      } else if (status === 'PLAYING') {
        audioRefs.current.bg.play().catch(() => {});
      } else {
        audioRefs.current.bg.pause();
      }
    }
  }, [isMuted, status]);

  const playSound = useCallback((type: keyof typeof audioRefs.current) => {
    if (isMuted || !audioRefs.current) return;
    const sound = audioRefs.current[type];
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }
  }, [isMuted]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const startGame = (selectedDiff: DifficultySetting) => {
    playSound('click');
    
    // Load and shuffle questions for this difficulty
    const rawQuestions = questions[selectedDiff.level];
    const shuffledRaw = shuffleArray(rawQuestions);
    
    const formattedQuestions: Question[] = shuffledRaw.map((q, idx) => {
      const correctAnswer = q.options[q.correctIndex];
      const shuffledOptions = shuffleArray(q.options);
      return {
        id: idx + 1,
        text: q.question,
        options: shuffledOptions,
        correctAnswer: correctAnswer,
      };
    });

    setGameQuestions(formattedQuestions);
    setDifficulty(selectedDiff);
    setStatus('PLAYING');
    setCurrentQuestionIndex(0);
    setTimeLeft(selectedDiff.totalTime);
    setAnswerStatus('idle');
    setSelectedAnswer(null);
  };

  const handleRestart = () => {
    playSound('click');
    setStatus('DIFFICULTY_SELECT');
    setDifficulty(null);
    setGameQuestions([]);
    setCurrentQuestionIndex(0);
    setTimeLeft(0);
    setAnswerStatus('idle');
    setSelectedAnswer(null);
  };

  const currentQuestion = gameQuestions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    if (answerStatus !== 'idle' || !difficulty) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuestion.correctAnswer;

    if (isCorrect) {
      playSound('correct');
      setAnswerStatus('correct');
      setTimeLeft(prev => Math.min(difficulty.totalTime, prev + difficulty.bonusTime));
      
      setTimeout(() => {
        if (currentQuestionIndex + 1 < TOTAL_QUESTIONS) {
          setCurrentQuestionIndex(prev => prev + 1);
          setAnswerStatus('idle');
          setSelectedAnswer(null);
        } else {
          playSound('win');
          setStatus('WON');
        }
      }, 1000);
    } else {
      playSound('wrong');
      setAnswerStatus('wrong');
      setTimeout(() => {
        if (currentQuestionIndex + 1 < TOTAL_QUESTIONS) {
          setCurrentQuestionIndex(prev => prev + 1);
          setAnswerStatus('idle');
          setSelectedAnswer(null);
        } else {
          playSound('lose');
          setStatus('LOST');
        }
      }, 1000);
    }
  };

  useEffect(() => {
    if (status === 'PLAYING' && answerStatus === 'idle' && difficulty) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 0) {
            clearInterval(timerRef.current!);
            playSound('lose');
            setStatus('LOST');
            return 0;
          }
          return prev - 0.1;
        });
      }, 100);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [status, answerStatus, difficulty, playSound]);

  const waterPercentage = difficulty ? 100 - (timeLeft / difficulty.totalTime) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-game flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden font-sans">
      {/* Background Clouds */}
      <div className="absolute top-20 left-10 opacity-20 animate-pulse">
        <svg width="200" height="100" viewBox="0 0 200 100" fill="white">
          <circle cx="50" cy="50" r="40" />
          <circle cx="100" cy="50" r="50" />
          <circle cx="150" cy="50" r="40" />
        </svg>
      </div>
      <div className="absolute top-40 right-20 opacity-10 animate-pulse delay-700">
        <svg width="150" height="80" viewBox="0 0 150 80" fill="white">
          <circle cx="40" cy="40" r="30" />
          <circle cx="80" cy="40" r="40" />
          <circle cx="120" cy="40" r="30" />
        </svg>
      </div>

      {/* Mute Toggle */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      <AnimatePresence mode="wait">
        {status === 'DIFFICULTY_SELECT' && (
          <DifficultySelection key="diff-select" onSelect={startGame} />
        )}

        {status === 'PLAYING' && difficulty && currentQuestion && (
          <motion.div 
            key="playing"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 items-center"
          >
            {/* Left Side: Water Tank & Scout */}
            <div className="relative h-[500px] md:h-[600px] flex flex-col items-center justify-end">
              <div className="w-full h-full max-w-[280px] relative">
                <WaterLevel percentage={waterPercentage} />
                
                <div 
                  className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out"
                  style={{ bottom: `${waterPercentage}%`, marginBottom: '-20px' }}
                >
                  <ScoutBoat 
                    isWrong={answerStatus === 'wrong'} 
                    isCorrect={answerStatus === 'correct'} 
                    isLost={status === 'LOST'}
                  />
                </div>
              </div>
              <div className="mt-4 text-blue-100 font-bold text-xl uppercase tracking-widest">
                Suv Darajasi
              </div>
            </div>

            {/* Right Side: Game UI */}
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <QuestionCard 
                    question={currentQuestion.text} 
                    current={currentQuestionIndex + 1} 
                    total={TOTAL_QUESTIONS} 
                  />
                </div>
                <div className="ml-8">
                  <Timer timeLeft={timeLeft} maxTime={difficulty.totalTime} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((option) => (
                  <AnswerButton
                    key={option}
                    text={option}
                    onClick={() => handleAnswer(option)}
                    status={
                      selectedAnswer === option
                        ? (answerStatus === 'correct' ? 'correct' : 'wrong')
                        : (answerStatus !== 'idle' ? 'disabled' : 'idle')
                    }
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {status === 'WON' && (
          <WinScreen key="win" onRestart={handleRestart} />
        )}

        {status === 'LOST' && (
          <LoseScreen key="lose" onRestart={handleRestart} />
        )}
      </AnimatePresence>
    </div>
  );
}
