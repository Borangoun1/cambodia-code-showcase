
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "កម្មវិធីគេហទំព័រលក់ទំនិញអនឡាញ",
    description: "កម្មវិធីគេហទំព័រលក់ទំនិញអនឡាញពេញលេញជាមួយនឹងការទូទាត់ប្រាក់ ការគ្រប់គ្រងផលិតផល និងការតាមដានការបញ្ជាទិញ។",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    tech: ["React", "Firebase", "Tailwind CSS"],
    demo: "https://example.com",
    github: "https://github.com",
    category: "web",
  },
  {
    id: 2,
    title: "កម្មវិធីទូរស័ព្ទផ្តល់ព័ត៌មានអាកាសធាតុ",
    description: "កម្មវិធីទូរស័ព្ទ ដែលផ្តល់ព័ត៌មានអាកាសធាតុបច្ចុប្បន្ន និងការព្យាករណ៍ ជាមួយនឹងរចនាបថស្អាត និងងាយស្រួលប្រើប្រាស់។",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
    tech: ["React Native", "OpenWeather API", "Redux"],
    demo: "https://example.com",
    github: "https://github.com",
    category: "mobile",
  },
  {
    id: 3,
    title: "ឧបករណ៍គ្រប់គ្រងគម្រោង",
    description: "ឧបករណ៍គ្រប់គ្រងគម្រោងពេញលេញ ដែលមានមុខងារធ្វើឱ្យកាន់តែងាយស្រួលក្នុងការធ្វើការជាក្រុម និងតាមដានវឌ្ឍនភាព។",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1772&q=80",
    tech: ["Vue.js", "Node.js", "MongoDB"],
    demo: "https://example.com",
    github: "https://github.com",
    category: "web",
  },
  {
    id: 4,
    title: "API សម្រាប់ប្រព័ន្ធគ្រប់គ្រងអតិថិជន",
    description: "API ដែលមានលក្ខណៈទំនើប និងល្បឿនលឿន សម្រាប់ប្រព័ន្ធគ្រប់គ្រងអតិថិជន និងដំណើរការលក់។",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1828&q=80",
    tech: ["Node.js", "Express", "PostgreSQL"],
    demo: null,
    github: "https://github.com",
    category: "backend",
  },
  {
    id: 5,
    title: "កម្មវិធីបកប្រែភាសាបច្ចេកទេស",
    description: "កម្មវិធីបកប្រែភាសាបច្ចេកទេស ដែលជួយអ្នកអភិវឌ្ឍន៍យល់ពាក្យបច្ចេកទេសផ្សេងៗ ពីភាសាអង់គ្លេសទៅភាសាខ្មែរ។",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1780&q=80",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "https://example.com",
    github: "https://github.com",
    category: "web",
  },
  {
    id: 6,
    title: "កម្មវិធីម៉ាស៊ីនគិតលេខ",
    description: "កម្មវិធីម៉ាស៊ីនគិតលេខសម្រាប់ប្រើប្រាស់ក្នុងកម្មវិធីគណិតវិទ្យាកម្រិតខ្ពស់។",
    image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    tech: ["JavaScript", "CSS", "HTML"],
    demo: "https://example.com",
    github: "https://github.com",
    category: "web",
  },
];

// Categories
const categories = [
  { id: "all", name: "ទាំងអស់" },
  { id: "web", name: "គេហទំព័រ" },
  { id: "mobile", name: "ទូរស័ព្ទ" },
  { id: "backend", name: "ខាងក្រោយ" },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          គម្រោងរបស់ខ្ញុំ
        </h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={activeCategory === category.id ? "bg-primary" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="project-card group animate-fade-in"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div 
                  className={`absolute inset-0 bg-primary/80 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex gap-4">
                    {project.demo && (
                      <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        មើល
                      </Button>
                    )}
                    {project.github && (
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                        <Github className="h-4 w-4 mr-2" />
                        កូដ
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-secondary/10 dark:bg-secondary/20 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
