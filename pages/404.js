import Link from 'next/link';

export default function Custom404() {
  return (
    <main>
      <h1>404 - Cette page n'existe pas...</h1>
      <Link href="/">
        <button className="btn-blue">Retour à l'accueil</button>
      </Link>
    </main>
  );
}