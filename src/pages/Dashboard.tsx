import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Briefcase, 
  Heart, 
  BarChart3,
  GraduationCap,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  {
    title: "Alumni Database",
    description: "Comprehensive alumni profiles and networking directory",
    icon: Users,
    path: "/alumni",
    color: "bg-blue-500"
  },
  {
    title: "Communication Hub",
    description: "Connect and collaborate with fellow alumni",
    icon: MessageSquare,
    path: "/communication",
    color: "bg-green-500"
  },
  {
    title: "Event Management",
    description: "Discover and manage alumni events and reunions",
    icon: Calendar,
    path: "/events",
    color: "bg-purple-500"
  },
  {
    title: "Career Services",
    description: "Job opportunities and professional development",
    icon: Briefcase,
    path: "/careers",
    color: "bg-orange-500"
  },
  {
    title: "Donation Portal",
    description: "Support your alma mater and give back",
    icon: Heart,
    path: "/donations",
    color: "bg-red-500"
  },
  {
    title: "Analytics Dashboard",
    description: "Insights and metrics for platform engagement",
    icon: BarChart3,
    path: "/analytics",
    color: "bg-indigo-500"
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">UAI Platform</h1>
                <p className="text-sm text-muted-foreground">University Alumni Interface</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Link to="/auth">
                <Button variant="outline" size="sm">
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-12 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Welcome to Your Alumni Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Connect, engage, and grow with your university community through our comprehensive platform
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">12,458</div>
                <div className="text-sm text-muted-foreground">Total Alumni</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-success mb-2">856</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">142</div>
                <div className="text-sm text-muted-foreground">Upcoming Events</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-info mb-2">$2.4M</div>
                <div className="text-sm text-muted-foreground">Donations Raised</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Modules */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Core Platform Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card 
                key={module.title} 
                className="group hover:shadow-card transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{module.description}</p>
                  <Link to={module.path}>
                    <Button className="w-full" variant="outline">
                      Access Module
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;