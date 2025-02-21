import Image from 'next/image';
import Link from 'next/link';

const agents = [
  {
    id: 1,
    name: 'Data Analysis Agent',
    description: 'Powerful AI agent for data analysis and visualization',
    longDescription: 'Our Data Analysis Agent leverages advanced machine learning algorithms to process and analyze large datasets, providing actionable insights and beautiful visualizations. Perfect for businesses looking to make data-driven decisions.',
    image: '/agents/data-analysis.svg',
    price: '100 credits',
    category: 'Data Science',
    features: [
      'Advanced data processing',
      'Interactive visualizations',
      'Statistical analysis',
      'Automated reporting',
      'Real-time monitoring'
    ]
  },
  {
    id: 2,
    name: 'Code Assistant',
    description: 'AI-powered coding assistant for faster development',
    longDescription: 'The Code Assistant Agent helps developers write better code faster. With advanced code completion, bug detection, and refactoring suggestions, it\'s like having an expert programmer by your side.',
    image: '/agents/code-assistant.svg',
    price: '150 credits',
    category: 'Development',
    features: [
      'Intelligent code completion',
      'Bug detection and fixes',
      'Code refactoring suggestions',
      'Documentation generation',
      'Performance optimization tips'
    ]
  },
  {
    id: 3,
    name: 'Content Writer',
    description: 'Creative AI agent for content generation',
    longDescription: 'The Content Writer Agent helps create engaging, SEO-optimized content for your website, blog, or marketing materials. It understands your brand voice and generates content that resonates with your audience.',
    image: '/agents/content-writer.svg',
    price: '80 credits',
    category: 'Content',
    features: [
      'SEO optimization',
      'Brand voice matching',
      'Multi-format content',
      'Engagement analysis',
      'Automated proofreading'
    ]
  },
];

export default function Agents() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            AI Agents Directory
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Explore our collection of specialized AI agents
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="p-8">
                <div className="md:flex items-start space-x-6">
                  <div className="w-full md:w-1/3 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6 md:mb-0 relative">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {agent.name}
                      </h2>
                      <span className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        {agent.price}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {agent.longDescription}
                    </p>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {agent.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
                          >
                            <svg
                              className="h-5 w-5 text-blue-600 dark:text-blue-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 flex justify-end">
                      <Link
                        href="/signup"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}