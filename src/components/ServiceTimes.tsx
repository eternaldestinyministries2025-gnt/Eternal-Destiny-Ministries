import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import communityImage from "@/assets/community.jpg";

export const ServiceTimes = () => {
  return (
    <section id="service-times" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-accent font-semibold">
              Service Times
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Join us on Sunday</h2>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold">9:00-9:30am</p>
                  <p className="text-muted-foreground">Pre-Service Prayer</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold">9:30-10:00am</p>
                  <p className="text-muted-foreground">Fellowship</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold">10:00am</p>
                  <p className="text-muted-foreground">Service Begins</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-6">LEARN MORE</Button>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src={communityImage} 
              alt="Church community"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
