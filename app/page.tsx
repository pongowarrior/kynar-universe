// app/page.tsx
'use client'; // This component must run on the client side

import { useState } from 'react';
import { getResultFaction, QUIZ_QUESTIONS } from "@/components/QuizLogic";
import { FACTIONS, FactionSlug } from "@/lib/lore";
import ResultPage from "@/components/ResultPage"; 
import Head from 'next/head'; // Next.js component for metadata

export default function FactionQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState(new Array(FACTIONS.length).fill(0));
  const [resultSlug, setResultSlug] = useState<FactionSlug | null>(null);

  const handleAnswerClick = (answerIndex: number) => {
    const question = QUIZ_QUESTIONS[currentQuestion];
    const newScores = [...scores];
    
    // Add points from the selected answer to the running total
    question.answers[answerIndex].score.forEach((points, index) => {
      newScores[index] += points;
    });

    setScores(newScores);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      // Move to the next question
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz finished - set the result slug
      const finalResultSlug = getResultFaction(newScores);
      setResultSlug(finalResultSlug);
    }
  };

  if (resultSlug) {
    // If the quiz is finished, render the result page
    return <ResultPage factionSlug={resultSlug} />;
  }

  // If the quiz is running, render the current question
  const question = QUIZ_QUESTIONS[currentQuestion];
  const progressPercent = Math.round(((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100);

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      
      {/* Quiz Container */}
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-2xl p-8 transition-all duration-500">
        
        <h1 className="text-3xl font-extrabold mb-2 text-center text-cyan-400">
          The Rite of Designation
        </h1>
        <p className="text-center text-gray-400 mb-8">
          You are 13. Your powers have manifested. Choose your path.
        </p>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="text-sm font-medium text-gray-400 mb-1">
            Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-cyan-500 h-2.5 rounded-full transition-all duration-700 ease-out" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Question Area */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-100">
          {question.question}
        </h2>
        
        {/* Answers */}
        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              className="w-full text-left p-4 border border-gray-700 rounded-lg hover:border-cyan-500 transition-all duration-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
            >
              <span className="font-medium text-lg">{answer.text}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
