import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Server, Globe, Shield, Upload } from 'lucide-react';

const HostingerGuide = () => {
  const hostingerSteps = [
    {
      title: "Access Hostinger Control Panel",
      description: "Log into your Hostinger hPanel account",
      url: "https://hpanel.hostinger.com",
      icon: <Globe className="h-5 w-5" />
    },
    {
      title: "Navigate to File Manager",
      description: "Go to Files > File Manager in your control panel",
      details: "This will open the file management interface",
      icon: <Upload className="h-5 w-5" />
    },
    {
      title: "Upload Build Files",
      description: "Upload contents of 'dist' folder to public_html",
      details: "Delete default index.html first, then upload your files",
      icon: <Server className="h-5 w-5" />
    },
    {
      title: "Configure SSL Certificate",
      description: "Enable SSL in Security > SSL/TLS section",
      details: "Usually auto-enabled for custom domains",
      icon: <Shield className="h-5 w-5" />
    }
  ];

  const dnsSettings = [
    { type: "A Record", name: "@", value: "Your Hostinger Server IP", ttl: "3600" },
    { type: "CNAME", name: "www", value: "omnisolvetech.com", ttl: "3600" },
    { type: "MX Record", name: "@", value: "mail.hostinger.com", priority: "10" }
  ];

  const troubleshooting = [
    {
      issue: "Domain not pointing to Hostinger",
      solution: "Update nameservers at your domain registrar to Hostinger's nameservers"
    },
    {
      issue: "SSL certificate not working",
      solution: "Wait 24-48 hours after domain setup, or manually request SSL in hPanel"
    },
    {
      issue: "Website showing 404 error",
      solution: "Ensure index.html is in the root of public_html folder"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            Hostinger Deployment Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {hostingerSteps.map((step, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    {step.details && (
                      <p className="text-sm text-gray-500 mb-2">{step.details}</p>
                    )}
                    {step.url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={step.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Open hPanel
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>DNS Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dnsSettings.map((dns, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-3 border rounded">
                <Badge variant="secondary">{dns.type}</Badge>
                <span className="font-mono text-sm">{dns.name}</span>
                <span className="font-mono text-sm">{dns.value}</span>
                <span className="text-sm text-gray-500">{dns.ttl}s</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Issues & Solutions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {troubleshooting.map((item, index) => (
              <div key={index} className="border-l-4 border-orange-400 pl-4 py-2">
                <h4 className="font-semibold text-orange-800">{item.issue}</h4>
                <p className="text-gray-600 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HostingerGuide;