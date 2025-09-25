import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BusinessDiagnostics from "./pages/BusinessDiagnostics";
import BusinessMarketing from "./pages/BusinessMarketing";
import ITSystemsAutomation from "./pages/ITSystemsAutomation";
import AISolutions from "./pages/AISolutions";
import ConversionFunnels from "./pages/ConversionFunnels";
import CustomWebsites from "./pages/CustomWebsites";
import GoLiveDashboard from "./pages/GoLiveDashboard";
import LeadsDashboard from "./pages/LeadsDashboard";
import AdminPortal from "./pages/AdminPortal";
import ClientPortal from "./pages/ClientPortal";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/business-diagnostics" element={<BusinessDiagnostics />} />
            <Route path="/business-marketing" element={<BusinessMarketing />} />
            <Route path="/it-systems-automation" element={<ITSystemsAutomation />} />
            <Route path="/ai-solutions" element={<AISolutions />} />
            <Route path="/conversion-funnels" element={<ConversionFunnels />} />
            <Route path="/custom-websites" element={<CustomWebsites />} />
            <Route path="/go-live" element={<GoLiveDashboard />} />
            <Route path="/leads" element={<LeadsDashboard />} />
            <Route path="/admin-portal" element={<AdminPortal />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;