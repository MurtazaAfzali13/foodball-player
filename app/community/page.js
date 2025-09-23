"use client";
import { useState } from "react";

import Link from "next/link";

export default function CommunityPage() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const players = [
    {
      name: "Jude Bellingham",
      video: "/video/bellengam.mp4",
      description:
        "A midfield prodigy admired for his maturity, technical brilliance, and leadership at a young age.",
    },
    {
      name: "Cristiano Ronaldo",
      video: "/video/ronaldo.mp4",
      description:
        "A football icon known for his speed, skill, and record-breaking goal-scoring feats worldwide.",
    },
    {
      name: "Erling Haaland",
      video: "/video/haland.mp4",
      description:
        "A powerhouse striker with unmatched speed, strength, and a killer instinct in front of goal.",
    },
    {
      name: "Lamine Yamal",
      video: "/video/yamal.mp4",
      description:
        "A sensational young talent, dazzling fans with creativity and confidence beyond his years.",
    },
    {
      name: "Karim Benzema",
      video: "/video/karim.mp4",
      description:
        "A master of finesse and timing, renowned for his elegance and clinical finishing.",
    },
    {
      name: "Zlatan Ibrahimovic",
      video: "/video/zalatan.mp4",
      description:
        "A charismatic force of nature—Zlatan blends strength, flair, and a larger-than-life persona.",
    },
    {
      name: "Federico Valverde",
      video: "/video/valvirida.mp4",
      description:
        "A versatile engine of energy and grit, capable of dominating both ends of the pitch.",
    },
    {
      name: "Federico Valverde",
      video: "/video/doue.mp4",
      description:
        "A versatile engine of energy and grit, capable of dominating both ends of the pitch.",
    },
  ];

  
  return (
    <>
      {/* Header */}
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          One shared passion: <span className="text-yellow-400 uppercase">Football</span>
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Join our global football community and celebrate the beautiful game!
        </p>
      
      </header>

      {/* Players Grid */}
      <main className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-yellow-300">
          Rising & Legendary Players
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {players.map((player, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center bg-gradient-to-br from-green-500 to-yellow-400 rounded-3xl pb-8 overflow-hidden shadow-2xl cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={() => setSelectedPlayer(player)}
            >
              <video
                className="w-full h-48 object-cover mb-4 rounded-2xl shadow-lg"
                src={player.video}
                autoPlay
                loop
                muted
                playsInline
              />
              <p className="px-4">
                <strong className="block text-2xl mb-2 text-white">{player.name}</strong>
                <span className="text-gray-900">{player.description}</span>
              </p>
            </li>
          ))}
        </ul>
      </main>

      {/* Modal */}
      {selectedPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl w-11/12 md:w-3/4 lg:w-1/2 p-6 relative shadow-2xl animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-700 font-bold text-2xl"
              onClick={() => setSelectedPlayer(null)}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedPlayer.name}</h2>
            <video
              className="w-full h-64 object-cover rounded-xl mb-4"
              src={selectedPlayer.video}
              controls
            />
            <p className="text-gray-800">{selectedPlayer.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
