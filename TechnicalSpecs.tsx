import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Database, Code, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TechnicalSpecs = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const projectSpecs = {
    domain: 'www.omnisolvetech.com',
    framework: 'React 18 + TypeScript + Vite',
    styling: 'Tailwind CSS + shadcn/ui',
    backend: 'Supabase (PostgreSQL + Edge Functions)',
    hosting: 'Hostinger',
    buildCommand: 'npm run build',
    outputDir: 'dist',
    nodeVersion: '18+'
  };

  const environmentVars = [
    { key: 'VITE_SUPABASE_URL', value: 'Your Supabase Project URL', required: true },
    { key: 'VITE_SUPABASE_ANON_KEY', value: 'Your Supabase Anon Key', required: true },
    { key: 'NODE_ENV', value: 'production', required: false }
  ];

  const fileStructure = [
    'dist/ (build output)',
    '├── index.html',
    '├── assets/',
    '│   ├── index-[hash].js',
    '│   └── index-[hash].css',
    '└── logo.svg'
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Project Specifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(projectSpecs).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center p-2 border rounded">
                <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">{value}</code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Environment Variables
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {environmentVars.map((env, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <code className="font-semibold">{env.key}</code>
                  <div className="flex items-center gap-2">
                    {env.required && <span className="text-red-500 text-xs">REQUIRED</span>}
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => copyToClipboard(env.key, 'Environment variable')}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{env.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Build Output Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm">
              {fileStructure.join('\n')}
            </pre>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Upload all contents of the 'dist' folder to your Hostinger public_html directory.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicalSpecs;