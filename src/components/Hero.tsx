import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-gray-900">
      <div className="w-full max-w-xl mx-auto text-center space-y-8">
        <Image
          src="/logo.svg"
          alt="AI Agents Logo"
          width={92}
          height={30}
          className="mx-auto dark:invert"
        />
        
        <div className="space-y-6">
          <h1 className="text-5xl font-normal text-gray-900 dark:text-white">
            AI Agents Marketplace
          </h1>
          <div className="flex flex-col items-center space-y-6">
            <div className="w-full max-w-2xl relative">
              <div className="relative rounded-full shadow-sm hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <Link
                  href="/marketplace"
                  className="w-full h-14 px-6 flex items-center text-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search AI agents...
                </Link>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/marketplace"
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
              >
                Explore Marketplace
              </Link>
              <Link
                href="/docs"
                className="px-4 py-2 text-sm bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}