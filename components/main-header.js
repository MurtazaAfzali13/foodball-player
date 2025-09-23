"use client"
import Link from 'next/link';

import logoImg from '@/assets/icon/download.webp';
import classes from './main-header.module.css';
import { usePathname } from 'next/navigation';

export default function MainHeader() {
  const path=usePathname();
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img 
        className='rounded-full'
        src={logoImg.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
        <li>
  <Link
    href="/foodballs"
    className={
      path.startsWith("/foodballs")
        ? "bg-gradient-to-r from-green-500 to-yellow-500 text-white px-3 py-1 rounded"
        : undefined
    }
  >
    Foodball players
  </Link>
</li>
<li>
  <Link
    href="/community"
    className={
      path.startsWith("/community")
        ? "bg-gradient-to-r from-green-500 to-yellow-500 text-white px-3 py-1 rounded"
        : undefined
    }
  >
    Foodball Community
  </Link>
</li>

        </ul>
      </nav>
    </header>
  );
}
