import { Card } from "@/components/ui/card";
import { Users, Calendar, Heart, UserCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const links = [
  {
    icon: Heart,
    title: "About Us",
    description: "Learn about our beliefs and values.",
    modalContent: {
      title: "About Us",
      description: "Welcome to our church community. We are a faith-filled family dedicated to growing in Christ and serving others.",
      details: "Our church is built on the foundation of God's Word and guided by the Holy Spirit. We believe in the power of prayer, the importance of fellowship, and the transformative message of the Gospel. Our mission is to create a welcoming environment where everyone can encounter God's love and discover their purpose."
    }
  },
  {
    icon: Calendar,
    title: "Join Us",
    description: "Check out the latest in our community.",
    modalContent: {
      title: "Join Us",
      description: "We'd love to have you join us for worship and fellowship.",
      details: "Whether you're new to faith or have been walking with Christ for years, there's a place for you here. Join us for our Sunday services, midweek Bible studies, and special events throughout the year. Connect with our community and discover how you can grow in your faith journey."
    }
  },
  {
    icon: UserCircle,
    title: "Our Team",
    description: "Get to know our leaders and staff.",
    modalContent: {
      title: "Our Team",
      description: "Meet the passionate leaders who guide and serve our church family.",
      details: "Our team is committed to shepherding the congregation with wisdom, compassion, and dedication. From our pastoral staff to ministry leaders, each person brings unique gifts and a heart for service. Together, we work to create an environment where everyone can encounter God and grow in their faith."
    }
  },
  {
    icon: Users,
    title: "Get Involved",
    description: "Find out ways to get connected.",
    modalContent: {
      title: "Get Involved",
      description: "Discover opportunities to serve and connect with our community.",
      details: "There are many ways to get involved in our church family. Join a small group, serve in a ministry, participate in outreach programs, or volunteer for special events. Your gifts and talents are valuable, and we have a place where you can make a difference while growing in your faith and building meaningful relationships."
    }
  },
];

export const QuickLinks = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="p-6 hover:bg-card/80 transition-all cursor-pointer border-border group">
                    <Icon className="w-12 h-12 mb-4 text-accent group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2">{link.title}</h3>
                    <p className="text-muted-foreground text-sm">{link.description}</p>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{link.modalContent.title}</DialogTitle>
                    <DialogDescription>{link.modalContent.description}</DialogDescription>
                  </DialogHeader>
                  <p className="text-foreground">{link.modalContent.details}</p>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};
