import Image from 'next/image';

const features = [
  {
    title: 'AI-Powered Automation',
    description: 'Deploy intelligent agents that automate complex business processes with state-of-the-art AI technology.',
    icon: '/window.svg',
  },
  {
    title: 'Enterprise Integration',
    description: 'Seamlessly integrate AI agents with your existing tools and workflows through our robust API.',
    icon: '/globe.svg',
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your AI agents performance with comprehensive analytics and monitoring.',
    icon: '/file.svg',
  },
];

export default function Features() {
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to scale your AI operations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our platform provides enterprise-grade tools and features to help you harness the power of AI agents effectively.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="group relative transform transition-all hover:scale-105">
                <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10 hover:ring-blue-500/20 dark:hover:ring-blue-400/20 transition-all duration-300">
                  <div className="relative h-12 w-12 mb-6 bg-blue-600/10 dark:bg-blue-400/10 rounded-lg p-2">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className="h-8 w-8 text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                    {feature.title}
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}