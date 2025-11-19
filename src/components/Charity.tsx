import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import charityImage from "@/assets/charity.jpg";

const charityPrograms = [
  {
    title: "Monthly Widows Support",
    description: "Regular financial and material assistance to widows in our community."
  },
  {
    title: "Old Age Support",
    description: "Care and assistance for elderly members, ensuring dignity and comfort."
  },
  {
    title: "Children School Fee Support",
    description: "Educational sponsorship helping children access quality education."
  },
  {
    title: "Health & Medical Support",
    description: "Healthcare assistance and medical aid for those in need."
  }
];

export const Charity = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={charityImage} 
              alt="Charity and community support programs" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Charity</h2>
            <p className="text-muted-foreground mb-8">
              Demonstrating Christ's love through compassionate care and support for vulnerable 
              members of our community, including widows, elderly, children, and those in need.
            </p>
            {/* Desktop Grid */}
            <div className="hidden md:grid gap-6">
              {charityPrograms.map((program, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {charityPrograms.map((program, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-border">
                        <CardHeader>
                          <CardTitle className="text-xl">{program.title}</CardTitle>
                          <CardDescription>{program.description}</CardDescription>
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
      </div>
    </section>
  );
};
