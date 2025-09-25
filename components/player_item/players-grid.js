"use client";
import PlayerItem from "./player-item";
import classes from "./player-grid.module.css";
import { useState } from "react";

export default function MealsGrid({ players }) {
  const [search, setSearch] = useState("");

  const filteredPlayers = players.filter((player) =>
    player.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search Section */}
      <div className="flex justify-center my-6 sm:my-8 lg:my-12 px-4">
        <input
          type="text"
          placeholder="🔍 Search your favorite player..."
          className="w-full max-w-xs sm:max-w-md lg:max-w-3xl px-4 sm:px-6 py-3 sm:py-4 lg:py-5 text-lg sm:text-xl lg:text-2xl font-bold rounded-full 
                     border-2 sm:border-4 border-yellow-400 shadow-2xl
                     bg-gradient-to-r from-green-400 to-yellow-300
                     text-gray-900 placeholder-gray-700
                     focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-yellow-500 focus:border-green-600
                     transition duration-300 ease-in-out"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>


      {/* Players Grid */}
      <ul
        className={`${classes.meals} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6`}
      >
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <li
              key={player.id}
              className="transform transition duration-300 hover:scale-105"
            >
              <PlayerItem {...player} />
            </li>
          ))
        ) : (
          <p className="col-span-full text-center text-lg sm:text-xl font-semibold text-red-500 bg-red-100 py-3 sm:py-4 rounded-xl shadow-md mx-4">
            ❌ No players found. Try another name!
          </p>
        )}
      </ul>
    </>
  );
}
