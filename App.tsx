
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import GameCard from './components/GameCard';
import Spinner from './components/Spinner';
import EmptyState from './components/EmptyState';
import { Game } from './types';
import { INITIAL_GAMES } from './constants';

const AnimatedBackground: React.FC = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-600/50 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-600/50 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-600/50 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    <style>{`
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }
      .animate-blob { animation: blob 7s infinite; }
    `}</style>
  </div>
);

const App: React.FC = () => {
  const [games] = useState<Game[]>(INITIAL_GAMES);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredGames = useMemo(() => {
    return games
      .filter((game) => {
        const matchesCategory = activeCategory === 'All' || game.category.includes(activeCategory);
        const matchesSearch =
          searchTerm.trim() === '' ||
          game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => b.quality_score - a.quality_score || a.name.localeCompare(b.name));
  }, [games, searchTerm, activeCategory]);
  
  return (
    <>
      <AnimatedBackground />
      <main className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        <Header />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {filteredGames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredGames.map((game, index) => (
                  <GameCard key={`${game.name}-${game.url}`} game={game} index={index} />
                ))}
              </div>
            ) : (
              <EmptyState />
            )}
          </>
        )}
      </main>
    </>
  );
};

export default App;
