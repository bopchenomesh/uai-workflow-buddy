import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  UserCheck, 
  Shield 
} from "lucide-react";
import { Link } from "react-router-dom";

const userTypes = [
  {
    title: "Alumni Login",
    description: "Access your alumni profile and connect with fellow graduates",
    icon: GraduationCap,
    path: "/dashboard",
    color: "bg-gradient-primary",
    textColor: "text-white"
  },
  {
    title: "Student Login",
    description: "Current students can access career services and networking",
    icon: BookOpen,
    path: "/dashboard",
    color: "bg-gradient-secondary",
    textColor: "text-white"
  },
  {
    title: "Faculty Login",
    description: "Faculty members can engage with alumni and students",
    icon: UserCheck,
    path: "/dashboard",
    color: "bg-success",
    textColor: "text-white"
  },
  {
    title: "Admin Login",
    description: "Administrative access to platform management tools",
    icon: Shield,
    path: "/dashboard",
    color: "bg-warning",
    textColor: "text-white"
  }
];

const Auth = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white/10 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-elegant mb-6">
            <Users className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            University Alumni Interface
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose your access portal to connect with your university community
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {userTypes.map((type, index) => (
            <Card 
              key={type.title} 
              className="group hover:shadow-elegant hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up bg-white/95 backdrop-blur border-white/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${type.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-card`}>
                  <type.icon className={`w-8 h-8 ${type.textColor}`} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {type.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {type.description}
                </p>
                <Link to={type.path}>
                  <Button 
                    className="w-full h-12 text-base font-semibold"
                    size="lg"
                  >
                    Access Portal
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-4 text-white/80">
            <Link to="/" className="hover:text-white transition-colors">
              ← Back to Home
            </Link>
            <span>•</span>
            <span>Secure Authentication System</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;