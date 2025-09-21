import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Briefcase, 
  Search, 
  MapPin, 
  Clock, 
  DollarSign,
  ArrowLeft,
  Filter,
  Star,
  Building2,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const jobListings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $180k",
    posted: "2 days ago",
    logo: null,
    featured: true,
    skills: ["React", "Node.js", "AWS"],
    postedBy: "Sarah Johnson '18"
  },
  {
    id: 2,
    title: "Marketing Director",
    company: "Creative Agency",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$90k - $130k",
    posted: "1 week ago",
    logo: null,
    featured: false,
    skills: ["Digital Marketing", "Strategy", "Leadership"],
    postedBy: "Emily Rodriguez '20"
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Analytics Solutions",
    location: "Remote",
    type: "Contract",
    salary: "$70k - $95k",
    posted: "3 days ago",
    logo: null,
    featured: true,
    skills: ["SQL", "Python", "Tableau"],
    postedBy: "Michael Chen '16"
  },
  {
    id: 4,
    title: "Product Manager",
    company: "Innovation Labs",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110k - $160k",
    posted: "5 days ago",
    logo: null,
    featured: false,
    skills: ["Product Strategy", "Agile", "Analytics"],
    postedBy: "David Kim '15"
  },
  {
    id: 5,
    title: "UX Designer",
    company: "Design Studio",
    location: "New York, NY",
    type: "Full-time",
    salary: "$80k - $120k",
    posted: "1 week ago",
    logo: null,
    featured: false,
    skills: ["Figma", "User Research", "Prototyping"],
    postedBy: "Lisa Thompson '19"
  }
];

const mentors = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Software Engineer",
    company: "TechCorp",
    graduationYear: "2018",
    expertise: ["Software Development", "Career Transition", "Leadership"],
    mentees: 12,
    rating: 4.9
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Investment Manager",
    company: "Global Finance",
    graduationYear: "2016",
    expertise: ["Finance", "Investment", "MBA Prep"],
    mentees: 8,
    rating: 4.8
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Marketing Director",
    company: "Creative Agency",
    graduationYear: "2020",
    expertise: ["Digital Marketing", "Brand Strategy", "Startups"],
    mentees: 15,
    rating: 4.9
  }
];

const Careers = () => {
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
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Career Services</h1>
                  <p className="text-sm text-muted-foreground">Jobs, mentorship & development</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button className="bg-gradient-primary">
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">156</div>
                  <div className="text-sm text-muted-foreground">Active Jobs</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-success mb-1">89</div>
                  <div className="text-sm text-muted-foreground">Mentors</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">234</div>
                  <div className="text-sm text-muted-foreground">Placements</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-info mb-1">12</div>
                  <div className="text-sm text-muted-foreground">New This Week</div>
                </CardContent>
              </Card>
            </div>

            {/* Search */}
            <Card className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input 
                      placeholder="Search jobs by title, company, or skills..."
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Location" className="w-32" />
                    <Button>Search</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Jobs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">Featured Opportunities</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              {jobListings.filter(job => job.featured).map((job, index) => (
                <Card 
                  key={job.id}
                  className="group hover:shadow-card transition-all duration-300 cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg font-semibold mb-1">
                              {job.title}
                            </CardTitle>
                            <p className="text-muted-foreground">{job.company}</p>
                          </div>
                          {job.featured && (
                            <Badge className="bg-accent text-accent-foreground">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {job.posted}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Posted by {job.postedBy}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button size="sm">Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* All Jobs */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">All Opportunities</h2>
              {jobListings.map((job, index) => (
                <Card 
                  key={job.id}
                  className="group hover:shadow-card transition-all duration-300 cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{job.title}</h3>
                            <p className="text-sm text-muted-foreground">{job.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <span>{job.location}</span>
                          <span>{job.type}</span>
                          <span>{job.salary}</span>
                          <span>{job.posted}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {job.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button size="sm">Apply</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-lg">Career Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Find Mentors
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Career Coaching
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Star className="w-4 h-4 mr-2" />
                  Resume Review
                </Button>
              </CardContent>
            </Card>

            {/* Featured Mentors */}
            <Card className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="text-lg">Featured Mentors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mentors.map((mentor) => (
                  <div key={mentor.id} className="space-y-3 p-3 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-primary text-white">
                          {mentor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{mentor.name}</h4>
                        <p className="text-xs text-muted-foreground">{mentor.title}</p>
                        <p className="text-xs text-muted-foreground">{mentor.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.slice(0, 2).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{mentor.mentees} mentees</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-accent fill-current" />
                        <span>{mentor.rating}</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">Connect</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Career Resources */}
            <Card className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <CardHeader>
                <CardTitle className="text-lg">Career Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm h-8">
                  Resume Templates
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm h-8">
                  Interview Prep Guide
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm h-8">
                  Salary Negotiation Tips
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm h-8">
                  Industry Insights
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm h-8">
                  Networking Events
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Careers;