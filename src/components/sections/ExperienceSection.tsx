
import { Briefcase, Calendar } from "lucide-react";

// Sample experience data
const experiences = [
  {
    id: 1,
    company: "ក្រុមហ៊ុនបច្ចេកវិទ្យា អាល់ហ្វា",
    position: "អ្នកអភិវឌ្ឍន៍ Full Stack ជាន់ខ្ពស់",
    period: "២០២១ - បច្ចុប្បន្ន",
    description: "បង្កើតនិងថែទាំកម្មវិធីគេហទំព័រ និងកម្មវិធីទូរស័ព្ទ សម្រាប់អតិថិជនជាច្រើន។ ដឹកនាំក្រុមអភិវឌ្ឍន៍ ៥ នាក់ ក្នុងគម្រោងធំៗ។",
  },
  {
    id: 2,
    company: "ស្ដាតអាប E-Commerce",
    position: "អ្នកអភិវឌ្ឍន៍ Frontend",
    period: "២០១៩ - ២០២១",
    description: "បង្កើតចំណុចប្រទាក់អ្នកប្រើប្រាស់ដ៏ល្អឥតខ្ចោះសម្រាប់ផ្លាតហ្វមពាណិជ្ជកម្មអេឡិចត្រូនិក ដែលមានអ្នកប្រើប្រាស់ប្រចាំខែជាង ១០០,០០០ នាក់។",
  },
  {
    id: 3,
    company: "ក្រុមហ៊ុន Digital Solutions",
    position: "អ្នកអភិវឌ្ឍន៍ Web",
    period: "២០១៧ - ២០១៩",
    description: "បង្កើតគេហទំព័រ និងកម្មវិធីគេហទំព័រសម្រាប់អាជីវកម្មខ្នាតតូច និងមធ្យម។ ធ្វើការយ៉ាងជិតស្និទ្ធជាមួយអតិថិជន ដើម្បីបំពេញតាមតម្រូវការរបស់ពួកគេ។",
  },
  {
    id: 4,
    company: "កម្មវិធីសិក្សាអនឡាញ EduTech",
    position: "អ្នកហាត់ការ",
    period: "២០១៦ - ២០១៧",
    description: "ជួយអភិវឌ្ឍមុខងារសម្រាប់ប្លាតហ្វមសិក្សាអនឡាញ។ ស្វែងយល់និងដោះស្រាយបញ្ហាកូដ ព្រមទាំងបង្កើតឯកសារសម្រាប់អ្នកប្រើប្រាស់។",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-muted/50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          បទពិសោធន៍ការងារ
        </h2>
        
        <div className="timeline-container max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot text-white">
                <Briefcase className="h-5 w-5" />
              </div>
              
              <div className={`timeline-content ${index % 2 !== 0 ? "md:ml-auto" : ""}`}>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <h4 className="text-primary font-medium mb-2">{exp.company}</h4>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
                
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
