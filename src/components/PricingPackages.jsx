export default function PricingPackages({ onContactClick }) {
  const packages = [
    {
      name: 'Starter',
      price: 'Custom',
      target: 'Early-stage tokens',
      features: [
        'Comprehensive strategy consultation',
        'Complete documentation preparation',
        'Soft outreach to niche exchanges',
        'Starter liquidity plan',
        'Tokenomics optimization',
      ],
      cta: 'Apply — Starter',
    },
    {
      name: 'Growth',
      price: 'Custom',
      target: 'Growth-stage tokens',
      features: [
        'All Starter features, plus:',
        'Tier 2/Tier 1 exchange negotiation',
        'Funding assistance & investor intros',
        'Professional market maker introduction',
        'Enhanced compliance support',
      ],
      cta: 'Apply — Growth',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      target: 'Enterprise-ready tokens',
      features: [
        'All Growth features, plus:',
        'Direct Tier-1 listings',
        'Funding up to $10M',
        '24/7 launch operations',
        'Post-listing protection & monitoring',
      ],
      cta: 'Apply — Enterprise',
    },
  ]

  return (
    <section id="packages" className="py-24 bg-victus-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-victus-text">Transparent</span>{' '}
            <span className="text-gradient">pricing packages</span>
          </h2>
          <p className="text-xl text-victus-text-light max-w-3xl mx-auto">
            We are the most cost-effective professional listing partner
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-victus-bg rounded-3xl p-8 border-2 transition-all duration-300 ${
                pkg.popular
                  ? 'border-victus-violet shadow-2xl scale-105'
                  : 'border-victus-border hover:border-victus-violet/50 hover:shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-victus-violet to-victus-cyan text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="font-display text-3xl font-bold mb-2 text-victus-text">
                {pkg.name}
              </h3>
              <p className="text-victus-text-light mb-6">{pkg.target}</p>

              <div className="mb-8">
                <div className="text-4xl font-mono font-bold text-victus-cyan mb-1">
                  {pkg.price}
                </div>
                <p className="text-sm text-victus-text-light">Custom pricing based on project</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-victus-violet mr-3">✓</span>
                    <span className="text-victus-text-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onContactClick}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-victus-violet to-victus-cyan text-white hover:shadow-xl hover:scale-105 glow-purple'
                    : 'bg-victus-card text-victus-cyan hover:bg-victus-card/80'
                }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

