// components/ResultPage.tsx
'use client'; 
import { FACTIONS, FactionSlug } from "@/lib/lore";
import Link from 'next/link';

interface ResultPageProps {
  factionSlug: FactionSlug;
}

export default function ResultPage({ factionSlug }: ResultPageProps) {
  const faction = FACTIONS.find(f => f.slug === factionSlug);

  if (!faction) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-3xl">Designation Failed. Unknown Faction.</h1>
      </div>
    );
  }

  // --- VIRAL MECHANICS ---
  const shareText = `I have completed the Rite of Designation and been marked as ${faction.tagline}: ${faction.name}! Which faction would you join?`;
  
  // This URL is what people will share. Use kynaruniverse.co.uk!
  const shareUrl = `https://www.kynaruniverse.co.uk/`; // Linking back to the quiz start

  const handleShare = () => {
    // Use the native share dialogue on mobile
    if (navigator.share) {
      navigator.share({
        title: 'Kynar Universe: Rite of Designation',
        text: shareText,
        url: shareUrl,
      });
    } else {
      // Fallback for desktop: opens a new window with a pre-populated Tweet
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    }
  };

  return (
    <div className={`min-h-screen ${faction.color} text-white flex flex-col items-center justify-center p-4`}>
      <div className="w-full max-w-3xl bg-gray-900 bg-opacity-95 rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        
        <p className="text-xl font-medium mb-2">The Council has spoken.</p>
        
        <h1 className="text-6xl font-black mb-4 uppercase tracking-wider text-shadow-lg">
          {faction.name}
        </h1>
        
        <h2 className="text-3xl font-light mb-8 italic">
          "{faction.tagline}"
        </h2>
        
        <div className="bg-gray-800 p-6 rounded-xl mb-8 border-l-4 border-cyan-400 text-left">
          <p className="text-lg leading-relaxed">{faction.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li><strong>Core Value:</strong> {faction.coreValue}</li>
            <li><strong>Role:</strong> {faction.role}</li>
            <li><strong>Aesthetic:</strong> {faction.aesthetic}</li>
          </ul>
        </div>

        {/* The Viral Button: High visibility, high shareability */}
        <button
          onClick={handleShare}
          className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-bold rounded-full shadow-sm text-gray-900 bg-cyan-400 hover:bg-cyan-300 transition duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500 mb-4"
        >
          SHARE MY FACTION & CHALLENGE A FRIEND 🤝
        </button>

        <div className="mt-6 text-gray-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors duration-200 border-b border-gray-600">
                Start the Quiz again
            </Link>
        </div>
      </div>
    </div>
  );
}
