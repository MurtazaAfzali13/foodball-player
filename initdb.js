const sql = require('better-sqlite3');
const db = sql('players.db');

const footballPlayers = [
  {
    title: 'Cristiano Ronaldo',
    slug: 'cristiano-ronaldo',
    image: '/images/ronaldo1.jpg',
    summary:
      'Portuguese professional footballer, widely regarded as one of the greatest players of all time. Currently plays for Al Nassr and the Portugal national team.',
    instructions: `
      - 5-time Ballon d'Or winner.
      - All-time top scorer for Real Madrid.
      - Won league titles in England, Spain, and Italy.
      - UEFA Euro 2016 & Nations League winner with Portugal.
    `,
    creator: 'Jorge Mendes',
    creator_email: 'jmendes@gestifute.com',
  },
  {
    title: 'Lionel Messi',
    slug: 'lionel-messi',
    image: '/images/messi1.jpg',
    summary:
      'Argentinian footballer known for his extraordinary dribbling, passing, and goal-scoring ability. Currently plays for Inter Miami and the Argentina national team.',
    instructions: `
      - 8-time Ballon d'Or winner.
      - All-time top scorer for Barcelona.
      - 2022 FIFA World Cup Champion.
      - Olympic gold medalist (2008).
    `,
    creator: 'Jorge Messi',
    creator_email: 'jorgemessi@example.com',
  },

  {
    title: 'Jude Bellingham',
    slug: 'jude-bellingham',
    image: '/images/jude1.jpg',
    summary:
      'English midfield prodigy known for his maturity, skill, and impact at a young age, starring for Real Madrid and the England national team.',
    instructions: `
      - Named La Liga Player of the Season (2023–24) in his debut year with Real Madrid.
      - Played a key role in England’s Euro 2024 campaign.
      - Former Borussia Dortmund standout and Birmingham City academy graduate.
    `,
    creator: 'Mark Bellingham',
    creator_email: 'mark@bellinghamfamily.co.uk',
  }
,  

  {
    title: 'Luka Modrić',
    slug: 'luka-modric',
    image: '/images/modrich1.jpg',
    summary:
      'Croatian midfield maestro known for his vision, passing, and leadership, a key figure in Real Madrid’s success.',
    instructions: `
      - Won the Ballon d'Or in 2018, breaking Messi-Ronaldo dominance.
      - Led Croatia to the World Cup Final in 2018 and semi-final in 2022.
      - Multiple-time UEFA Champions League winner with Real Madrid.
    `,
    creator: 'Vlado Lemić',
    creator_email: 'vlado@eurotalents.hr',
  }
,  
  {
    title: 'Kylian Mbappé',
    slug: 'kylian-mbappe',
    image: '/images/mbappa1.jpg',
    summary:
      'French football star known for his speed and finishing. Plays for PSG and is a key figure for France’s national team.',
    instructions: `
      - 2018 FIFA World Cup winner.
      - Multiple-time Ligue 1 top scorer.
      - Youngest French player to score in a World Cup final.
    `,
    creator: 'Fayza Lamari',
    creator_email: 'fayza@mbappefamily.com',
  },
  {
    title: 'Erling Haaland',
    slug: 'erling-haaland',
    image: '/images/haland2.jpg',
    summary:
      'Norwegian striker known for his strength, speed, and goal-scoring consistency. Plays for Manchester City.',
    instructions: `
      - Premier League Golden Boot (2022–23).
      - Broke Premier League goal-scoring record for a single season.
      - UEFA Champions League top scorer.
    `,
    creator: 'Rafaela Pimenta',
    creator_email: 'rafaela@footballagents.com',
  },
  {
    title: 'Neymar Jr.',
    slug: 'neymar-jr',
    image: '/images/neymar.jpg',
    summary:
      'Brazilian forward known for flair, creativity, and technical skills. Plays for Al-Hilal and is a mainstay in Brazil’s national team.',
    instructions: `
      - Former Barcelona and PSG star.
      - Olympic Gold Medalist (2016).
      - One of Brazil’s all-time top scorers.
    `,
    creator: 'Wagner Ribeiro',
    creator_email: 'ribeiro@neymarcorp.com',
  },
  {
    title: 'Mohamed Salah',
    slug: 'mohamed-salah',
    image: '/images/mohammad1.jpg',
    summary:
      'Egyptian forward who rose to prominence at Liverpool with his incredible speed and finishing.',
    instructions: `
      - Premier League Golden Boot winner.
      - Helped Liverpool win UEFA Champions League (2019) and Premier League (2020).
      - African Footballer of the Year multiple times.
    `,
    creator: 'Ramzy Abbas',
    creator_email: 'ramzy@sporteg.com',
  },
  {
    title: 'karim benzema',
    slug: 'karim-benzema',
    image: '/images/karim.jpg',
    summary:
      'French striker renowned for his vision, technique, and finishing. Former Real Madrid legend, currently playing in Saudi Arabia.',
    instructions: `
      - 2022 Ballon d'Or winner.
      - Over 400 career goals.
      - 5-time UEFA Champions League winner.
    `,
    creator: 'Karim Djaziri',
    creator_email: 'karim@benzemaofficial.com',
  }
,  
  {
    title: 'kevin de bruyne',
    slug: 'kevin-de-bruyne',
    image: '/images/de.jpg',
    summary:
      'Polish striker known for his positioning and goal-scoring prowess. Plays for FC Barcelona.',
    instructions: `
      - 2-time European Golden Shoe winner.
      - Over 500 career goals.
      - FIFA Best Men’s Player (2020, 2021).
    `,
    creator: 'Cezary Kucharski',
    creator_email: 'cezary@lewanmanagement.com',
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS players (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO players VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const player of footballPlayers) {
    stmt.run(player);
  }
}

initData();
