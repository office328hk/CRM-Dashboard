import React, { useState } from 'react';
import { 
  Search,
  Filter,
  User,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Plus,
  Calendar,
  TrendingUp,
  X
} from 'lucide-react';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'Active' | 'Inactive';
  location: string;
  lastContact: string;
  dealValue: string;
  avatarColor: string;
}

const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  // Mock customer data
  const customers: Customer[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      phone: '+1 (555) 123-4567',
      company: 'Tech Solutions Inc.',
      status: 'Active',
      location: 'New York, NY',
      lastContact: '2023-06-15',
      dealValue: '$12,500',
      avatarColor: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      email: 'maria.g@example.com',
      phone: '+1 (555) 987-6543',
      company: 'Global Enterprises',
      status: 'Active',
      location: 'Los Angeles, CA',
      lastContact: '2023-06-18',
      dealValue: '$8,900',
      avatarColor: 'bg-green-500'
    },
    {
      id: 3,
      name: 'David Smith',
      email: 'david.s@example.com',
      phone: '+1 (555) 456-7890',
      company: 'Innovate Corp',
      status: 'Inactive',
      location: 'Chicago, IL',
      lastContact: '2023-05-22',
      dealValue: '$15,200',
      avatarColor: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.w@example.com',
      phone: '+1 (555) 234-5678',
      company: 'Future Systems',
      status: 'Active',
      location: 'Miami, FL',
      lastContact: '2023-06-20',
      dealValue: '$22,300',
      avatarColor: 'bg-orange-500'
    },
    {
      id: 5,
      name: 'James Brown',
      email: 'james.b@example.com',
      phone: '+1 (555) 876-5432',
      company: 'Digital Dynamics',
      status: 'Active',
      location: 'Seattle, WA',
      lastContact: '2023-06-10',
      dealValue: '$9,800',
      avatarColor: 'bg-pink-500'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      email: 'lisa.a@example.com',
      phone: '+1 (555) 345-6789',
      company: 'Creative Minds',
      status: 'Active',
      location: 'Boston, MA',
      lastContact: '2023-06-12',
      dealValue: '$17,600',
      avatarColor: 'bg-indigo-500'
    },
    {
      id: 7,
      name: 'Robert Taylor',
      email: 'robert.t@example.com',
      phone: '+1 (555) 789-0123',
      company: 'Data Systems Ltd.',
      status: 'Inactive',
      location: 'Austin, TX',
      lastContact: '2023-04-30',
      dealValue: '$11,400',
      avatarColor: 'bg-teal-500'
    },
    {
      id: 8,
      name: 'Emily Davis',
      email: 'emily.d@example.com',
      phone: '+1 (555) 678-9012',
      company: 'Design Studio',
      status: 'Active',
      location: 'Denver, CO',
      lastContact: '2023-06-19',
      dealValue: '$14,700',
      avatarColor: 'bg-yellow-500'
    }
  ];

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || customer.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getAvatarColor = (color: string) => {
    return color;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your customer relationships and interactions</p>
        </div>
        <button className="mt-4 md:mt-0 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
          <Plus className="w-5 h-5 mr-2" />
          Add Customer
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search customers..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
            
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Status:</span>
              <select 
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCustomers.map((customer) => (
          <div 
            key={customer.id} 
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full ${getAvatarColor(customer.avatarColor)} flex items-center justify-center text-white font-semibold`}>
                  {customer.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-900">{customer.name}</h3>
                  <p className="text-sm text-gray-500">{customer.company}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(customer.status)}`}>
                {customer.status}
              </span>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{customer.location}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Last Contact</p>
                <p className="text-sm font-medium text-gray-900">{customer.lastContact}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Deal Value</p>
                <p className="text-sm font-medium text-gray-900">{customer.dealValue}</p>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm font-medium transition-colors duration-200">
                View
              </button>
              <button className="flex-1 py-2 px-3 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg text-sm font-medium transition-colors duration-200">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Table */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Customer List</h2>
          <span className="text-sm text-gray-500">{filteredCustomers.length} customers</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deal Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${getAvatarColor(customer.avatarColor)} flex items-center justify-center text-white font-semibold`}>
                        {customer.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(customer.status)}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.lastContact}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {customer.dealValue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                    <button className="text-gray-600 hover:text-gray-900">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
