
import React, { useState, useEffect } from 'react';
import { Game } from '../types';
import { extractPlaceId, getRobloxThumbnail } from '../services/robloxService';

interface GameCardProps {
  game: Game;
  index: number;
}

const formatNumber = (num: number): string => {
  if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1)}B`;
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
};

const GameCard: React.FC<GameCardProps> = ({ game, index }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>(game.thumbnail);
  const [hasError, setHasError] = useState(false);
  const fallbackThumbnail = `https://picsum.photos/seed/${game.name}/512/512`;

  useEffect(() => {
    let isMounted = true;
    const fetchThumbnail = async () => {
      const placeId = extractPlaceId(game.url);
      if (placeId) {
        const newThumbnail = await getRobloxThumbnail(placeId);
        if (isMounted && newThumbnail) {
          setThumbnailUrl(newThumbnail);
        }
      }
    };
    
    fetchThumbnail();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.url]);

  const handleImageError = () => {
    if (!hasError) {
      setThumbnailUrl(fallbackThumbnail);
      setHasError(true);
    }
  };

  return (
    <a
      href={game.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/50 hover:border-indigo-600 backdrop-blur-sm"
      style={{ animation: `fadeInUp 0.5s ${index * 0.05}s ease-out backwards` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={`Thumbnail for ${game.name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={handleImageError}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {game.playing > 0 && (
            <div className="flex items-center gap-1.5 text-xs font-bold text-white bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {formatNumber(game.playing)}
            </div>
          )}
          {game.visits > 0 && (
            <div className="flex items-center gap-1.5 text-xs font-bold text-white bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
              {formatNumber(game.visits)}
            </div>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white truncate mb-2 group-hover:text-indigo-400 transition-colors">
          {game.name}
        </h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {game.category.slice(0, 3).map((cat) => (
            <span key={cat} className="px-2.5 py-0.5 text-xs font-semibold text-indigo-300 bg-indigo-500/20 rounded-full">
              {cat}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-400 h-20 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical]">
          {game.description}
        </p>
      </div>
    </a>
  );
};

export default GameCard;
