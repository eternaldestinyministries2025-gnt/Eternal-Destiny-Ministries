import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "You've been subscribed to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Connect</h2>
          <p className="text-muted-foreground">
            Stay connected with the latest updates at ETERNAL DESTINY MINISTRIES.
          </p>
          
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto pt-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
