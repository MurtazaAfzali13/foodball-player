const players = [
    {
      name: "Cristiano Ronaldo",
      avatar: "/images/ronaldo1.jpg",
      skills: { speed: 95, shooting: 98, passing: 85 },
      description: "A football icon known for speed, skill, and record-breaking goal-scoring feats worldwide.",
      profile: {
        goalsClub: 700,
        gamesClub: 950,
        goalsNational: 120,
        gamesNational: 180,
        penalties: 140,
        team: "Al Nassr FC",
        nationalTeam: "Portugal",
        ballonDor: "5 🏆",
        goldenBoot: "4 👟",
        clubTitles: "34 🏟️",
        nationalTitles: "1 🌍"
      }
    },
    {
      name: "Lionel Messi",
      avatar: "/images/messi1.jpg",
      skills: { speed: 90, shooting: 95, passing: 92 },
      description: "Argentinian football genius, renowned for dribbling, passing, and goal-scoring.",
      profile: {
        goalsClub: 750,
        gamesClub: 900,
        goalsNational: 105,
        gamesNational: 170,
        penalties: 120,
        team: "Inter Miami CF",
        nationalTeam: "Argentina",
        ballonDor: "7 🏆",
        goldenBoot: "6 👟",
        clubTitles: "35 🏟️",
        nationalTitles: "3 🌍"
      }
    },
    {
      name: "Kylian Mbappé",
      avatar: "/images/mbappa1.jpg",
      skills: { speed: 97, shooting: 90, passing: 84 },
      description: "French star known for explosive pace, lethal finishing, and dominance at a young age.",
      profile: {
        goalsClub: 250,
        gamesClub: 300,
        goalsNational: 40,
        gamesNational: 70,
        penalties: 20,
        team: "Paris Saint-Germain",
        nationalTeam: "France",
        ballonDor: "1 🏆",
        goldenBoot: "2 👟",
        clubTitles: "14 🏟️",
        nationalTitles: "2 🌍"
      }
    },
    {
      name: "Jude Bellingham",
      avatar: "/images/jude1.jpg",
      skills: { speed: 88, shooting: 86, passing: 90 },
      description: "English midfielder praised for vision, maturity, and all-around ability at a young age.",
      profile: {
        goalsClub: 35,
        gamesClub: 100,
        goalsNational: 6,
        gamesNational: 25,
        penalties: 5,
        team: "Real Madrid",
        nationalTeam: "England",
        ballonDor: "0 🏆",
        goldenBoot: "0 👟",
        clubTitles: "3 🏟️",
        nationalTitles: "0 🌍"
      }
    },
    {
      name: "Erling Haaland",
      avatar: "/images/haland2.jpg",
      skills: { speed: 92, shooting: 96, passing: 78 },
      description: "Norwegian striker feared for strength, pace, and incredible goal-scoring instincts.",
      profile: {
        goalsClub: 150,
        gamesClub: 180,
        goalsNational: 30,
        gamesNational: 40,
        penalties: 15,
        team: "Manchester City",
        nationalTeam: "Norway",
        ballonDor: "0 🏆",
        goldenBoot: "1 👟",
        clubTitles: "5 🏟️",
        nationalTitles: "0 🌍"
      }
    },
    {
      name: "Mohamed Salah",
      avatar: "/images/mohammad1.jpg",
      skills: { speed: 96, shooting: 91, passing: 82 },
      description: "Egyptian winger famed for speed, dribbling, and consistent goal-scoring at Liverpool.",
      profile: {
        goalsClub: 220,
        gamesClub: 300,
        goalsNational: 50,
        gamesNational: 80,
        penalties: 25,
        team: "Liverpool FC",
        nationalTeam: "Egypt",
        ballonDor: "0 🏆",
        goldenBoot: "2 👟",
        clubTitles: "10 🏟️",
        nationalTitles: "0 🌍"
      }
    }
  ];
  
  export function getAllPlayers() {
    return players;
  }
  