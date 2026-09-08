import React from 'react';
import KpiCards from './KpiCards';
import SalesPipeline from './SalesPipeline';
import ActivityFeed from './ActivityFeed';
import RevenueChart from './RevenueChart';
import { ChevronDown } from 'lucide-react';

const DashboardContent = () => {
  return (
    <div className="space-y-6">
      <KpiCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <SalesPipeline />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
        <div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200">
                <span className="font-medium text-gray-900">Create New Deal</span>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200">
                <span className="font-medium text-gray-900">Add New Customer</span>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200">
                <span className="font-medium text-gray-900">Schedule Meeting</span>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200">
                <span className="font-medium text-gray-900">Send Email Campaign</span>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
