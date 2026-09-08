import React, { useState, useRef } from 'react';
import { 
  Plus,
  Edit3,
  Trash2,
  X,
  Palette,
  Save,
  Type,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface StickyNote {
  id: number;
  content: string;
  color: string;
  position: { x: number; y: number };
  isEditing: boolean;
}

const StickyBoardContent: React.FC = () => {
  const [notes, setNotes] = useState<StickyNote[]>([
    {
      id: 1,
      content: 'Welcome to Sticky Board!\nThis is a sample note.',
      color: 'bg-yellow-300',
      position: { x: 50, y: 50 },
      isEditing: false
    },
    {
      id: 2,
      content: 'Add new notes using the button below\nDrag notes to reposition them',
      color: 'bg-blue-300',
      position: { x: 300, y: 100 },
      isEditing: false
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [selectedColor, setSelectedColor] = useState('bg-yellow-300');
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const colors = [
    'bg-yellow-300',
    'bg-blue-300',
    'bg-green-300',
    'bg-pink-300',
    'bg-purple-300',
    'bg-red-300'
  ];

  const addNote = () => {
    if (newNoteContent.trim()) {
      const newNote: StickyNote = {
        id: Date.now(),
        content: newNoteContent,
        color: selectedColor,
        position: { 
          x: Math.random() * 300 + 50, 
          y: Math.random() * 200 + 50 
        },
        isEditing: false
      };
      
      setNotes([...notes, newNote]);
      setNewNoteContent('');
      setShowAddModal(false);
    }
  };

  const updateNote = (id: number, content: string) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, content, isEditing: false } : note
    ));
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const startEditing = (id: number) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, isEditing: true } : note
    ));
  };

  const handleMouseDown = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    const note = notes.find(n => n.id === id);
    if (!note) return;
    
    setDraggingId(id);
    
    // Calculate offset from mouse position to note's top-left corner
    const containerRect = (containerRef.current as HTMLDivElement).getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left - note.position.x;
    const offsetY = e.clientY - containerRect.top - note.position.y;
    
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (draggingId === null || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left - dragOffset.x;
    const y = e.clientY - containerRect.top - dragOffset.y;
    
    setNotes(notes.map(note => 
      note.id === draggingId ? { ...note, position: { x, y } } : note
    ));
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  React.useEffect(() => {
    if (draggingId !== null) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggingId, dragOffset]);

  const renderNoteContent = (note: StickyNote) => {
    if (note.isEditing) {
      return (
        <div className="w-full h-full">
          <textarea
            autoFocus
            defaultValue={note.content}
            className="w-full h-full p-2 bg-transparent border-none resize-none focus:outline-none"
            onBlur={(e) => updateNote(note.id, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                const textarea = e.target as HTMLTextAreaElement;
                updateNote(note.id, textarea.value);
              }
            }}
          />
        </div>
      );
    }
    
    // Split content into lines and format first line as bold
    const lines = note.content.split('\n');
    return (
      <div className="w-full h-full p-2 whitespace-pre-wrap break-words">
        {lines.map((line, index) => (
          <div 
            key={index} 
            className={index === 0 ? 'font-bold' : ''}
          >
            {line}
          </div>
        ))}
      </div>
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // If in fullscreen mode, return just the sticky board without any UI elements
  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-gray-100 z-50">
        <div className="relative w-full h-full">
          {/* Fullscreen Header */}
          <div className="absolute top-4 right-4 flex space-x-2 z-10">
            <button 
              onClick={toggleFullscreen}
              className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
            >
              <Minimize2 className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg shadow-md transition-colors flex items-center"
            >
              <Plus className="w-5 h-5 mr-1" />
              New Sticky
            </button>
          </div>
          
          {/* Sticky Notes Container */}
          <div 
            ref={containerRef}
            className="relative w-full h-full overflow-hidden"
          >
            {notes.map((note) => (
              <div
                key={note.id}
                className={`absolute ${note.color} shadow-lg rounded-lg border border-gray-300 cursor-move`}
                style={{
                  left: note.position.x,
                  top: note.position.y,
                  width: '200px',
                  minHeight: '150px'
                }}
                onMouseDown={(e) => handleMouseDown(e, note.id)}
              >
                <div className="relative w-full h-full">
                  {renderNoteContent(note)}
                  
                  {/* Note Controls */}
                  <div className="absolute top-2 right-2 flex space-x-1">
                    <button
                      onClick={() => startEditing(note.id)}
                      className="p-1 text-gray-600 hover:text-gray-900 rounded-full hover:bg-white hover:bg-opacity-50 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="p-1 text-gray-600 hover:text-red-600 rounded-full hover:bg-white hover:bg-opacity-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {notes.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Palette className="w-12 h-12 mx-auto mb-2" />
                  <p>No sticky notes yet</p>
                  <p className="text-sm mt-1">Add your first note using the button above</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Sticky Board</h2>
        <div className="flex space-x-2">
          <button 
            onClick={toggleFullscreen}
            className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Maximize2 className="w-5 h-5 mr-1" />
            Full Screen
          </button>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5 mr-1" />
            Add New Sticky
          </button>
        </div>
      </div>

      {/* Sticky Notes Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-[600px] border border-gray-200 rounded-lg bg-gray-50 overflow-hidden"
      >
        {notes.map((note) => (
          <div
            key={note.id}
            className={`absolute ${note.color} shadow-lg rounded-lg border border-gray-300 cursor-move`}
            style={{
              left: note.position.x,
              top: note.position.y,
              width: '200px',
              minHeight: '150px'
            }}
            onMouseDown={(e) => handleMouseDown(e, note.id)}
          >
            <div className="relative w-full h-full">
              {renderNoteContent(note)}
              
              {/* Note Controls */}
              <div className="absolute top-2 right-2 flex space-x-1">
                <button
                  onClick={() => startEditing(note.id)}
                  className="p-1 text-gray-600 hover:text-gray-900 rounded-full hover:bg-white hover:bg-opacity-50 transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="p-1 text-gray-600 hover:text-red-600 rounded-full hover:bg-white hover:bg-opacity-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {notes.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Palette className="w-12 h-12 mx-auto mb-2" />
              <p>No sticky notes yet</p>
              <p className="text-sm mt-1">Add your first note using the button above</p>
            </div>
          </div>
        )}
      </div>

      {/* Add Note Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Add New Sticky Note</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Note Content</label>
                <textarea
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your note content..."
                  rows={4}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                <div className="flex space-x-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full ${color} ${selectedColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={addNote}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyBoardContent;
