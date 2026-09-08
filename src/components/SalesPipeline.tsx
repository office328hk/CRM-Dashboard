import React from 'react';
import { 
  ChevronDown,
  TrendingUp,
  Users
} from 'lucide-react';

const SalesPipeline = () => {
  const pipelineData = [
    {
      stage: 'Prospecting',
      deals: 12,
      value: '$245,000',
      progress: 30,
      color: 'bg-blue-500'
    },
    {
      stage: 'Qualification',
      deals: 8,
      value: '$189,000',
      progress: 50,
      color: 'bg-purple-500'
    },
    {
      stage: 'Proposal',
      deals: 5,
      value: '$124,000',
      progress: 70,
      color: 'bg-yellow-500'
    },
    {
      stage: 'Negotiation',
      deals: 3,
      value: '$89,000',
      progress: 90,
      color: 'bg-orange-500'
    },
    {
      stage: 'Closed Won',
      deals: 15,
      value: '$342,000',
      progress: 100,
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Sales Pipeline</h2>
      
      <div className="space-y-4">
        {pipelineData.map((item, index) => (
          <div key={index} className="hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-3 ${item.color}`}></div>
                <span className="font-medium text-gray-900">{item.stage}</span>
              </div>
              <div className="text-sm text-gray-500">
                {item.deals} deals • {item.value}
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${item.color}`} 
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-sm font-medium text-gray-900">Pipeline Value: $1,089,000</span>
          </div>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesPipeline;
