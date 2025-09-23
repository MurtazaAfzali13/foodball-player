

import { getPlayer } from "@/lib/players";
import Link from "next/link";


export default function ImagePage({ params }) {
  const player = params.slug;
  const playerImage=getPlayer(player)
  return (
    <div className="modal-backdrop">
      <div className="modal-container" role="dialog" aria-modal="true">
        <Link
          href={`/foodballs/${playerImage.slug}`}
          aria-label="Close image"
          className="modal-close"
        >
          ×
        </Link>
        <img src={playerImage.image} alt={playerImage.title} />
      </div>
      <form action="dialog">
        <button>close</button>
      </form>
    </div>
  );
}
