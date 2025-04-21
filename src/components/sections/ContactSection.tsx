
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const contactInfo = [
  {
    icon: <Phone className="h-5 w-5" />,
    title: "លេខទូរស័ព្ទ",
    value: "+855 12 345 678",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "អ៊ីមែល",
    value: "sovannary@example.com",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    title: "LinkedIn",
    value: "linkedin.com/in/sovannary",
    url: "https://linkedin.com",
  },
  {
    icon: <Github className="h-5 w-5" />,
    title: "GitHub",
    value: "github.com/sovannary",
    url: "https://github.com",
  },
];

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "សារត្រូវបានផ្ញើដោយជោគជ័យ!",
        description: "អរគុណសម្រាប់ការទាក់ទង។ ខ្ញុំនឹងឆ្លើយតបកាន់អ្នកឆាប់ៗនេះ។",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          ទំនាក់ទំនងមកខ្ញុំ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card dark:bg-slate-800 p-8 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-primary" />
              ផ្ញើសារមកខ្ញុំ
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">
                  ឈ្មោះ
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">
                  អ៊ីមែល
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  សារ
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="បញ្ចូលសាររបស់អ្នក"
                  required
                  className="w-full min-h-32"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "កំពុងផ្ញើ..." : "ផ្ញើសារ"}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-6 content-start animate-fade-in">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-card dark:bg-slate-800 p-6 rounded-lg shadow-md flex items-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mr-4 bg-primary/10 p-3 rounded-full text-primary">
                  {info.icon}
                </div>
                
                <div>
                  <h4 className="font-medium">{info.title}</h4>
                  {info.url ? (
                    <a 
                      href={info.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p>{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
