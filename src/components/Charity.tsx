import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import charityImage from "@/assets/charity.jpg";
import Autoplay from "embla-carousel-autoplay";

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
    <section className="py-12 md:py-20 bg-secondary w-full overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Stack on mobile, grid on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 gap-10 items-start">

          {/* IMAGE SECTION */}
          <div className="w-full order-first">
            <img 
              src={charityImage}
              alt="Charity and community support programs"
              className="rounded-lg shadow-2xl w-full h-[260px] md:h-[400px] object-cover object-center"
            />
          </div>

          {/* TEXT + CARDS */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground">
              Charity
            </h2>

            <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
              Demonstrating Christ's love through compassionate care and support for vulnerable 
              members of our community, including widows, elderly, children, and those in need.
            </p>

            {/* DESKTOP GRID */}
            <div className="hidden md:grid gap-6">
              {charityPrograms.map((program, index) => (
                <Card key={index} className="border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* MOBILE CAROUSEL */}
            <div className="md:hidden w-full">
              <Carousel
                className="w-full"
                plugins={[Autoplay({ delay: 3000 })]}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {charityPrograms.map((program, index) => (
                    <CarouselItem key={index} className="basis-full">
                      <Card className="border-border shadow-sm">
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">{program.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {program.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* No negative margins, no clipping */}
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
