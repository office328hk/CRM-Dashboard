import React, { useState } from 'react';
import { 
  Calendar,
  Clock,
  MapPin,
  Plus,
  Edit3,
  Trash2,
  X,
  Check,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'meeting' | 'call' | 'task' | 'notification';
  color: string;
}

const CalendarContent: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: 'Quarterly Review Meeting',
      date: 'Jun 25, 2023',
      time: '10:00 AM',
      location: 'Conference Room A',
      type: 'meeting',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Product Demo Call',
      date: 'Jun 25, 2023',
      time: '2:30 PM',
      location: 'Zoom',
      type: 'call',
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'Prepare Q3 Report',
      date: 'Jun 26, 2023',
      time: '9:00 AM',
      location: 'Office',
      type: 'task',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Client Presentation',
      date: 'Jun 27, 2023',
      time: '3:00 PM',
      location: 'Client Office',
      type: 'meeting',
      color: 'bg-blue-500'
    },
    {
      id: 5,
      title: 'Team Standup',
      date: 'Jun 28, 2023',
      time: '11:00 AM',
      location: 'Conference Room B',
      type: 'meeting',
      color: 'bg-blue-500'
    },
    {
      id: 6,
      title: 'System Maintenance',
      date: 'Jun 29, 2023',
      time: '1:00 PM',
      location: 'Server Room',
      type: 'notification',
      color: 'bg-orange-500'
    }
  ]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEventDetails, setShowEventDetails] = useState<Event | null>(null);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    type: 'task' as 'meeting' | 'call' | 'task' | 'notification',
    color: 'bg-purple-500'
  });

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time) {
      const event: Event = {
        id: events.length + 1,
        title: newEvent.title,
        date: newEvent.date,
        time: newEvent.time,
        location: newEvent.location,
        type: newEvent.type,
        color: newEvent.color
      };
      
      setEvents([...events, event]);
      setNewEvent({
        title: '',
        date: '',
        time: '',
        location: '',
        type: 'task',
        color: 'bg-purple-500'
      });
      setShowAddModal(false);
    }
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
    setIsEditing(true);
    setNewEvent({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      type: event.type,
      color: event.color
    });
    setShowAddModal(true);
  };

  const handleUpdateEvent = () => {
    if (editingEvent && newEvent.title && newEvent.date && newEvent.time) {
      setEvents(events.map(event => 
        event.id === editingEvent.id ? {
          ...event,
          title: newEvent.title,
          date: newEvent.date,
          time: newEvent.time,
          location: newEvent.location,
          type: newEvent.type,
          color: newEvent.color
        } : event
      ));
      
      setEditingEvent(null);
      setIsEditing(false);
      setNewEvent({
        title: '',
        date: '',
        time: '',
        location: '',
        type: 'task',
        color: 'bg-purple-500'
      });
      setShowAddModal(false);
    }
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
    setShowEventDetails(null);
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'meeting': return <Calendar className="w-4 h-4" />;
      case 'call': return <Clock className="w-4 h-4" />;
      case 'task': return <Check className="w-4 h-4" />;
      case 'notification': return <Clock className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'meeting': return 'bg-blue-100 text-blue-800';
      case 'call': return 'bg-green-100 text-green-800';
      case 'task': return 'bg-purple-100 text-purple-800';
      case 'notification': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeBadge = (type: string) => {
    switch(type) {
      case 'meeting': return 'Meeting';
      case 'call': return 'Call';
      case 'task': return 'Task';
      case 'notification': return 'Notification';
      default: return type;
    }
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const getEventsForDate = (day: number) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day && 
             eventDate.getMonth() === currentDate.getMonth() && 
             eventDate.getFullYear() === currentDate.getFullYear();
    });
  };

  const handleEventClick = (event: Event) => {
    setShowEventDetails(event);
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 p-1 border border-gray-100"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDate(day);
      const isToday = 
        day === new Date().getDate() && 
        currentDate.getMonth() === new Date().getMonth() && 
        currentDate.getFullYear() === new Date().getFullYear();
      
      days.push(
        <div 
          key={day} 
          className={`h-24 p-1 border border-gray-100 ${isToday ? 'bg-blue-50' : ''}`}
        >
          <div className={`text-sm font-medium mb-1 ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map(event => (
              <div 
                key={event.id} 
                onClick={() => handleEventClick(event)}
                className={`text-xs px-2 py-1 rounded truncate ${event.color} text-white cursor-pointer hover:opacity-90 transition-opacity`}
                title={`${event.title} - ${event.time}`}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div 
                onClick={() => handleEventClick(dayEvents[0])}
                className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors"
              >
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Calendar</h2>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigateMonth('prev')}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-xl font-medium text-gray-900">
            {formatDate(currentDate)}
          </h3>
          <button 
            onClick={() => navigateMonth('next')}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5 mr-1" />
            Add Event
          </button>
        </div>
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-medium text-gray-700 py-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-6">
        {renderCalendarDays()}
      </div>
      
      {/* Events List */}
      <div className="mt-8">
        <h3 className="text-md font-medium text-gray-900 mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${event.color}`}>
                {getTypeIcon(event.type)}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{event.title}</h3>
                <div className="flex items-center mt-2 text-sm text-gray-500 flex-wrap gap-2">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                    {getTypeBadge(event.type)}
                  </div>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{event.date}</span>
                  <Clock className="w-4 h-4 ml-3 mr-1" />
                  <span>{event.time}</span>
                  <MapPin className="w-4 h-4 ml-3 mr-1" />
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleEditEvent(event)}
                  className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDeleteEvent(event.id)}
                  className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      {showEventDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Event Details</h3>
              <button 
                onClick={() => setShowEventDetails(null)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${showEventDetails.color}`}>
                  {getTypeIcon(showEventDetails.type)}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{showEventDetails.title}</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="text-gray-700">{showEventDetails.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="text-gray-700">{showEventDetails.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="text-gray-700">{showEventDetails.location}</span>
                </div>
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(showEventDetails.type)}`}>
                    {getTypeBadge(showEventDetails.type)}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => {
                    setShowEventDetails(null);
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleEditEvent(showEventDetails);
                    setShowEventDetails(null);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Edit Event
                </button>
                <button
                  onClick={() => {
                    handleDeleteEvent(showEventDetails.id);
                  }}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  Delete Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {isEditing ? 'Edit Event' : 'Add New Event'}
              </h3>
              <button 
                onClick={() => {
                  setShowAddModal(false);
                  setIsEditing(false);
                  setEditingEvent(null);
                  setNewEvent({
                    title: '',
                    date: '',
                    time: '',
                    location: '',
                    type: 'task',
                    color: 'bg-purple-500'
                  });
                }}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Event title"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input
                    type="time"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Location"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={newEvent.type}
                  onChange={(e) => setNewEvent({...newEvent, type: e.target.value as any})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="meeting">Meeting</option>
                  <option value="call">Call</option>
                  <option value="task">Task</option>
                  <option value="notification">Notification</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                <div className="flex space-x-2">
                  {['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-red-500'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setNewEvent({...newEvent, color})}
                      className={`w-8 h-8 rounded-full ${color} ${newEvent.color === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setIsEditing(false);
                    setEditingEvent(null);
                    setNewEvent({
                      title: '',
                      date: '',
                      time: '',
                      location: '',
                      type: 'task',
                      color: 'bg-purple-500'
                    });
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={isEditing ? handleUpdateEvent : handleAddEvent}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  {isEditing ? 'Update Event' : 'Add Event'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarContent;
