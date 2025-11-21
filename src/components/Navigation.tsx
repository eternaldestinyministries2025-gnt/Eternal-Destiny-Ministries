import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import logo from "@/assets/logo.png"

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home", onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: "SERVICES", href: "#service-times", onClick: () => document.getElementById('service-times')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "MINISTRIES", href: "#gospel-crusades", onClick: () => document.getElementById('gospel-crusades')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "CONTACT", href: "#newsletter", onClick: () => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' }) }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-primary flex items-center justify-center">
            <img src={logo} alt="ETERNAL DESTINY MINISTRIES Logo"/>
          </div>
          <span className="text-sm md:text-xl font-bold tracking-wider">ETERNAL DESTINY MINISTRIES</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover:text-accent transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                item.onClick();
              }}
            >
              {item.label}
            </a>
          ))}
          {/* <Button variant="secondary" size="sm">
            DONATE
          </Button> */}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium hover:text-accent transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    item.onClick();
                    setOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
              {/* <Button variant="secondary" className="w-full">
                DONATE
              </Button> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
