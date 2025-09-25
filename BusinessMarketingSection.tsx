import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, Users, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BusinessMarketingSection = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Target,
      title: "Content Strategy",
      description: "Done-for-you content strategies that drive engagement and conversions."
    },
    {
      icon: TrendingUp,
      title: "Lead Generation",
      description: "Powerful systems to capture and convert leads into loyal customers."
    },
    {
      icon: Users,
      title: "Social Media Kits",
      description: "Complete social media packages to keep your brand active and visible."
    },
    {
      icon: Megaphone,
      title: "SEO Optimization",
      description: "Landing pages and content optimized for search engine visibility."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Business Marketing & Content Strategy
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            We help small businesses stand out and grow fast with powerful, done-for-you content strategies and lead generation systems. From blog posts and email sequences to SEO-optimized landing pages and social media kits, we create marketing that drives results and keeps your brand visible, credible, and active.
          </p>
          <Button 
            onClick={() => navigate('/business-marketing')}
            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-3 text-lg"
          >
            Learn More
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessMarketingSection;