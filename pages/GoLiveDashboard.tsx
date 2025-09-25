import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GoLiveInfo from '@/components/GoLiveInfo';
import DeploymentInstructions from '@/components/DeploymentInstructions';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import { Rocket, Settings, FileText, Info } from 'lucide-react';

const GoLiveDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
            <Rocket className="h-8 w-8 text-blue-600" />
            Go-Live Dashboard
          </h1>
          <p className="text-xl text-gray-600">Complete deployment guide for www.omnisolvetech.com</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="deployment" className="flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              Deployment
            </TabsTrigger>
            <TabsTrigger value="technical" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Technical
            </TabsTrigger>
            <TabsTrigger value="checklist" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Checklist
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <GoLiveInfo />
          </TabsContent>

          <TabsContent value="deployment">
            <DeploymentInstructions />
          </TabsContent>

          <TabsContent value="technical">
            <TechnicalSpecs />
          </TabsContent>

          <TabsContent value="checklist">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Pre-Launch Checklist</h2>
              <div className="space-y-3">
                {[
                  'Domain purchased and configured',
                  'Hostinger hosting account active',
                  'DNS records properly configured',
                  'Application built successfully (npm run build)',
                  'Files uploaded to public_html folder',
                  'SSL certificate enabled',
                  'All pages tested and functional',
                  'Contact forms working',
                  'Analytics tracking configured',
                  'SEO meta tags verified'
                ].map((item, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GoLiveDashboard;