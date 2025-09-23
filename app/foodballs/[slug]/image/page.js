import { getPlayer } from "@/lib/players";


export default function ImagePage({ params }) {
  const player = params.slug;
  const playerImage=getPlayer(player)
  return (
    <div className="fullscreen-image">
      <img src={playerImage.image} alt={playerImage.title} />
    </div>
  );
}
