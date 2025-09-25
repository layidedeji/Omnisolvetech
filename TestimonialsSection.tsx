import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "OmniSolve transformed our operations completely. Their AI solutions reduced our processing time by 60% and significantly improved our customer satisfaction.",
      name: "Sarah Johnson",
      company: "TechFlow Inc."
    },
    {
      quote: "The strategic IT consulting from OmniSolve helped us modernize our entire infrastructure. We saw immediate improvements in efficiency and cost savings.",
      name: "Michael Chen",
      company: "Digital Dynamics"
    },
    {
      quote: "Working with OmniSolve was a game-changer. Their team understood our needs and delivered solutions that directly impacted our bottom line.",
      name: "Emily Rodriguez",
      company: "Growth Solutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#007D78]/5 to-[#FF6B35]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses like yours have achieved with OmniSolve.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-[#007D78]">
              <CardContent className="p-6">
                <Quote className="text-[#FF6B35] mb-4" size={32} />
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-[#007D78]/20 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-[#007D78] font-medium">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;