"use client";
import { useState } from "react";
import Link from "next/link";

export default function CommunityPage() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const players = [
    {
      name: "Jude Bellingham",
      video: "https://www.youtube.com/embed/shh5QQCaOTo",
      description:
        "A midfield prodigy admired for his maturity, technical brilliance, and leadership at a young age.",
    },
    {
      name: "Cristiano Ronaldo",
      video: "https://www.youtube.com/embed/BBvVXaFdqxQ",
      description:
        "A football icon known for his speed, skill, and record-breaking goal-scoring feats worldwide.",
    },
    {
      name: "Erling Haaland",
      video: "https://www.youtube.com/embed/86hXk2LlFi4",
      description:
        "A powerhouse striker with unmatched speed, strength, and a killer instinct in front of goal.",
    },
    {
      name: "Lamine Yamal",
      video: "https://www.youtube.com/embed/vHeO-9G5rxo",
      description:
        "A sensational young talent, dazzling fans with creativity and confidence beyond his years.",
    },
    {
      name: "Karim Benzema",
      video: "https://www.youtube.com/embed/2YeQMtWoL_4",
      description:
        "A master of finesse and timing, renowned for his elegance and clinical finishing.",
    },
    {
      name: "Zlatan Ibrahimovic",
      video: "https://www.youtube.com/embed/OfS5MI_3_WE",
      description:
        "A charismatic force of nature—Zlatan blends strength, flair, and a larger-than-life persona.",
    },
    {
      name: "Federico Valverde",
      video: "https://www.youtube.com/embed/nPK1tg_n020",
      description:
        "A versatile engine of energy and grit, capable of dominating both ends of the pitch.",
    },
    {
      name: "Doue",
      video: "https://www.youtube.com/embed/YUDLhtfCz6c",
      description:
        "A versatile engine of energy and grit, capable of dominating both ends of the pitch.",
    },
  ];
  

  return (
    <>
      {/* Header */}
      <header className="text-center my-6 sm:my-8 lg:my-12 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">
          One shared passion:{" "}
          <span className="text-yellow-400 uppercase">Football</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto px-4">
          Join our global football community and celebrate the beautiful game!
        </p>
      </header>

      {/* Players Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center text-yellow-300">
          Rising & Legendary Players
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          {players.map((player, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center bg-gradient-to-br from-green-500 to-yellow-400 rounded-2xl sm:rounded-3xl pb-4 sm:pb-6 lg:pb-8 overflow-hidden shadow-2xl cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={() => setSelectedPlayer(player)}
            >
              <div className="w-full h-32 sm:h-40 lg:h-48 mb-3 sm:mb-4 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={player.video}
                  title={player.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="px-3 sm:px-4">
                <strong className="block text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2 text-white">
                  {player.name}
                </strong>
                <span className="text-gray-900 text-sm sm:text-base leading-relaxed">{player.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </main>

      {/* Modal */}
      {selectedPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-6 relative shadow-2xl animate-fadeIn max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-700 font-bold text-xl sm:text-2xl hover:text-gray-900 transition-colors"
              onClick={() => setSelectedPlayer(null)}
            >
              &times;
            </button>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 pr-8">{selectedPlayer.name}</h2>
            <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg sm:rounded-xl mb-3 sm:mb-4 overflow-hidden">
              <iframe
                className="w-full h-full"
                src={selectedPlayer.video}
                title={selectedPlayer.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{selectedPlayer.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
