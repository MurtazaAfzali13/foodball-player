import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import PlayersGrid from '@/components/player_item/players-grid';
import { getPlayers } from '@/lib/players';

async function Players() {
  const players = await getPlayers();

  return <PlayersGrid players={players} />;
}

export default function PlayersPage() {
  return (
    <>
      <header className={classes.header}>
      <h1>
  Legendary footballers, celebrated{' '}
  <span className={classes.highlight}>by fans</span>
</h1>
<p>
  Explore profiles of your favorite players and relive their greatest moments on the field.
</p>

        <p className={classes.cta}>
          <Link href="/foodballs/shareplayer">Share Your Favorite foodball player</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching foodball players...</p>}>
          <Players />
        </Suspense>
      </main>
    </>
  );
}
