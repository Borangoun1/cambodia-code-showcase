
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card dark:bg-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            ម៉ី សុវណ្ណាវីស្នេហា
          </h3>
          
          <p className="mb-6 text-center max-w-md">
            អ្នកអភិវឌ្ឍន៍កម្មវិធីដែលបង្កើតបច្ចេកវិទ្យាប្រកបដោយភាពច្នៃប្រឌិត
          </p>
          
          <div className="flex space-x-4 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:example@example.com" 
              className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="w-24 h-1 bg-primary/30 rounded-full mb-8"></div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} រក្សាសិទ្ធិគ្រប់យ៉ាង។
          </p>
        </div>
      </div>
    </footer>
  );
}
