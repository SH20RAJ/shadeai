import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '/signup',
    price: { monthly: '$99' },
    description: 'Perfect for small teams getting started with AI automation.',
    features: [
      '5 AI Agents',
      '100,000 API calls/month',
      'Basic analytics',
      'Email support',
      'Community access'
    ],
    featured: false
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '/signup',
    price: { monthly: '$299' },
    description: 'Ideal for growing businesses scaling their AI operations.',
    features: [
      'Unlimited AI Agents',
      '1,000,000 API calls/month',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom integrations',
      'Team collaboration tools'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/contact',
    price: { monthly: 'Custom' },
    description: 'Dedicated solutions for large-scale enterprise needs.',
    features: [
      'Custom AI Agent development',
      'Unlimited API calls',
      'Enterprise analytics',
      'Dedicated support team',
      'SLA guarantees',
      'Custom security features',
      'On-premise deployment option'
    ],
    featured: false
  },
];

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Choose the right plan for your business
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
          Flexible pricing options to support your AI automation journey, from startups to enterprise organizations.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-8 ring-1 ring-gray-900/10 dark:ring-white/10 ${tier.featured ? 'bg-blue-600 text-white lg:order-first lg:col-span-1' : 'bg-white dark:bg-gray-900'} transform transition-all hover:scale-105 hover:shadow-xl`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 className={`text-lg font-semibold leading-8 ${tier.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {tier.name}
                </h3>
              </div>
              <p className={`mt-4 text-sm leading-6 ${tier.featured ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className={`text-4xl font-bold tracking-tight ${tier.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{tier.price.monthly}</span>
                <span className={`text-sm font-semibold leading-6 ${tier.featured ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className={`h-6 w-5 flex-none ${tier.featured ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={tier.featured ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={`mt-8 block rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.featured ? 'bg-white text-blue-600 hover:bg-blue-50 focus-visible:outline-white' : 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600 dark:hover:bg-blue-500'}`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}