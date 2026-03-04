export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

export type GameStatus = 'DIFFICULTY_SELECT' | 'PLAYING' | 'WON' | 'LOST';

export interface DifficultySetting {
  level: number;
  name: string;
  description: string;
  totalTime: number;
  bonusTime: number;
  color: string;
  stars: number;
}

export const DIFFICULTIES: DifficultySetting[] = [
  {
    level: 0,
    name: "Juda Oson",
    description: "Eng asosiy savollar",
    totalTime: 20,
    bonusTime: 5,
    color: "bg-emerald-500",
    stars: 1,
  },
  {
    level: 1,
    name: "Oson",
    description: "Oddiy geografik bilimlar",
    totalTime: 18,
    bonusTime: 4,
    color: "bg-blue-500",
    stars: 2,
  },
  {
    level: 2,
    name: "O‘rta",
    description: "Standart daraja",
    totalTime: 15,
    bonusTime: 3,
    color: "bg-yellow-500",
    stars: 3,
  },
  {
    level: 3,
    name: "Qiyin",
    description: "Murakkabroq savollar",
    totalTime: 12,
    bonusTime: 2,
    color: "bg-orange-500",
    stars: 4,
  },
  {
    level: 4,
    name: "Ekspert",
    description: "Haqiqiy bilimdonlar uchun",
    totalTime: 10,
    bonusTime: 1,
    color: "bg-red-500",
    stars: 5,
  },
];

export const TOTAL_QUESTIONS = 7;
