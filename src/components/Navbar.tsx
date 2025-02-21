import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Agents', href: '/agents' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Docs', href: '/docs' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.svg"
                alt="AI Agents Marketplace Logo"
                width={32}
                height={32}
                className="dark:invert"
              />
              <span className="font-semibold text-xl">AI Agents</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="/login"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}