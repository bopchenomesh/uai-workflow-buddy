import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Heart, 
  DollarSign, 
  Target, 
  TrendingUp,
  ArrowLeft,
  Users,
  Calendar,
  Award,
  Gift
} from "lucide-react";
import { Link } from "react-router-dom";

const campaigns = [
  {
    id: 1,
    title: "New Library Construction",
    description: "Help us build a state-of-the-art library to serve future generations of students",
    goal: 2500000,
    raised: 1890000,
    donors: 1234,
    endDate: "December 31, 2024",
    category: "Infrastructure",
    featured: true,
    image: null
  },
  {
    id: 2,
    title: "Student Scholarship Fund",
    description: "Provide financial assistance to deserving students from underrepresented communities",
    goal: 500000,
    raised: 342000,
    donors: 567,
    endDate: "June 30, 2024",
    category: "Scholarships",
    featured: true,
    image: null
  },
  {
    id: 3,
    title: "Research Equipment Upgrade",
    description: "Modernize our research laboratories with cutting-edge equipment and technology",
    goal: 750000,
    raised: 425000,
    donors: 289,
    endDate: "September 15, 2024",
    category: "Research",
    featured: false,
    image: null
  },
  {
    id: 4,
    title: "Alumni Emergency Fund",
    description: "Support alumni facing financial hardship due to unexpected circumstances",
    goal: 100000,
    raised: 78000,
    donors: 456,
    endDate: "Ongoing",
    category: "Support",
    featured: false,
    image: null
  }
];

const recentDonors = [
  { name: "Sarah Johnson '18", amount: 5000, message: "Proud to support my alma mater!" },
  { name: "Anonymous", amount: 10000, message: "For the next generation of leaders." },
  { name: "Michael Chen '16", amount: 2500, message: "Happy to give back to the community." },
  { name: "Emily Rodriguez '20", amount: 1000, message: "Education changed my life." },
  { name: "David Kim '15", amount: 7500, message: "Investing in the future." }
];

const impactStats = [
  { label: "Students Supported", value: "2,456", icon: Users },
  { label: "Scholarships Awarded", value: "389", icon: Award },
  { label: "Research Projects", value: "67", icon: Target },
  { label: "Campus Improvements", value: "12", icon: TrendingUp }
];

const Donations = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateProgress = (raised: number, goal: number) => {
    return (raised / goal) * 100;
  };

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
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Donation Portal</h1>
                  <p className="text-sm text-muted-foreground">Support your alma mater</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-primary">
              <Gift className="w-4 h-4 mr-2" />
              Make a Donation
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
              {impactStats.map((stat, index) => (
                <Card key={stat.label}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Featured Campaigns */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">Featured Campaigns</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>

              {campaigns.filter(campaign => campaign.featured).map((campaign, index) => (
                <Card 
                  key={campaign.id}
                  className="group hover:shadow-card transition-all duration-300 animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="h-48 bg-gradient-secondary relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-primary">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{campaign.title}</h3>
                      <Badge variant="outline" className="border-white text-white">
                        {campaign.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">{campaign.description}</p>
                    
                    {/* Progress */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm font-medium">
                          {Math.round(calculateProgress(campaign.raised, campaign.goal))}%
                        </span>
                      </div>
                      <Progress 
                        value={calculateProgress(campaign.raised, campaign.goal)} 
                        className="h-3"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-primary font-semibold">
                          {formatCurrency(campaign.raised)} raised
                        </span>
                        <span className="text-muted-foreground">
                          of {formatCurrency(campaign.goal)} goal
                        </span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className="text-lg font-semibold text-primary">{campaign.donors}</div>
                        <div className="text-xs text-muted-foreground">Donors</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-success">
                          {formatCurrency(campaign.goal - campaign.raised)}
                        </div>
                        <div className="text-xs text-muted-foreground">To Go</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-accent">
                          {campaign.endDate === "Ongoing" ? "∞" : "45"}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {campaign.endDate === "Ongoing" ? "Ongoing" : "Days Left"}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1">
                        <Heart className="w-4 h-4 mr-2" />
                        Donate Now
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* All Campaigns */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">All Campaigns</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {campaigns.map((campaign, index) => (
                  <Card 
                    key={campaign.id}
                    className="group hover:shadow-card transition-all duration-300 cursor-pointer animate-slide-up"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline">{campaign.category}</Badge>
                        {campaign.featured && (
                          <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg font-semibold mb-2">
                        {campaign.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {campaign.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <Progress 
                          value={calculateProgress(campaign.raised, campaign.goal)} 
                          className="h-2"
                        />
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-primary">
                            {formatCurrency(campaign.raised)}
                          </span>
                          <span className="text-muted-foreground">
                            of {formatCurrency(campaign.goal)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm mb-4">
                        <span className="text-muted-foreground">{campaign.donors} donors</span>
                        <span className="text-muted-foreground">Ends: {campaign.endDate}</span>
                      </div>
                      
                      <Button className="w-full" size="sm">
                        <Heart className="w-4 h-4 mr-2" />
                        Support This Cause
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Donate */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-lg">Quick Donate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {[25, 50, 100, 250].map((amount) => (
                    <Button key={amount} variant="outline" className="h-12">
                      ${amount}
                    </Button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Custom amount" />
                  <Button className="px-3">
                    <DollarSign className="w-4 h-4" />
                  </Button>
                </div>
                <Button className="w-full bg-gradient-primary">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </CardContent>
            </Card>

            {/* Recent Donors */}
            <Card className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="text-lg">Recent Supporters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentDonors.map((donor, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-gradient-primary text-white text-xs">
                        {donor.name === "Anonymous" ? "A" : donor.name.split(' ')[0][0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium truncate">{donor.name}</p>
                        <span className="text-sm font-semibold text-primary">
                          {formatCurrency(donor.amount)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{donor.message}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Donation Options */}
            <Card className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <CardHeader>
                <CardTitle className="text-lg">Ways to Give</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Heart className="w-4 h-4 mr-2" />
                  One-time Donation
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Monthly Giving
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Award className="w-4 h-4 mr-2" />
                  Planned Giving
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Gift className="w-4 h-4 mr-2" />
                  Memorial Gifts
                </Button>
              </CardContent>
            </Card>

            {/* Tax Information */}
            <Card className="animate-slide-up" style={{ animationDelay: '600ms' }}>
              <CardHeader>
                <CardTitle className="text-lg">Tax Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Your donation is tax-deductible. You'll receive a receipt for your records.
                </p>
                <Badge variant="outline" className="text-xs">
                  501(c)(3) Organization
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Donations;