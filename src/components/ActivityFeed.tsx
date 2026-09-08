import React from 'react';
import { 
  User,
  MessageSquare,
  Calendar,
  FileText
} from 'lucide-react';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      user: 'Alex Johnson',
      action: 'completed the deal',
      target: 'Enterprise Contract',
      time: '2 hours ago',
      type: 'deal'
    },
    {
      id: 2,
      user: 'Maria Garcia',
      action: 'commented on',
      target: 'Startup Package',
      time: '4 hours ago',
      type: 'comment'
    },
    {
      id: 3,
      user: 'David Smith',
      action: 'scheduled a meeting with',
      target: 'Mid-size Company',
      time: '1 day ago',
      type: 'meeting'
    },
    {
      id: 4,
      user: 'Sarah Williams',
      action: 'created a new task',
      target: 'Prepare Q3 Report',
      time: '2 days ago',
      type: 'task'
    },
    {
      id: 5,
      user: 'James Brown',
      action: 'updated the customer profile for',
      target: 'Digital Dynamics',
      time: '3 days ago',
      type: 'customer'
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'deal': return <FileText className="w-5 h-5 text-blue-500" />;
      case 'comment': return <MessageSquare className="w-5 h-5 text-green-500" />;
      case 'meeting': return <Calendar className="w-5 h-5 text-purple-500" />;
      case 'task': return <FileText className="w-5 h-5 text-orange-500" />;
      case 'customer': return <User className="w-5 h-5 text-gray-500" />;
      default: return <User className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start hover:bg-gray-50 transition-colors duration-200 rounded-lg p-3">
            <div className="mr-3 mt-1">
              {getIcon(activity.type)}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-center text-sm text-blue-600 hover:text-blue-800 font-medium border-t border-gray-100 pt-3">
        View All Activity
      </button>
    </div>
  );
};

export default ActivityFeed;
