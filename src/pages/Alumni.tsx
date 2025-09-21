import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Users, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  ArrowLeft,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";

const alumniData = [
  {
    id: 1,
    name: "Sarah Johnson",
    graduationYear: "2018",
    degree: "Computer Science",
    company: "Tech Corp",
    position: "Senior Developer",
    location: "San Francisco, CA",
    avatar: null,
    tags: ["Software", "AI", "Startup"]
  },
  {
    id: 2,
    name: "Michael Chen",
    graduationYear: "2016",
    degree: "Business Administration",
    company: "Global Finance",
    position: "Investment Manager",
    location: "New York, NY",
    avatar: null,
    tags: ["Finance", "Investment", "MBA"]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    graduationYear: "2020",
    degree: "Marketing",
    company: "Creative Agency",
    position: "Marketing Director",
    location: "Austin, TX",
    avatar: null,
    tags: ["Marketing", "Creative", "Digital"]
  },
  {
    id: 4,
    name: "David Kim",
    graduationYear: "2015",
    degree: "Engineering",
    company: "Innovation Labs",
    position: "Chief Engineer",
    location: "Seattle, WA",
    avatar: null,
    tags: ["Engineering", "Innovation", "Leadership"]
  },
  {
    id: 5,
    name: "Lisa Thompson",
    graduationYear: "2019",
    degree: "Healthcare Administration",
    company: "Regional Hospital",
    position: "Operations Manager",
    location: "Chicago, IL",
    avatar: null,
    tags: ["Healthcare", "Operations", "Management"]
  },
  {
    id: 6,
    name: "James Wilson",
    graduationYear: "2017",
    degree: "Environmental Science",
    company: "Green Solutions",
    position: "Sustainability Consultant",
    location: "Portland, OR",
    avatar: null,
    tags: ["Environment", "Sustainability", "Consulting"]
  }
];

const Alumni = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Alumni Database</h1>
                  <p className="text-sm text-muted-foreground">Connect with fellow graduates</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-primary">
              <Users className="w-4 h-4 mr-2" />
              Add Alumni
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search alumni by name, company, or degree..."
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" className="h-12 px-6">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-primary mb-1">12,458</div>
                <div className="text-sm text-muted-foreground">Total Alumni</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-success mb-1">856</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-accent mb-1">47</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-info mb-1">234</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumniData.map((alumnus, index) => (
            <Card 
              key={alumnus.id}
              className="group hover:shadow-card transition-all duration-300 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={alumnus.avatar} alt={alumnus.name} />
                    <AvatarFallback className="bg-gradient-primary text-white text-lg font-semibold">
                      {alumnus.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold mb-1">
                      {alumnus.name}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground mb-2">
                      Class of {alumnus.graduationYear}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {alumnus.degree}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{alumnus.position}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                    <span>{alumnus.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{alumnus.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {alumnus.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <Button className="flex-1" variant="outline" size="sm">
                    View Profile
                  </Button>
                  <Button className="flex-1" size="sm">
                    Connect
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Alumni
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Alumni;