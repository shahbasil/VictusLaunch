import { useInView } from 'react-intersection-observer'
import OutlineIcon from './OutlineIcon'

const steps = [
  {
    number: '01',
    title: 'Initial Discussion',
    description: 'Comprehensive consultation to understand your vision, goals, and specific requirements.',
    gradient: 'from-violet-600 via-victus-violet to-victus-purple',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description: 'Custom-tailored strategy with detailed execution roadmap for your exchange listings.',
    gradient: 'from-cyan-500 via-victus-cyan to-blue-500',
  },
  {
    number: '03',
    title: 'Guide & Fix',
    description: 'Tokenomics optimization, compliance refinement, and strategic improvements.',
    gradient: 'from-purple-600 via-victus-violet to-cyan-600',
  },
  {
    number: '04',
    title: 'Listing Execution',
    description: 'End-to-end seamless execution across your chosen centralized exchanges.',
    gradient: 'from-cyan-600 via-blue-600 to-violet-600',
  },
  {
    number: '05',
    title: 'Post-Listing Support',
    description: 'Continuous market making, monitoring, and strategic guidance post-launch.',
    gradient: 'from-violet-600 via-cyan-500 to-violet-600',
  },
]

export default function Roadmap() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <section id="roadmap" className="relative">
      {/* Header with Box and Connecting Line */}
      <div className="py-32 bg-gradient-to-b from-victus-bg via-victus-dark to-victus-bg relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-victus-violet rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-victus-cyan rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div ref={headerRef} className="inline-block relative">
            {/* Heading Box */}
            <div className={`bg-gradient-to-br from-victus-card/60 via-victus-dark/60 to-victus-card/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-transparent bg-clip-padding relative group hover:border-victus-violet/50 transition-all duration-500 ${headerInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                backgroundImage: 'linear-gradient(#141A26, #141A26), linear-gradient(to right, #8A3BFF, #00D1FF, #8A3BFF)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                WebkitMaskComposite: 'destination-out',
                maskComposite: 'exclude',
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-victus-violet/20 via-victus-cyan/20 to-victus-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight relative z-10">
                <span className="text-white block">A proven roadmap from</span>
                <span className="text-gradient block mt-2">preparation to launch</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Connecting Line to Step 1 */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-32 z-20">
          <div className="w-full h-full bg-gradient-to-b from-victus-violet via-victus-cyan to-transparent animate-pulse-soft"></div>
        </div>
      </div>

      {/* Full-screen Steps */}
      <div>
        {steps.map((step, index) => (
          <RoadmapStep key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  )
}

function RoadmapStep({ step, index }) {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  return (
    <div 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: index % 2 === 0 
          ? 'linear-gradient(135deg, #0A0E1A 0%, #14151A 50%, #0A0E1A 100%)'
          : 'linear-gradient(135deg, #050810 0%, #0F1724 50%, #050810 100%)'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className={`absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br ${step.gradient} rounded-full blur-3xl opacity-20 animate-pulse-slow`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br ${step.gradient} rounded-full blur-3xl opacity-10 animate-pulse-slow`} style={{ animationDelay: '1s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`gridGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8A3BFF" />
                <stop offset="100%" stopColor="#00D1FF" />
              </linearGradient>
            </defs>
            <path d="M 0,0 L 100,100 M 100,0 L 0,100" stroke={`url(#gridGradient-${index})`} strokeWidth="0.5"/>
            <path d="M 50,0 L 50,100 M 0,50 L 100,50" stroke={`url(#gridGradient-${index})`} strokeWidth="0.5"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-16 items-center ${
          inView ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000`}>
          {/* Left side - Visual */}
          <div className={`text-center md:text-left ${
            index % 2 === 0 ? 'md:order-1' : 'md:order-2'
          }`}>
            <div className="relative">
              {/* Large number */}
              <div className="text-6xl sm:text-7xl md:text-9xl lg:text-[180px] font-display font-black bg-gradient-to-br from-victus-violet via-victus-cyan to-victus-violet bg-clip-text text-transparent leading-none drop-shadow-2xl">
                {step.number}
              </div>
              
              {/* Icon positioned below number */}
              <div className="flex justify-center md:justify-start mt-4 md:mt-8">
                <div className="bg-gradient-to-br from-victus-violet/20 to-victus-cyan/20 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10">
                  <div className="w-12 h-12 md:w-20 md:h-20">
                    <OutlineIcon name={steps[index].title.toLowerCase().split(' ')[0]} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text */}
          <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-victus-text leading-tight">
              {step.title}
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-victus-text-light leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === index ? 'bg-victus-cyan w-8' : i < index ? 'bg-victus-violet' : 'bg-victus-border'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

