import React from 'react';
import { 
  User,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Plus
} from 'lucide-react';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'Active' | 'Inactive';
  location: string;
}

const CustomersContent: React.FC = () => {
  const customers: Customer[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      phone: '+1 (555) 123-4567',
      company: 'Tech Solutions Inc.',
      status: 'Active',
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      email: 'maria.g@example.com',
      phone: '+1 (555) 987-6543',
      company: 'Global Enterprises',
      status: 'Active',
      location: 'Los Angeles, CA'
    },
    {
      id: 3,
      name: 'David Smith',
      email: 'david.s@example.com',
      phone: '+1 (555) 456-7890',
      company: 'Innovate Corp',
      status: 'Inactive',
      location: 'Chicago, IL'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.w@example.com',
      phone: '+1 (555) 234-5678',
      company: 'Future Systems',
      status: 'Active',
      location: 'Miami, FL'
    },
    {
      id: 5,
      name: 'James Brown',
      email: 'james.b@example.com',
      phone: '+1 (555) 876-5432',
      company: 'Digital Dynamics',
      status: 'Active',
      location: 'Seattle, WA'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      email: 'lisa.a@example.com',
      phone: '+1 (555) 345-6789',
      company: 'Creative Minds',
      status: 'Active',
      location: 'Boston, MA'
    },
    {
      id: 7,
      name: 'Robert Taylor',
      email: 'robert.t@example.com',
      phone: '+1 (555) 789-0123',
      company: 'Data Systems Ltd.',
      status: 'Inactive',
      location: 'Austin, TX'
    },
    {
      id: 8,
      name: 'Emily Davis',
      email: 'emily.d@example.com',
      phone: '+1 (555) 678-9012',
      company: 'Design Studio',
      status: 'Active',
      location: 'Denver, CO'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Customer Management</h2>
        <button className="flex items-center text-blue-600 hover:text-blue-800">
          <Plus className="w-5 h-5 mr-1" />
          Add Customer
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
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
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    customer.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {customer.location}
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
  );
};

export default CustomersContent;
