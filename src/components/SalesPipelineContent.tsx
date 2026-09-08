import React from 'react';
import { 
  ChevronDown,
  Plus,
  User,
  DollarSign,
  Calendar
} from 'lucide-react';

interface Deal {
  id: number;
  name: string;
  value: string;
  stage: string;
  probability: number;
  owner: string;
  lastUpdated: string;
}

const SalesPipelineContent: React.FC = () => {
  const deals: Deal[] = [
    {
      id: 1,
      name: 'Enterprise Contract',
      value: '$125,000',
      stage: 'Negotiation',
      probability: 75,
      owner: 'Sarah Johnson',
      lastUpdated: '2023-06-15'
    },
    {
      id: 2,
      name: 'Startup Package',
      value: '$45,000',
      stage: 'Proposal',
      probability: 60,
      owner: 'Michael Chen',
      lastUpdated: '2023-06-18'
    },
    {
      id: 3,
      name: 'Mid-size Company',
      value: '$89,000',
      stage: 'Qualification',
      probability: 45,
      owner: 'Emma Davis',
      lastUpdated: '2023-06-20'
    },
    {
      id: 4,
      name: 'Government Contract',
      value: '$210,000',
      stage: 'Discovery',
      probability: 30,
      owner: 'Robert Wilson',
      lastUpdated: '2023-06-22'
    },
    {
      id: 5,
      name: 'Small Business Deal',
      value: '$15,000',
      stage: 'Prospecting',
      probability: 20,
      owner: 'Jennifer Lee',
      lastUpdated: '2023-06-25'
    },
    {
      id: 6,
      name: 'E-commerce Platform',
      value: '$75,000',
      stage: 'Negotiation',
      probability: 80,
      owner: 'David Miller',
      lastUpdated: '2023-06-28'
    }
  ];

  const stages = [
    { name: 'Prospecting', count: 8 },
    { name: 'Qualification', count: 5 },
    { name: 'Proposal', count: 3 },
    { name: 'Negotiation', count: 2 },
    { name: 'Closed Won', count: 12 },
    { name: 'Closed Lost', count: 4 }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Sales Pipeline</h2>
        <button className="flex items-center text-blue-600 hover:text-blue-800">
          <Plus className="w-5 h-5 mr-1" />
          Add Deal
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Deals by Stage</h3>
          <div className="space-y-4">
            {stages.map((stage, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    stage.name === 'Prospecting' ? 'bg-blue-500' :
                    stage.name === 'Qualification' ? 'bg-purple-500' :
                    stage.name === 'Proposal' ? 'bg-yellow-500' :
                    stage.name === 'Negotiation' ? 'bg-orange-500' :
                    stage.name === 'Closed Won' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="text-gray-700">{stage.name}</span>
                </div>
                <span className="font-medium text-gray-900">{stage.count}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Recent Deals</h3>
          <div className="space-y-4">
            {deals.map((deal) => (
              <div key={deal.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{deal.name}</p>
                    <p className="text-sm text-gray-500">{deal.owner}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{deal.value}</p>
                  <p className="text-sm text-gray-500">{deal.stage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPipelineContent;
