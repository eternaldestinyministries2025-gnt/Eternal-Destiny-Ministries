import { Button } from "@/components/ui/button";
import priestPhoto from "@/assets/priest-photo.jpg";

// Background Images
import slide1 from "@/assets/hero-carousel/slide1.jpg";
import slide2 from "@/assets/hero-carousel/slide2.jpg";
import slide3 from "@/assets/hero-carousel/slide3.jpg";
import slide4 from "@/assets/hero-carousel/slide4.jpg";
import slide5 from "@/assets/hero-carousel/slide5.jpg";

// Carousel Imports
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const heroSlides = [slide1, slide2, slide3, slide4, slide5];

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-12">
      
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {heroSlides.map((img, i) => (
              <CarouselItem key={i} className="relative w-full h-full">
                <img
                  src={img}
                  alt={`Hero Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Foreground Content (UNCHANGED) */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Column */}
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img 
                  src={priestPhoto} 
                  alt="Senior Pastor BISHOP DR VIJAYA BHASKAR FINNEY DEVARAKONDA" 
                  className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-card shadow-2xl"
                />
              </div>
              
              <div className="text-center lg:text-left space-y-2">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  <i>Bishop</i> Dr. Vijaya Bhaskar Finney Devarakonda
                </h3>
                <p className="text-lg md:text-xl text-accent font-semibold">Senior Pastor</p>
                <p className="text-sm md:text-base text-muted-foreground max-w-md">
                  Leading with faith and compassion, guiding our community in spiritual growth and service
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Welcome to<br />
                  <span className="text-accent">ETERNAL DESTINY MINISTRIES</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  A Jesus-centered community of believers
                </p>
              </div>
              
              <div className="bg-card/90 backdrop-blur-md p-6 md:p-8 rounded-lg border border-border shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">ABOUT US</h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                  We are a Jesus-centered community of believers who exist to steward the{" "}
                  <span className="italic text-foreground font-semibold">fire</span> of revival in the context of{" "}
                  <span className="italic text-foreground font-semibold">family</span> with the oversight of{" "}
                  <span className="italic text-foreground font-semibold">fathering</span>.
                </p>
                <Button variant="default" size="lg" className="w-full md:w-auto">
                  LEARN MORE
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
