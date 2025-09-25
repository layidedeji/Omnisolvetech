import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserAndRedirect = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        console.log('Current user:', user); // Debug log
        
        if (user) {
          // Check user role in database
          const { data: userData, error } = await supabase
            .from('users')
            .select('role')
            .eq('email', user.email)
            .single();

          console.log('User data:', userData, 'Error:', error); // Debug log

          if (error) {
            console.error('Error fetching user role:', error);
          } else if (userData?.role === 'admin') {
            toast({
              title: "Welcome Admin!",
              description: "Redirecting to admin portal...",
            });
            navigate('/admin-portal');
            return;
          } else if (userData?.role === 'client') {
            toast({
              title: "Welcome!",
              description: "Redirecting to client portal...",
            });
            navigate('/client-portal');
            return;
          }
        } else {
          console.log('No authenticated user found'); // Debug log
        }
      } catch (error) {
        console.error('Error checking user:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUserAndRedirect();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default Index;