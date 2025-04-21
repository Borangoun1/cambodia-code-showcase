
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// Sample skill data
const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "HTML & CSS", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "MongoDB", level: 70 },
  { name: "GraphQL", level: 65 },
];

export function AboutSection() {
  const [isHoveredIndex, setIsHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about" className="section-padding bg-muted/50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          អំពីខ្ញុំ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img 
                  src="https://xsgames.co/randomusers/avatar.php?g=male" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
            </div>
          </div>
          
          {/* Bio */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">
              សួស្តី! ខ្ញុំឈ្មោះ ម៉ី សុវណ្ណាវីស្នេហា
            </h3>
            
            <p className="mb-4 text-lg">
              ខ្ញុំមានបទពិសោធន៍ជាង ៥ ឆ្នាំក្នុងការអភិវឌ្ឍកម្មវិធីគេហទំព័រ និងកម្មវិធីទូរស័ព្ទ។ 
              ខ្ញុំចូលចិត្តរៀនបច្ចេកវិទ្យាថ្មីៗ និងប្រើវាដើម្បីដោះស្រាយបញ្ហាជាក់ស្តែង។
            </p>
            
            <p className="mb-6 text-lg">
              ជាមួយនឹងចំណេះដឹងបច្ចេកទេសរឹងមាំ និងការយល់ដឹងអំពីអ្នកប្រើប្រាស់ ខ្ញុំអាចបង្កើតបទពិសោធន៍អ្នកប្រើប្រាស់ដ៏អស្ចារ្យ។
              ខ្ញុំជឿជាក់ថាកូដល្អគឺជាកូដដែលងាយស្រួលអាន បំបែក និងថែទាំ។
            </p>
            
            <Button className="mb-10" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              ទាញយកព័ត៌មានសង្ខេបរបស់ខ្ញុំ
            </Button>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            ជំនាញបច្ចេកទេស
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setIsHoveredIndex(index)}
                onMouseLeave={() => setIsHoveredIndex(null)}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-muted dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-primary transition-all duration-500 ease-out ${
                      isHoveredIndex === index ? "opacity-80" : "opacity-100"
                    }`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
