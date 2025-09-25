import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Users, MessageSquare, BarChart3, Settings, LogOut } from "lucide-react";

const AdminPortal = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalLeads: 0,
    monthlyLeads: 0,
    activeUsers: 0
  });
  const [recentLeads, setRecentLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      console.log('Fetching dashboard data...');
      setLoading(true);
      
      // Check authentication first
      const { data: { session } } = await supabase.auth.getSession();
      console.log('Current session:', session?.user?.email);
      
      // Fetch leads with simplified query
      const { data: leads, error: leadsError, count: leadsCount } = await supabase
        .from('leads')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false });

      console.log('Leads query result:', { leads: leads?.length, error: leadsError, count: leadsCount });

      if (leadsError) {
        console.error('Leads error:', leadsError);
        toast({
          title: "Leads Error",
          description: leadsError.message,
          variant: "destructive",
        });
      }

      // Fetch users with simplified query
      const { data: users, error: usersError, count: usersCount } = await supabase
        .from('users')
        .select('*', { count: 'exact' });

      console.log('Users query result:', { users: users?.length, error: usersError, count: usersCount });

      if (usersError) {
        console.error('Users error:', usersError);
        toast({
          title: "Users Error", 
          description: usersError.message,
          variant: "destructive",
        });
      }

      // Calculate stats even if some queries failed
      const totalLeads = leads?.length || 0;
      const totalUsers = users?.length || 0;

      // Calculate monthly leads
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const monthlyLeads = leads?.filter(lead => {
        const leadDate = new Date(lead.created_at);
        return leadDate.getMonth() === currentMonth && leadDate.getFullYear() === currentYear;
      }).length || 0;

      // Calculate active clients
      const activeClients = users?.filter(u => u.role === 'client').length || 0;

      const newStats = {
        totalUsers,
        totalLeads,
        monthlyLeads,
        activeUsers: activeClients
      };

      console.log('Final stats:', newStats);
      setStats(newStats);
      setRecentLeads(leads?.slice(0, 5) || []);
      
      toast({
        title: "Dashboard Updated",
        description: `Loaded ${totalLeads} leads and ${totalUsers} users`,
      });
      
    } catch (error: any) {
      console.error('Dashboard fetch error:', error);
      toast({
        title: "Error",
        description: `Dashboard error: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#007D78] mx-auto mb-4"></div>
          <p>Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
              <p className="text-gray-600">Manage your business operations</p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">Registered accounts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalLeads}</div>
              <p className="text-xs text-muted-foreground">All time leads</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Leads</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.monthlyLeads}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeUsers}</div>
              <p className="text-xs text-muted-foreground">Client accounts</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Leads */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.map((lead: any) => (
                <div key={lead.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">
                      {lead.first_name || lead.name} {lead.last_name || ''}
                    </h4>
                    <p className="text-sm text-gray-600">{lead.email}</p>
                    {lead.phone && (
                      <p className="text-sm text-gray-600">{lead.phone}</p>
                    )}
                    {lead.company && (
                      <p className="text-xs text-gray-500">{lead.company}</p>
                    )}
                    <p className="text-xs text-gray-500">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">{lead.source}</Badge>
                    {lead.service_interest && (
                      <p className="text-xs text-gray-500 mt-1">{lead.service_interest}</p>
                    )}
                    {lead.project_timeline && (
                      <p className="text-xs text-gray-500 mt-1">Timeline: {lead.project_timeline}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPortal;