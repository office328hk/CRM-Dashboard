import React from 'react';
import { 
  Menu,
  Bell,
  User,
  Settings
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
      case 'sticky-board': return 'Sticky Board';
      case 'settings': return 'Settings';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="ml-4 text-xl font-semibold text-gray-900">
            {getActiveTabTitle()}
          </h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
