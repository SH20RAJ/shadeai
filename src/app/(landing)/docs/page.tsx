import Link from 'next/link';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Introduction', href: '/docs/introduction' },
      { name: 'Quick Start Guide', href: '/docs/quickstart' },
      { name: 'Installation', href: '/docs/installation' },
      { name: 'Basic Concepts', href: '/docs/concepts' }
    ]
  },
  {
    title: 'Core Features',
    items: [
      { name: 'AI Agents Overview', href: '/docs/ai-agents' },
      { name: 'Integration Guide', href: '/docs/integration' },
      { name: 'API Reference', href: '/docs/api' },
      { name: 'Security', href: '/docs/security' }
    ]
  },
  {
    title: 'Advanced Topics',
    items: [
      { name: 'Custom Agents', href: '/docs/custom-agents' },
      { name: 'Performance Optimization', href: '/docs/optimization' },
      { name: 'Best Practices', href: '/docs/best-practices' },
      { name: 'Troubleshooting', href: '/docs/troubleshooting' }
    ]
  }
];

export default function Docs() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about using our AI Agents platform
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition flex items-center group"
                      >
                        <svg
                          className="h-5 w-5 mr-2 text-gray-400 group-hover:text-blue-500 transition"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need Help?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Contact Support
            <svg
              className="ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}