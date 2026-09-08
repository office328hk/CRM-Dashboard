import React from 'react';
import { 
  Home, 
  Users, 
  BarChart3, 
  Calendar, 
  Settings, 
  Bell, 
  Search,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, activeTab, setActiveTab }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold">CRM Pro</span>
        </div>
        <button 
          onClick={toggleSidebar}
          className="lg:hidden text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-1">
          {[
            { name: 'Dashboard', icon: Home, key: 'dashboard' },
            { name: 'Customers', icon: Users, key: 'customers' },
            { name: 'Sales Pipeline', icon: BarChart3, key: 'sales-pipeline' },
            { name: 'Calendar', icon: Calendar, key: 'calendar' },
            { name: 'Settings', icon: Settings, key: 'settings' },
          ].map((item) => (
            <li key={item.key}>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.key);
                }}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  activeTab === item.key ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="font-semibold">JD</span>
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
