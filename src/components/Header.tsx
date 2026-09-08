import React from 'react';
import { 
  Search,
  Bell,
  ChevronDown,
  Menu
} from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
  activeTab: string;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, activeTab }) => {
  const getActiveTabTitle = () => {
    switch(activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'customers': return 'Customers';
      case 'sales-pipeline': return 'Sales Pipeline';
      case 'calendar': return 'Calendar';
      case 'settings': return 'Settings';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="lg:hidden mr-4 text-gray-600 hover:text-gray-900"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">{getActiveTabTitle()}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="font-semibold text-gray-700">JD</span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
