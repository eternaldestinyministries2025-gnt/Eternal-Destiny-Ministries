import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src={logo} alt="Eternal Destiny Ministries" className="text-primary" />
              </div>
              <span className="font-bold">ETERNAL DESTINY MINISTRIES</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A Jesus-centered community of believers.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-foreground transition-colors">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-foreground">Address:</span>
                <span>Sree Ram Nagar 2nd Lane, Guntur - 522004</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-foreground">Email:</span>
                <p><a href="mailto:revdscfinney@gmail.com" className="hover:text-foreground transition-colors">
                  revdscfinney@gmail.com
                </a><br></br><a href="mailto:eternaldestinyministries2025@gmail.com" className="hover:text-foreground transition-colors">
                  eternaldestinyministries2025@gmail.com
                </a>
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-foreground">Phone:</span>
                <a href="tel:+919441752596" className="hover:text-foreground transition-colors">
                  +91 94417 52596
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Service Times</h3>
            <p className="text-sm text-muted-foreground">
              Sundays at 10:00am<br />
              Prayer: 9:00am<br />
              Fellowship: 9:30am
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ETERNAL DESTINY MINISTRIES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
