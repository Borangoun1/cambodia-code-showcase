
import { ParticleBackground } from "../ParticleBackground";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-12 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            សូមស្វាគមន៍មកកាន់ផតថលរបស់ខ្ញុំ!
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
            ខ្ញុំជាអ្នកអភិវឌ្ឍន៍កម្មវិធីដែលបង្កើតបច្ចេកវិទ្យាប្រកបដោយភាពច្នៃប្រឌិត។ 
            ស្វែងយល់ពីគម្រោង និងជំនាញរបស់ខ្ញុំនៅទីនេះ។
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              onClick={() => scrollToSection("projects")}
            >
              មើលគម្រោងរបស់ខ្ញុំ
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
              onClick={() => scrollToSection("about")}
            >
              ស្វែងយល់បន្ថែម
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <Button
          variant="ghost"
          size="icon"
          className="opacity-70 hover:opacity-100"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="h-8 w-8" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </div>
    </section>
  );
}
