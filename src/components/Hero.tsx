import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50">
      {/* Background decorative elements */}

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 pt-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="inline-block">
              Empower Your Business
            </span>
            <span className="relative inline-block mt-2">
              <span>with</span><span className="font-handwritten text-7xl md:text-8xl"> FinBills</span>
              <svg className="absolute -bottom-2 w-full h-3 text-yellow-300 transform -rotate-1" preserveAspectRatio="none" viewBox="0 0 300 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L300 12H0V0Z" />
              </svg>
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Simple, efficient, yet
            <span className="font-handwritten text-3xl md:text-4xl text-purple-600 mx-2">affordable! </span>
            Streamline financial operations, manage inventory, and scale your business.
          </p>
        </div>

        {/* Rainbow Arch with Buttons */}
        <div className="relative mt-8">
          {/* Rainbow Arch */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-[120%] max-w-5xl">
            <svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
              <defs>
                <linearGradient id="rainbow" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#818cf8" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path d="M0,200 Q500,0 1000,200" fill="none" stroke="url(#rainbow)" strokeWidth="4" className="filter drop-shadow-lg" />
            </svg>
          </div>

          {/* Buttons */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-12">
            <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-purple-600 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Price tag */}
        <div className="w-fit transform rotate-12 bg-white px-4 py-2 rounded-lg shadow-lg text-center">
          <p className="text-purple-600 font-semibold">Starting at</p> 
          <p className="text-2xl font-bold font-handwritten">499 Rs/mo</p>
        </div>
      </div>

      <div className="h-32"></div>
    </div>
  );
}