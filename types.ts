
export interface Game {
  name: string;
  description: string;
  thumbnail: string;
  url: string;
  category: string[];
  quality_score: number;
  playing: number;
  visits: number;
}
