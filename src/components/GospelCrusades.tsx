import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import gospelImage from "@/assets/gospel-crusade.jpg";

const crusades = [
  {
    title: "Pastors and Leaders Seminars",
    description: "Equipping church leaders with biblical training and practical ministry skills."
  },
  {
    title: "Rural Evangelism",
    description: "Bringing the Gospel to remote communities and underserved areas."
  },
  {
    title: "Tribal Outreach",
    description: "Cross-cultural ministry reaching indigenous communities with God's love."
  },
  {
    title: "Multi-Culture Church Planting",
    description: "Establishing vibrant, diverse congregations across different communities."
  }
];

export const GospelCrusades = () => {
  return (
    <section id="gospel-crusades" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Gospel Crusades</h2>
            <p className="text-muted-foreground mb-8">
              Spreading the transformative message of Christ through evangelism, leadership development, 
              and church planting across diverse communities and cultures.
            </p>
            {/* Desktop Grid */}
            <div className="hidden md:grid gap-6">
              {crusades.map((crusade, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">{crusade.title}</CardTitle>
                    <CardDescription>{crusade.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {crusades.map((crusade, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-border">
                        <CardHeader>
                          <CardTitle className="text-xl">{crusade.title}</CardTitle>
                          <CardDescription>{crusade.description}</CardDescription>
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
          <div className="order-first lg:order-last">
            <img 
              src={gospelImage} 
              alt="Gospel crusade and evangelism outreach" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
