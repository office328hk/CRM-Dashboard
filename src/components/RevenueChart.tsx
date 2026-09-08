import React from 'react';

const RevenueChart = () => {
  // Mock data for revenue chart
  const revenueData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 2000 },
    { month: 'Apr', revenue: 2780 },
    { month: 'May', revenue: 1890 },
    { month: 'Jun', revenue: 2390 },
    { month: 'Jul', revenue: 3490 }
  ];

  const maxValue = Math.max(...revenueData.map(item => item.revenue));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Revenue Overview</h2>
      
      <div className="flex items-end justify-between h-64">
        {revenueData.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <div className="text-xs text-gray-500 mb-2">{item.month}</div>
            <div 
              className="w-3/4 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-600 hover:to-blue-500"
              style={{ height: `${(item.revenue / maxValue) * 100}%` }}
            ></div>
            <div className="text-xs text-gray-700 mt-2 font-medium">${item.revenue}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-xl font-bold text-gray-900">$24,540</p>
          </div>
          <div className="flex items-center">
            <span className="text-green-600 text-sm font-medium mr-2">+12.5%</span>
            <span className="text-sm text-gray-500">from last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
