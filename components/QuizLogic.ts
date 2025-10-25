import { FactionSlug } from "@/lib/lore";

// The 'score' array should always have 6 elements, one for each faction (Velin, Thalen, Orren, Velkan, Serath, Kyreth)
interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    // Points are given in the order of FACTIONS: [Velin, Thalen, Orren, Velkan, Serath, Kyreth]
    score: number[];
  }[];
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "The Fold is under siege. Your top priority is:",
    answers: [
      { text: "Restore the Chain of Command and enforce order.", score: [3, 0, 1, 0, 0, 0] }, // Velin
      { text: "Protect the civilians and the city infrastructure.", score: [0, 0, 0, 0, 3, 0] }, // Serath
      { text: "Neutralize the central threat with immediate, focused force.", score: [0, 0, 3, 0, 0, 0] }, // Orren
    ],
  },
  {
    id: 2,
    question: "What is your philosophy on power and its use?",
    answers: [
      { text: "Power must be used to dismantle unjust systems.", score: [0, 0, 0, 0, 0, 3] }, // Kyreth
      { text: "Power is a tool for diplomacy and maintaining balance.", score: [0, 0, 0, 3, 0, 0] }, // Velkan
      { text: "Power is meant for the elite who have earned the right to wield it.", score: [3, 0, 0, 0, 0, 0] }, // Velin
    ],
  },
  {
    id: 3,
    question: "A dangerous secret is discovered. What do you do?",
    answers: [
      { text: "Archive it immediately and begin in-depth study.", score: [0, 3, 0, 0, 0, 0] }, // Thalen
      { text: "Disclose it only to those who absolutely need to know, for the greater good.", score: [0, 0, 0, 3, 0, 0] }, // Velkan
      { text: "Demand the ruling council immediately address the implications.", score: [3, 0, 0, 0, 0, 0] }, // Velin
    ],
  },
  {
    id: 4,
    question: "Which term best describes your personal code?",
    answers: [
      { text: "Honor and Duty.", score: [0, 0, 3, 0, 0, 0] }, // Orren
      { text: "Continuity and Unity.", score: [0, 0, 0, 0, 3, 0] }, // Serath
      { text: "Rejection and Freedom.", score: [0, 0, 0, 0, 0, 3] }, // Kyreth
    ],
  },
  {
    id: 5,
    question: "You have a free afternoon. Where do you go?",
    answers: [
      { text: "To the deepest part of the Fold's library archives.", score: [0, 3, 0, 0, 0, 0] }, // Thalen
      { text: "A hidden vantage point to observe the city unnoticed.", score: [0, 0, 0, 3, 0, 0] }, // Velkan
      { text: "The largest public square to enjoy the cultural heart of the city.", score: [0, 0, 0, 0, 3, 0] }, // Serath
    ],
  },
  {
    id: 6,
    question: "What is the biggest threat to Kynar society?",
    answers: [
      { text: "Ignorance and the loss of our true history.", score: [0, 3, 0, 0, 0, 0] }, // Thalen
      { text: "The tyrannical rule of the established government.", score: [0, 0, 0, 0, 0, 3] }, // Kyreth
      { text: "External attack from hostile human forces.", score: [0, 0, 3, 0, 0, 0] }, // Orren
    ],
  },
  {
    id: 7,
    question: "If you could manifest any power, what would it be?",
    answers: [
      { text: "The ability to influence or control the minds of others.", score: [3, 0, 0, 0, 0, 0] }, // Velin
      { text: "The power to perfectly mimic any person or object.", score: [0, 0, 0, 3, 0, 0] }, // Velkan
      { text: "The power of regeneration and healing.", score: [0, 0, 0, 0, 3, 0] }, // Serath
    ],
  },
  {
    id: 8,
    question: "How do you handle conflict with a rival Kynar?",
    answers: [
      { text: "I confront them directly and decisively.", score: [0, 0, 3, 0, 0, 0] }, // Orren
      { text: "I gather data on their weaknesses before acting.", score: [0, 3, 0, 0, 0, 0] }, // Thalen
      { text: "I work through intermediaries to mediate a resolution.", score: [0, 0, 0, 3, 0, 0] }, // Velkan
    ],
  },
  {
    id: 9,
    question: "Your primary ambition in life is to:",
    answers: [
      { text: "Hold a position of ultimate authority and influence.", score: [3, 0, 0, 0, 0, 0] }, // Velin
      { text: "Live a life outside the rules, unbound by Faction politics.", score: [0, 0, 0, 0, 0, 3] }, // Kyreth
      { text: "Ensure the Kynar way of life survives another generation.", score: [0, 0, 0, 0, 3, 0] }, // Serath
    ],
  },
  {
    id: 10,
    question: "Which of the Origin 6 principles do you value most?",
    answers: [
      { text: "The creation of a safe, hidden sanctuary (The Fold).", score: [0, 0, 0, 3, 0, 0] }, // Velkan
      { text: "The establishment of a rigid, clear hierarchy (The Council).", score: [3, 0, 0, 0, 0, 0] }, // Velin
      { text: "The gathering of all knowledge to prevent past errors (The Archives).", score: [0, 3, 0, 0, 0, 0] }, // Thalen
    ],
  },
];

export const getResultFaction = (scores: number[]): FactionSlug => {
  let maxScore = -1;
  let maxIndex = 0;
  
  // Factions are ordered: [Velin, Thalen, Orren, Velkan, Serath, Kyreth]
  const factionSlugs: FactionSlug[] = ['velin', 'thalen', 'orren', 'velkan', 'serath', 'kyreth'];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      maxIndex = i;
    } 
  }
  
  return factionSlugs[maxIndex];
};
