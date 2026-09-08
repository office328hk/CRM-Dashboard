import React from 'react';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Calendar
} from 'lucide-react';

const KpiCards = () => {
  const kpiData = [
    {
      title: 'Total Revenue',
      value: '$42,567',
      change: '+12.5%',
      icon: DollarSign,
      color: 'bg-blue-500'
    },
    {
      title: 'New Customers',
      value: '142',
      change: '+8.3%',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Conversion Rate',
      value: '24.8%',
      change: '+3.2%',
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      title: 'Upcoming Events',
      value: '18',
      change: '-2.1%',
      icon: Calendar,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {kpiData.map((item, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{item.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{item.value}</p>
              <p className={`text-sm mt-2 ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {item.change} from last month
              </p>
            </div>
            <div className={`${item.color} p-3 rounded-lg`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KpiCards;
