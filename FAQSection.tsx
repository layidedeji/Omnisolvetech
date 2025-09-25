import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { chatbotKnowledgeBase } from './chatbot/chatbotKnowledgeBase';
import UniversalLeadCaptureModal from './UniversalLeadCaptureModal';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <Card className="mb-4 border-l-4 border-l-[#007D78] hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <Button
          variant="ghost"
          className="w-full justify-between p-0 h-auto text-left hover:bg-[#007D78]/5"
          onClick={onToggle}
        >
          <CardTitle className="text-lg font-semibold text-gray-900">
            {question}
          </CardTitle>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-[#FF6B35]" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-[#007D78]" />
          )}
        </Button>
      </CardHeader>
      {isOpen && (
        <CardContent className="pt-0">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </CardContent>
      )}
    </Card>
  );
};

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>('general');

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  const categories = [
    { id: 'general', label: 'General', faqs: chatbotKnowledgeBase.faqs.general },
    { id: 'technical', label: 'Technical', faqs: chatbotKnowledgeBase.faqs.technical },
    { id: 'process', label: 'Process', faqs: chatbotKnowledgeBase.faqs.process },
    { id: 'pricing', label: 'Pricing', faqs: chatbotKnowledgeBase.faqs.pricing }
  ];

  const activeData = categories.find(cat => cat.id === activeCategory);

  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const handleEmailClick = () => {
    setIsEmailModalOpen(true);
  };

  const handlePhoneClick = () => {
    setIsCallModalOpen(true);
  };

  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-[#007D78]/5 to-[#FF6B35]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className={`mb-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#007D78] to-[#FF6B35] hover:from-[#006B66] hover:to-[#E55A2B]'
                  : 'border-[#007D78] text-[#007D78] hover:bg-[#007D78] hover:text-white'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          {activeData?.faqs.map((faq, index) => {
            const itemId = `${activeCategory}-${index}`;
            return (
              <FAQItem
                key={itemId}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.has(itemId)}
                onToggle={() => toggleItem(itemId)}
              />
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-[#007D78] text-[#007D78] hover:bg-[#007D78] hover:text-white"
              onClick={handleEmailClick}
            >
              Email Us
            </Button>
            <Button 
              className="bg-gradient-to-r from-[#007D78] to-[#FF6B35] hover:from-[#006B66] hover:to-[#E55A2B]"
              onClick={handlePhoneClick}
            >
              Call Us
            </Button>
          </div>
        </div>
        
        <UniversalLeadCaptureModal
          isOpen={isEmailModalOpen}
          onClose={() => setIsEmailModalOpen(false)}
          actionType="email"
        />
        
        <UniversalLeadCaptureModal
          isOpen={isCallModalOpen}
          onClose={() => setIsCallModalOpen(false)}
          actionType="phone"
        />
      </div>
    </section>
  );
};

export default FAQSection;