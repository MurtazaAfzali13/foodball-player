"use client";
import { useState } from "react";

export default function SharePlayerForm({ onAddPlayer }) {
  const [player, setPlayer] = useState({
    name: "",
    video: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!player.name || !player.video) return;
    onAddPlayer(player); // اضافه کردن به آرایه اصلی در parent
    setPlayer({ name: "", video: "", description: "" });
  };

  return (
    <div className="text-center my-12">
      <form onSubmit={handleSubmit} className="mt-0 flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Player Name"
          value={player.name}
          onChange={(e) => setPlayer({ ...player, name: e.target.value })}
          className="w-80 p-3 rounded-2xl text-black font-semibold shadow-inner"
          required
        />
        <input
          type="text"
          placeholder="Video Path (e.g., /videos/myvideo.mp4)"
          value={player.video}
          onChange={(e) => setPlayer({ ...player, video: e.target.value })}
          className="w-80 p-3 rounded-2xl text-black font-semibold shadow-inner"
          required
        />
        <textarea
          placeholder="Description"
          value={player.description}
          onChange={(e) => setPlayer({ ...player, description: e.target.value })}
          className="w-80 p-3 rounded-2xl text-black font-semibold shadow-inner"
        />
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-green-500 text-black font-bold px-6 py-3 rounded-xl transition duration-300"
        >
          Share
        </button>
      </form>
    </div>
  );
}
