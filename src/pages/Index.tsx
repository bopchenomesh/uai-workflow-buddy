import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  MessageSquare, 
  Calendar, 
  Briefcase, 
  Heart, 
  BarChart3,
  Shield,
  Database,
  Cloud
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Alumni Database",
    description: "Comprehensive alumni profiles and networking directory with advanced search capabilities",
    icon: Users,
    color: "bg-blue-500"
  },
  {
    title: "Communication Hub",
    description: "Connect and collaborate with messaging, forums, and real-time communication tools",
    icon: MessageSquare,
    color: "bg-green-500"
  },
  {
    title: "Event Management",
    description: "Organize reunions, networking events, and professional development sessions",
    icon: Calendar,
    color: "bg-purple-500"
  },
  {
    title: "Career Services",
    description: "Job board, mentorship programs, and professional networking opportunities",
    icon: Briefcase,
    color: "bg-orange-500"
  },
  {
    title: "Donation Portal",
    description: "Secure donation processing with campaign management and donor recognition",
    icon: Heart,
    color: "bg-red-500"
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive insights and metrics for engagement and platform performance",
    icon: BarChart3,
    color: "bg-indigo-500"
  },
  {
    title: "Security Layer",
    description: "Enterprise-grade security with role-based access and data protection",
    icon: Shield,
    color: "bg-gray-600"
  },
  {
    title: "Data Management",
    description: "Robust data storage and management with backup and recovery systems",
    icon: Database,
    color: "bg-teal-500"
  },
  {
    title: "Cloud Integration",
    description: "Scalable cloud infrastructure with API integrations and external services",
    icon: Cloud,
    color: "bg-cyan-500"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">UAI</span>
            </div>
            <Link to="/auth">
              <Button className="bg-gradient-primary hover:opacity-90">
                Access Portal
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
            Unified Alumni
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Interface Platform
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Connect, engage, and grow with your university community through our comprehensive 
            alumni management platform featuring networking, events, career services, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-14 px-8 text-lg">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Platform Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive system integrates all essential components for effective alumni management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 bg-white rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-hero rounded-3xl p-12 shadow-elegant animate-scale-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect Your Alumni Community?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of universities already using UAI to strengthen their alumni networks
            </p>
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">UAI Platform</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Unified Alumni Interface. Empowering educational communities worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
