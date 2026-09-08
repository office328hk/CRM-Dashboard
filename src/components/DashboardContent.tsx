import React from 'react';
import { 
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  ChevronDown,
  Search,
  Filter,
  Plus,
  User,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const DashboardContent = () => {
  // Mock data for dashboard cards
  const stats = [
    { title: 'Total Customers', value: '1,248', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Deals', value: '32', change: '+5%', icon: TrendingUp, color: 'bg-green-500' },
    { title: 'Upcoming Events', value: '8', change: '-2%', icon: Calendar, color: 'bg-purple-500' },
    { title: 'Revenue', value: '$42,567', change: '+18%', icon: BarChart3, color: 'bg-orange-500' }
  ];

  const recentActivities = [
    { id: 1, user: 'Alex Johnson', action: 'created a new customer', time: '2 hours ago' },
    { id: 2, user: 'Maria Garcia', action: 'updated deal status', time: '4 hours ago' },
    { id: 3, user: 'David Smith', action: 'scheduled meeting', time: '1 day ago' },
    { id: 4, user: 'Sarah Williams', action: 'sent proposal', time: '2 days ago' }
  ];

  const salesPipeline = [
    { stage: 'Prospecting', count: 12, color: 'bg-gray-200' },
    { stage: 'Qualification', count: 8, color: 'bg-blue-200' },
    { stage: 'Proposal', count: 5, color: 'bg-yellow-200' },
    { stage: 'Negotiation', count: 3, color: 'bg-purple-200' },
    { stage: 'Closed Won', count: 15, color: 'bg-green-200' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Pipeline */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Pipeline</h2>
          <div className="space-y-4">
            {salesPipeline.map((stage, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32 text-sm font-medium text-gray-700">{stage.stage}</div>
                <div className="flex-1 ml-4">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`${stage.color} h-full rounded-full`}
                      style={{ width: `${(stage.count / 20) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-10 text-right text-sm font-medium text-gray-900">{stage.count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-500">{activity.action}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h2>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-500">Revenue chart visualization would appear here</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
