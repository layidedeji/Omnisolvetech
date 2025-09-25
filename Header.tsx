import { Button } from "@/components/ui/button";
import { Menu, X, Rocket, LogIn } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import OmniSolveLogo from "./OmniSolveLogo";
import UniversalLeadCaptureModal from "./UniversalLeadCaptureModal";
import AuthModal from "./AuthModal";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#cases" },
    { label: "FAQ", href: "#faq" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleGetStartedClick = () => {
    setIsLeadModalOpen(true);
  };

  const handleAuthSuccess = (userData: any) => {
    setUser(userData);
    // Redirect based on role
    if (userData.role === 'admin') {
      window.location.href = '/admin-portal';
    } else {
      window.location.href = '/client-portal';
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center space-x-3">
            <OmniSolveLogo headerMode={true} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-[#007D78] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Link to="/go-live">
              <Button variant="outline" className="mr-2">
                <Rocket className="w-4 h-4 mr-2" />
                Go Live
              </Button>
            </Link>
            <Button 
              variant="outline"
              className="mr-2"
              onClick={() => setIsAuthModalOpen(true)}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button 
              className="bg-[#007D78] hover:bg-teal-700"
              onClick={handleGetStartedClick}
            >
              Book Consultation
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-[#007D78] transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <Link to="/go-live" className="w-fit">
                <Button variant="outline" className="mb-2">
                  <Rocket className="w-4 h-4 mr-2" />
                  Go Live
                </Button>
              </Link>
              <Button 
                variant="outline"
                className="mb-2 w-fit"
                onClick={() => setIsAuthModalOpen(true)}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button 
                className="bg-[#007D78] hover:bg-teal-700 w-fit"
                onClick={handleGetStartedClick}
              >
                Book Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
      
      <UniversalLeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        actionType="consultation"
      />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </header>
  );
};

export default Header;