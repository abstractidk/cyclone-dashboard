import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white flex gap-6 justify-center">
      <Link href="/">Home</Link>
      <Link href="/docs">Docs</Link>
      <Link href="/support">Support</Link>
      <Link href="/purchase">Purchase</Link>
    </nav>
  );
}
