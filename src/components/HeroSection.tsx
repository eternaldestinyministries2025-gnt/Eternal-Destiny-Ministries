import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-worship.jpg";
import priestPhoto from "@/assets/priest-photo.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Welcome to<br />ETERNAL DESTINY MINISTRIES
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              A Jesus-centered community of believers
            </p>
            
            <div className="flex items-center gap-4 bg-card/80 backdrop-blur-md p-6 rounded-lg border border-border">
              <img 
                src={priestPhoto} 
                alt="Senior Pastor" 
                className="w-20 h-20 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h3 className="font-bold text-lg">Rev. Dr. John Samuel</h3>
                <p className="text-sm text-muted-foreground">Senior Pastor</p>
                <p className="text-xs text-muted-foreground mt-1">Leading with faith and compassion since 1995</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card/80 backdrop-blur-md p-8 rounded-lg border border-border max-w-md ml-auto">
            <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
            <p className="text-muted-foreground mb-6">
              We are a Jesus-centered community of believers who exist to steward the{" "}
              <span className="italic text-foreground">fire</span> of revival in the context of{" "}
              <span className="italic text-foreground">family</span> with the oversight of{" "}
              <span className="italic text-foreground">fathering</span>.
            </p>
            <Button variant="outline" className="w-full">
              LEARN MORE!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
