import Image from 'next/image';
import { notFound } from 'next/navigation';


import classes from './page.module.css';
import { getPlayer } from '@/lib/players';
import Link from 'next/link';

export default function MealDetailsPage({ params }) {
  const player = getPlayer(params.slug);

  if (!player) {
    notFound();
  }

  player.instructions = player.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
        <Link href={`/foodballs/${player.slug}/image`}> <Image src={player.image} alt={player.title} fill /></Link>
        </div>
        <div className={classes.headerText}>
          <h1>{player.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${player.creator_email}`}>{player.creator}</a>
          </p>
          <p className={classes.summary}>{player.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: player.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
