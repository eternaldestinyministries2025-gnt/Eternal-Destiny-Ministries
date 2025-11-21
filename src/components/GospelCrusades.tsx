import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import gospelImage from "@/assets/gospel-crusade.jpg";
import Autoplay from "embla-carousel-autoplay";

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
    <section id="gospel-crusades" className="py-12 md:py-20 bg-background w-full overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* MOBILE & TABLET FIRST (Stacked) */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-12 items-start">

          {/* TEXT AREA */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Gospel Crusades
            </h2>

            <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
              Spreading the transformative message of Christ through evangelism, leadership development,
              and church planting across diverse communities and cultures.
            </p>

            {/* DESKTOP GRID */}
            <div className="hidden md:grid gap-6">
              {crusades.map((item, index) => (
                <Card key={index} className="border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* MOBILE CAROUSEL */}
            <div className="md:hidden w-full">
              <Carousel
                plugins={[Autoplay({ delay: 3000 })]}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {crusades.map((crusade, index) => (
                    <CarouselItem key={index} className="basis-full">
                      <Card className="border-border">
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">{crusade.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {crusade.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* No negative margins → no overflow */}
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/* IMAGE AREA */}
          <div className="w-full mb-8 lg:mb-0">
            <img
              src={gospelImage}
              alt="Gospel crusade and evangelism outreach"
              className="w-full h-auto max-h-[380px] rounded-lg shadow-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
