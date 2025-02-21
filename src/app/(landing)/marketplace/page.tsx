import Image from 'next/image';
import Link from 'next/link';

const agents = [
  {
    id: 1,
    name: 'Data Analysis Agent',
    description: 'Powerful AI agent for data analysis and visualization',
    image: '/dummy.svg',
    price: '100 credits',
    category: 'Data Science'
  },
  {
    id: 2,
    name: 'Code Assistant',
    description: 'AI-powered coding assistant for faster development',
    image: '/dummy.svg',
    price: '150 credits',
    category: 'Development'
  },
  {
    id: 3,
    name: 'Content Writer',
    description: 'Creative AI agent for content generation',
    image: '/dummy.svg',
    price: '80 credits',
    category: 'Content'
  },
];

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            AI Agents Marketplace
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Discover and deploy powerful AI agents for your business
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-6">
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6 relative">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {agent.name}
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    {agent.price}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {agent.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {agent.category}
                  </span>
                  <Link
                    href={`/agents/${agent.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}