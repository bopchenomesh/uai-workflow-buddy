import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowLeft,
  Plus,
  Filter,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Annual Alumni Reunion 2024",
    description: "Join us for our biggest reunion celebration with networking, entertainment, and reconnecting with old friends.",
    date: "June 15, 2024",
    time: "6:00 PM - 11:00 PM",
    location: "University Main Campus",
    attendees: 245,
    capacity: 300,
    category: "Reunion",
    isFeatured: true,
    price: "Free"
  },
  {
    id: 2,
    title: "Tech Industry Mixer",
    description: "Network with alumni working in technology companies. Panel discussions and informal networking.",
    date: "May 22, 2024",
    time: "7:00 PM - 9:30 PM",
    location: "Innovation Center, Downtown",
    attendees: 67,
    capacity: 80,
    category: "Networking",
    isFeatured: false,
    price: "$25"
  },
  {
    id: 3,
    title: "Career Development Workshop",
    description: "Professional development session covering resume building, interview skills, and career transitions.",
    date: "May 30, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Business School Auditorium",
    attendees: 89,
    capacity: 120,
    category: "Workshop",
    isFeatured: true,
    price: "Free"
  },
  {
    id: 4,
    title: "Alumni Golf Tournament",
    description: "Annual golf tournament with prizes, lunch, and networking opportunities on the green.",
    date: "July 8, 2024",
    time: "8:00 AM - 4:00 PM",
    location: "University Golf Course",
    attendees: 34,
    capacity: 60,
    category: "Sports",
    isFeatured: false,
    price: "$75"
  },
  {
    id: 5,
    title: "Young Alumni Happy Hour",
    description: "Casual networking event for recent graduates (Class of 2019-2024) at a local venue.",
    date: "June 5, 2024",
    time: "6:30 PM - 9:00 PM",
    location: "The Alumni Bar & Grill",
    attendees: 112,
    capacity: 150,
    category: "Social",
    isFeatured: false,
    price: "$15"
  },
  {
    id: 6,
    title: "Entrepreneur Showcase",
    description: "Alumni entrepreneurs present their startups and businesses. Includes investor networking.",
    date: "June 20, 2024",
    time: "3:00 PM - 7:00 PM",
    location: "Entrepreneurship Hub",
    attendees: 156,
    capacity: 200,
    category: "Business",
    isFeatured: true,
    price: "$30"
  }
];

const Events = () => {
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
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Event Management</h1>
                  <p className="text-sm text-muted-foreground">Discover and manage events</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button className="bg-gradient-primary">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">24</div>
              <div className="text-sm text-muted-foreground">Upcoming Events</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-success mb-1">1,456</div>
              <div className="text-sm text-muted-foreground">Total Attendees</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-accent mb-1">8</div>
              <div className="text-sm text-muted-foreground">This Month</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-info mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Events */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Featured Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.filter(event => event.isFeatured).map((event, index) => (
              <Card 
                key={event.id}
                className="group hover:shadow-card transition-all duration-300 cursor-pointer animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-48 bg-gradient-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-primary">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{event.attendees}/{event.capacity} attendees</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{event.category}</Badge>
                      <span className="font-semibold text-primary">{event.price}</span>
                    </div>
                    <Button>Register Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Events */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">All Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card 
                key={event.id}
                className="group hover:shadow-card transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{event.category}</Badge>
                    {event.isFeatured && (
                      <Star className="w-4 h-4 text-accent" />
                    )}
                  </div>
                  <CardTitle className="text-lg font-semibold mb-2">
                    {event.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{event.attendees}/{event.capacity}</span>
                    </div>
                    <span className="font-semibold text-primary">{event.price}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex -space-x-2">
                      {[1,2,3].map((i) => (
                        <Avatar key={i} className="w-6 h-6 border-2 border-background">
                          <AvatarFallback className="bg-gradient-primary text-white text-xs">
                            {String.fromCharCode(65 + i)}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">+{event.attendees - 3} others</span>
                  </div>

                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;