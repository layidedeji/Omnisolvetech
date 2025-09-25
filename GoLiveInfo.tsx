import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy, CheckCircle, Globe, Server, Settings, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import HostingerGuide from './HostingerGuide';

const GoLiveInfo = () => {
  const [ipAddress, setIpAddress] = useState<string>('Loading...');
  const { toast } = useToast();

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(() => setIpAddress('Unable to fetch'));
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const cnameRecords = [
    { type: 'A', name: '@', value: 'Hostinger Server IP (Get from hPanel)', ttl: '3600', priority: 'High' },
    { type: 'CNAME', name: 'www', value: 'omnisolvetech.com', ttl: '3600', priority: 'High' },
    { type: 'MX', name: '@', value: 'mail.hostinger.com', ttl: '3600', priority: 'Medium' },
    { type: 'TXT', name: '@', value: 'v=spf1 include:_spf.hostinger.com ~all', ttl: '3600', priority: 'Low' }
  ];

  const quickLinks = [
    { name: 'Hostinger Control Panel', url: 'https://hpanel.hostinger.com', description: 'Access your hosting dashboard' },
    { name: 'Domain Management', url: 'https://hpanel.hostinger.com/domains', description: 'Manage DNS and domain settings' },
    { name: 'File Manager', url: 'https://hpanel.hostinger.com/hosting/file-manager', description: 'Upload and manage website files' },
    { name: 'SSL Certificate', url: 'https://hpanel.hostinger.com/hosting/ssl', description: 'Configure HTTPS security' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Your Current IP Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <code className="bg-gray-100 px-3 py-2 rounded text-lg font-mono">{ipAddress}</code>
              <Button onClick={() => copyToClipboard(ipAddress, 'IP Address')} variant="outline">
                <Copy className="h-4 w-4 mr-2" /> Copy
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-2">This is your current public IP address for reference</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Domain Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Domain:</span>
                <code className="bg-gray-100 px-2 py-1 rounded">www.omnisolvetech.com</code>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Hosting:</span>
                <span>Hostinger</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">SSL:</span>
                <Badge variant="secondary">Required</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            DNS Records (CNAME Configuration)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cnameRecords.map((record, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <Badge variant={record.priority === 'High' ? 'destructive' : record.priority === 'Medium' ? 'default' : 'secondary'}>
                      {record.type}
                    </Badge>
                    <span className="text-xs text-gray-500">{record.priority}</span>
                  </div>
                  <div>
                    <span className="font-medium">Name:</span>
                    <code className="ml-2 bg-gray-100 px-1 rounded text-sm">{record.name}</code>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-medium">Value:</span>
                    <code className="ml-2 bg-gray-100 px-1 rounded text-sm break-all">{record.value}</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">TTL: {record.ttl}s</span>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => copyToClipboard(record.value, `${record.type} record`)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Quick Access Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{link.name}</h4>
                  <Button size="sm" variant="outline" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-gray-600">{link.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <HostingerGuide />
    </div>
  );
};

export default GoLiveInfo;