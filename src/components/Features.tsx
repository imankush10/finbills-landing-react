import { BarChart3, Shield, Users, Zap, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your business performance with real-time analytics.",
    color: "purple"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security to protect your sensitive business data.",
    color: "blue"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team in real-time across all devices.",
    color: "green"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for quick and efficient operations.",
    color: "yellow"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support to help you whenever you need it.",
    color: "red"
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Access your business data from anywhere in the world.",
    color: "indigo"
  }
];

export function Features() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white transform skew-y-3"></div>
      <div className="container mx-auto px-6 py-24 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to manage your business effectively</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className={`bg-${feature.color}-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}