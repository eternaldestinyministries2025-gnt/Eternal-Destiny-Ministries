import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import servicesImage from "@/assets/services.jpg";

const services = [
  {
    title: "Monthly Old Age Pastors Pension Support",
    description: "Financial security for retired pastors who dedicated their lives to ministry."
  },
  {
    title: "Orphan and Semi-Orphan Support",
    description: "Care, shelter, and resources for children who have lost parents."
  },
  {
    title: "Foster Homes",
    description: "Safe, loving homes providing family environments for children in need."
  },
  {
    title: "Church Construction Fund Support",
    description: "Building and renovating church facilities to serve growing communities."
  },
  {
    title: "Bore Wells",
    description: "Providing clean water access through well construction in underserved areas."
  },
  {
    title: "Bible College Training Disciples",
    description: "Theological education equipping the next generation of ministry leaders."
  },
  {
    title: "Free Sewing Centers",
    description: "Vocational training centers teaching sewing skills for self-sufficiency."
  },
  {
    title: "Free Sewing Machine Distribution",
    description: "Empowering the poor and widows with sewing machines to start their own businesses."
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Our Services</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support programs serving our church family and community through 
            spiritual development, practical assistance, and sustainable empowerment initiatives.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <img 
            src={servicesImage} 
            alt="Church services and community support programs" 
            className="rounded-lg shadow-2xl w-full h-auto object-cover lg:sticky lg:top-8"
          />
          {/* Desktop Scrollable */}
          <div className="hidden lg:block h-[600px] overflow-y-scroll scrollbar-hide pr-2">
            <div className="grid gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-border">
                      <CardHeader>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
