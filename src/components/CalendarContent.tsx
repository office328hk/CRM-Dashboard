import React from 'react';
import { 
  Calendar,
  Clock,
  MapPin,
  Plus
} from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'meeting' | 'call' | 'task';
}

const CalendarContent: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      title: 'Quarterly Review Meeting',
      date: 'Jun 25, 2023',
      time: '10:00 AM',
      location: 'Conference Room A',
      type: 'meeting'
    },
    {
      id: 2,
      title: 'Product Demo Call',
      date: 'Jun 25, 2023',
      time: '2:30 PM',
      location: 'Zoom',
      type: 'call'
    },
    {
      id: 3,
      title: 'Prepare Q3 Report',
      date: 'Jun 26, 2023',
      time: '9:00 AM',
      location: 'Office',
      type: 'task'
    },
    {
      id: 4,
      title: 'Client Presentation',
      date: 'Jun 27, 2023',
      time: '3:00 PM',
      location: 'Client Office',
      type: 'meeting'
    },
    {
      id: 5,
      title: 'Team Standup',
      date: 'Jun 28, 2023',
      time: '11:00 AM',
      location: 'Conference Room B',
      type: 'meeting'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Calendar</h2>
        <button className="flex items-center text-blue-600 hover:text-blue-800">
          <Plus className="w-5 h-5 mr-1" />
          Add Event
        </button>
      </div>
      
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
              event.type === 'meeting' ? 'bg-blue-100 text-blue-600' :
              event.type === 'call' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'
            }`}>
              {event.type === 'meeting' && <Calendar className="w-6 h-6" />}
              {event.type === 'call' && <Clock className="w-6 h-6" />}
              {event.type === 'task' && <Clock className="w-6 h-6" />}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{event.title}</h3>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{event.date}</span>
                <Clock className="w-4 h-4 ml-3 mr-1" />
                <span>{event.time}</span>
                <MapPin className="w-4 h-4 ml-3 mr-1" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarContent;
