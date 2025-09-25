import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import UniversalLeadCaptureModal from "./UniversalLeadCaptureModal";

const CaseStudies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetSimilarResults = () => {
    setIsModalOpen(true);
  };

  const handleViewDetails = () => {
    alert('Detailed case study coming soon!');
  };

  const caseStudies = [
    {
      title: "Retail Chain Reinvention",
      metrics: "35% faster service | 22% revenue boost",
      challenge: "Inefficient systems, long queues, and poor data visibility.",
      solution: "Unified POS system, real-time inventory tracking, AI analytics.",
      impact: "35% faster service, 22% jump in revenue, 19% reduction in labor costs.",
      featured: true
    },
    {
      title: "SaaS Company Turnaround",
      metrics: "3X conversion rate | 100% ROI in 90 days",
      challenge: "Low lead conversion, disjointed marketing flow.",
      solution: "Website overhaul, integrated chatbot funnel, smarter CRM workflows.",
      impact: "3X conversion rate, 47% boost in lead quality, 100% ROI in 90 days."
    },
    {
      title: "B2B Logistics Platform",
      metrics: "60+ hours saved/month | 4X repeat business",
      challenge: "Manual operations and inconsistent customer follow-up.",
      solution: "Workflow automation, customer journey redesign, AI sales assistant.",
      impact: "60+ hours saved/month, 4X increase in repeat business."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Results. Repeatable Success.
          </h2>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className={`${study.featured ? 'border-[#007D78] border-2' : ''} hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                    <Badge variant="secondary" className="bg-[#007D78] text-white">
                      {study.metrics}
                    </Badge>
                  </div>
                  {study.featured && (
                    <Badge className="bg-teal-100 text-[#007D78]">
                      Featured Case
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Impact:</h4>
                    <p className="text-gray-700 mb-4">{study.impact}</p>
                    <Button variant="outline" size="sm" onClick={handleViewDetails}>
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-[#007D78] text-white py-12 px-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">
              Let's turn complexity into clarity.
            </h3>
            <Button 
              size="lg" 
              className="bg-white text-[#007D78] hover:bg-gray-100"
              onClick={handleGetSimilarResults}
            >
              Get Similar Results
            </Button>
          </div>
        </div>
        
        <UniversalLeadCaptureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          actionType="results"
        />
      </div>
    </section>
  );
};

export default CaseStudies;