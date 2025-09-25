import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, Info } from 'lucide-react';

const DeploymentInstructions = () => {
  const steps = [
    {
      title: "Build Your Application",
      description: "Run 'npm run build' to create production files",
      command: "npm run build",
      status: "required"
    },
    {
      title: "Upload to Hostinger",
      description: "Upload the 'dist' folder contents to your domain's public_html folder",
      details: "Use File Manager or FTP to upload files",
      status: "required"
    },
    {
      title: "Configure Domain DNS",
      description: "Point your domain to Hostinger's nameservers",
      details: "Update DNS records in your domain registrar",
      status: "required"
    },
    {
      title: "SSL Certificate",
      description: "Enable SSL in Hostinger control panel",
      details: "Usually auto-enabled for custom domains",
      status: "recommended"
    },
    {
      title: "Test Your Website",
      description: "Visit www.omnisolvetech.com to verify deployment",
      details: "Check all pages and functionality",
      status: "required"
    }
  ];

  const hostingerInfo = {
    nameservers: ['ns1.dns-parking.com', 'ns2.dns-parking.com'],
    controlPanel: 'https://hpanel.hostinger.com',
    supportEmail: 'support@hostinger.com'
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Deployment Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-lg">{index + 1}. {step.title}</span>
                  <Badge variant={step.status === 'required' ? 'destructive' : 'secondary'}>
                    {step.status}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-1">{step.description}</p>
                {step.command && (
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm block mt-2">{step.command}</code>
                )}
                {step.details && (
                  <p className="text-sm text-gray-500 mt-1">{step.details}</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Hostinger Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Nameservers:</h4>
              {hostingerInfo.nameservers.map((ns, index) => (
                <code key={index} className="block bg-gray-100 px-2 py-1 rounded text-sm mb-1">{ns}</code>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-2">Control Panel:</h4>
              <a href={hostingerInfo.controlPanel} target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:underline">
                {hostingerInfo.controlPanel}
              </a>
              <h4 className="font-semibold mb-2 mt-4">Support:</h4>
              <a href={`mailto:${hostingerInfo.supportEmail}`} className="text-blue-600 hover:underline">
                {hostingerInfo.supportEmail}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeploymentInstructions;