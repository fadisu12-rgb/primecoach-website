import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-prime-bg">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-prime-accent mb-4">404</h1>
        <p className="text-xl text-prime-text-muted mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-prime-accent hover:bg-prime-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
