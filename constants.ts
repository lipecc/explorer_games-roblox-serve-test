
import { Game } from './types';

export const GAME_CATEGORIES: string[] = [
    "All", "Terror", "FPS", "RPG", "Ação", "Anime", "Simulação", 
    "Competitivo", "Quebra-Cabeça", "Estratégia", "Sobrevivência", "Stealth"
];

export const INITIAL_GAMES: Game[] = [
    {
        name: "DOORS",
        description: "Jogo de terror atmosférico com entidades únicas e mecânicas inovadoras. Cada porta apresenta novos desafios.",
        thumbnail: "https://tr.rbxcdn.com/2c993df62e2303f8c4c761477bd4a872/512/512/Image/Webp",
        url: "https://www.roblox.com/games/6516141723/DOORS",
        category: ["Terror", "Quebra-Cabeça"],
        quality_score: 10,
        playing: 13464,
        visits: 6667460258
    },
    {
        name: "Phantom Forces",
        description: "O padrão ouro dos jogos FPS no Roblox com armas realistas, mapas excelentes e jogabilidade competitiva.",
        thumbnail: "https://tr.rbxcdn.com/52636c668a60c95c88c0a0117df6a525/512/512/Image/Webp",
        url: "https://www.roblox.com/games/292439477/Phantom-Forces",
        category: ["FPS", "Competitivo"],
        quality_score: 10,
        playing: 3455,
        visits: 1693731563
    },
    {
        name: "Deepwoken",
        description: "RPG hardcore com sistema de morte permanente, progressão profunda e construção de mundo incrível.",
        thumbnail: "https://tr.rbxcdn.com/218d50fb943dff841de363a9e06acba9/512/512/Image/Webp",
        url: "https://www.roblox.com/games/4111023553/Deepwoken",
        category: ["RPG", "Hardcore"],
        quality_score: 10,
        playing: 2156,
        visits: 245678901
    },
    {
        name: "The Mimic",
        description: "Terror baseado no folclore japonês com visuais impressionantes e atmosfera aterrorizante. Múltiplos capítulos com histórias únicas.",
        thumbnail: "https://tr.rbxcdn.com/fedcba0987654321/512/512/Image/Webp",
        url: "https://www.roblox.com/games/6243699076/The-Mimic",
        category: ["Terror"],
        quality_score: 10,
        playing: 5678,
        visits: 456789012
    },
    {
        name: "RIVALS",
        description: "FPS de próxima geração com gráficos incríveis e mecânicas de jogabilidade suaves.",
        thumbnail: "https://tr.rbxcdn.com/1357924680abcdef/512/512/Image/Webp",
        url: "https://www.roblox.com/games/17625359962/RIVALS",
        category: ["FPS", "Competitivo"],
        quality_score: 10,
        playing: 8901,
        visits: 123456789
    },
    {
        name: "Arsenal",
        description: "FPS rápido com progressão única de armas e excelente otimização.",
        thumbnail: "https://tr.rbxcdn.com/2468135790fedcba/512/512/Image/Webp",
        url: "https://www.roblox.com/games/286090429/Arsenal",
        category: ["FPS", "Ação"],
        quality_score: 9,
        playing: 12345,
        visits: 2345678901
    },
    {
        name: "Entry Point",
        description: "Jogo de assalto inspirado no Payday com mecânicas de stealth e múltiplas abordagens para missões.",
        thumbnail: "https://tr.rbxcdn.com/9876543210abcdef/512/512/Image/Webp",
        url: "https://www.roblox.com/games/740581508/Entry-Point",
        category: ["FPS", "Stealth"],
        quality_score: 9,
        playing: 2345,
        visits: 345678901
    },
    {
        name: "Tower of Hell",
        description: "Plataforma desafiador com torres geradas aleatoriamente e sem pontos de salvamento.",
        thumbnail: "https://tr.rbxcdn.com/abcd1234efgh5678/512/512/Image/Webp",
        url: "https://www.roblox.com/games/1962086868/Tower-of-Hell",
        category: ["Plataforma", "Competitivo"],
        quality_score: 9,
        playing: 15678,
        visits: 1234567890
    },
    {
        name: "3008",
        description: "Sobreviva em uma loja IKEA infinita. Construa bases durante o dia, sobreviva à equipe hostil à noite.",
        thumbnail: "https://tr.rbxcdn.com/5678abcd9012efgh/512/512/Image/Webp",
        url: "https://www.roblox.com/games/2768379856/3008",
        category: ["Terror", "Sobrevivência"],
        quality_score: 9,
        playing: 7890,
        visits: 567890123
    },
    {
        name: "Apeirophobia",
        description: "Navegue pelos Backrooms infinitos com gráficos realistas e horror atmosférico.",
        thumbnail: "https://tr.rbxcdn.com/0fd9d596d9c8ae0aef61af4d6ce3d3f5/150/150/Image/Webp",
        url: "https://www.roblox.com/games/9273658706/Backrooms",
        category: ["Terror", "Exploração"],
        quality_score: 9,
        playing: 4567,
        visits: 789012345
    },
    {
        name: "Bad Business",
        description: "FPS tático com mecânicas de movimento avançadas e personalização de armas.",
        thumbnail: "https://tr.rbxcdn.com/3233893879/512/512/Image/Webp",
        url: "https://www.roblox.com/games/3233893879/Bad-Business",
        category: ["FPS", "Competitivo"],
        quality_score: 9,
        playing: 5432,
        visits: 876543210
    },
    {
        name: "Arcane Odyssey",
        description: "RPG baseado em magia com gráficos bonitos e sistema inovador de criação de feitiços.",
        thumbnail: "https://tr.rbxcdn.com/3272915504/512/512/Image/Webp",
        url: "https://www.roblox.com/games/3272915504/Arcane-Odyssey",
        category: ["RPG", "Magia"],
        quality_score: 9,
        playing: 3210,
        visits: 987654321
    },
    {
        name: "Natural Disaster Survival",
        description: "Jogo clássico do Roblox com vários desastres naturais e mecânicas criativas de sobrevivência.",
        thumbnail: "https://tr.rbxcdn.com/189707/512/512/Image/Webp",
        url: "https://www.roblox.com/games/189707/Natural-Disaster-Survival",
        category: ["Sobrevivência", "Clássico"],
        quality_score: 8,
        playing: 3456,
        visits: 654321098
    },
    {
        name: "Theme Park Tycoon 2",
        description: "Construa e gerencie parques temáticos com opções incríveis de personalização.",
        thumbnail: "https://tr.rbxcdn.com/69184822/512/512/Image/Webp",
        url: "https://www.roblox.com/games/69184822/Theme-Park-Tycoon-2",
        category: ["Simulação", "Construção"],
        quality_score: 8,
        playing: 7890,
        visits: 109876543
    }
];
