import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Send, 
  Users, 
  ArrowLeft,
  Plus,
  MessageCircle,
  Hash,
  Bell
} from "lucide-react";
import { Link } from "react-router-dom";

const discussions = [
  {
    id: 1,
    title: "Tech Industry Networking",
    description: "Connect with alumni working in technology companies",
    members: 234,
    posts: 89,
    category: "Industry",
    lastActivity: "2 hours ago",
    isActive: true
  },
  {
    id: 2,
    title: "Class of 2020 Reunion Planning",
    description: "Planning our upcoming 5-year reunion event",
    members: 156,
    posts: 45,
    category: "Events",
    lastActivity: "5 hours ago",
    isActive: false
  },
  {
    id: 3,
    title: "Career Advice & Mentorship",
    description: "Share career tips and find mentors in your field",
    members: 412,
    posts: 167,
    category: "Career",
    lastActivity: "1 day ago",
    isActive: true
  },
  {
    id: 4,
    title: "Alumni Entrepreneurs",
    description: "Network for alumni who started their own businesses",
    members: 98,
    posts: 34,
    category: "Business",
    lastActivity: "3 days ago",
    isActive: false
  }
];

const recentMessages = [
  {
    id: 1,
    user: "Sarah Johnson",
    message: "Great networking event last week! Anyone interested in a follow-up meetup?",
    time: "10 minutes ago",
    discussion: "Tech Industry Networking"
  },
  {
    id: 2,
    user: "Michael Chen",
    message: "I found a great venue for the reunion. Sharing the details in the group.",
    time: "2 hours ago",
    discussion: "Class of 2020 Reunion Planning"
  },
  {
    id: 3,
    user: "Emily Rodriguez",
    message: "Happy to mentor anyone looking to transition into marketing!",
    time: "5 hours ago",
    discussion: "Career Advice & Mentorship"
  }
];

const Communication = () => {
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
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Communication Hub</h1>
                  <p className="text-sm text-muted-foreground">Connect and collaborate</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button className="bg-gradient-primary">
                <Plus className="w-4 h-4 mr-2" />
                New Discussion
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Discussion Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24</div>
                  <div className="text-sm text-muted-foreground">Active Groups</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-success mb-1">1,234</div>
                  <div className="text-sm text-muted-foreground">Members</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">456</div>
                  <div className="text-sm text-muted-foreground">Messages Today</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-info mb-1">89</div>
                  <div className="text-sm text-muted-foreground">Online Now</div>
                </CardContent>
              </Card>
            </div>

            {/* Discussion Groups */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">Discussion Groups</h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              
              {discussions.map((discussion, index) => (
                <Card 
                  key={discussion.id}
                  className="group hover:shadow-card transition-all duration-300 cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Hash className="w-5 h-5 text-muted-foreground" />
                          <CardTitle className="text-lg font-semibold">
                            {discussion.title}
                          </CardTitle>
                          {discussion.isActive && (
                            <Badge className="bg-success text-success-foreground">
                              Active
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {discussion.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{discussion.members} members</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{discussion.posts} posts</span>
                          </div>
                          <span>Last activity: {discussion.lastActivity}</span>
                        </div>
                      </div>
                      <Badge variant="outline">
                        {discussion.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        {[1,2,3,4].map((i) => (
                          <Avatar key={i} className="w-8 h-8 border-2 border-background">
                            <AvatarFallback className="bg-gradient-primary text-white text-xs">
                              {String.fromCharCode(65 + i)}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                        <div className="w-8 h-8 bg-muted rounded-full border-2 border-background flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">+{discussion.members - 4}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Join Discussion
                      </Button>
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
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Start New Discussion
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Create Group
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Direct Message
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{message.user}</span>
                      <span className="text-xs text-muted-foreground">{message.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{message.message}</p>
                    <Badge variant="outline" className="text-xs">
                      {message.discussion}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Online Members */}
            <Card className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <CardHeader>
                <CardTitle className="text-lg">Online Now</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-gradient-primary text-white text-xs">
                            {String.fromCharCode(65 + i)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-background"></div>
                      </div>
                      <span className="text-sm">Member {i}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Communication;