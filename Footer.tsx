import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleCall = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string) => {
    alert(`${platform} link coming soon!`);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@omnisolvetech.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+18005052790';
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#007D78] mb-4">
              OmniSolve Tech
            </h3>
            <p className="text-gray-300 mb-6">
              Transforming businesses through intelligent technology solutions, AI automation, and strategic consulting.
            </p>
            <div className="flex space-x-4">
              <Linkedin 
                className="w-6 h-6 text-gray-400 hover:text-[#007D78] cursor-pointer transition-colors" 
                onClick={() => handleSocialClick('LinkedIn')}
              />
              <Twitter 
                className="w-6 h-6 text-gray-400 hover:text-[#007D78] cursor-pointer transition-colors" 
                onClick={() => handleSocialClick('Twitter')}
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => handleNavClick('#services')} 
                  className="hover:text-[#007D78] transition-colors text-left"
                >
                  Business Diagnostics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#services')} 
                  className="hover:text-[#007D78] transition-colors text-left"
                >
                  IT Systems & Automation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#services')} 
                  className="hover:text-[#007D78] transition-colors text-left"
                >
                  AI Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#services')} 
                  className="hover:text-[#007D78] transition-colors text-left"
                >
                  Chatbot Funnels
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#services')} 
                  className="hover:text-[#007D78] transition-colors text-left"
                >
                  Website Development
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => handleNavClick('#about')} 
                  className="hover:text-[#007D78] transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#cases')} 
                  className="hover:text-[#007D78] transition-colors text-left"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#faq')} 
                  className="hover:text-[#007D78] transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => alert('Careers page coming soon!')} 
                  className="hover:text-[#007D78] transition-colors text-left"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#007D78]" />
                <button 
                  onClick={handleEmailClick}
                  className="hover:text-[#007D78] transition-colors cursor-pointer"
                >
                  info@omnisolvetech.com
                </button>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#007D78]" />
                <button 
                  onClick={handlePhoneClick}
                  className="hover:text-[#007D78] transition-colors cursor-pointer"
                >
                  (800) 505-2790
                </button>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-[#007D78]" />
                <span>5614 W Grand Parkway<br />Suite 102, #1048<br />Richmond Tx 77406<br />United States</span>
              </div>
            </div>
            <Button 
              className="mt-6 bg-[#007D78] hover:bg-teal-700"
              onClick={handleScheduleCall}
            >
              Schedule a Call
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 OmniSolve Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;