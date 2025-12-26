import React from 'react';
import { useApp } from '../contexts/AppContext';
import { UserRole } from '../types';
import { ROLE_OPTIONS } from '../constants';
import { Bell, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const { role, setRole, notifications } = useApp();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="bg-white px-4 py-3 shadow-sm flex justify-between items-center sticky top-0 z-40">
      <div className="relative">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center space-x-1 font-bold text-lg text-slate-800"
        >
          <span>{role}</span>
          <ChevronDown size={16} />
        </button>
        
        {isMenuOpen && (
          <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
            {ROLE_OPTIONS.map((r) => (
              <button
                key={r}
                onClick={() => {
                  setRole(r);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm ${role === r ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                {r}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell size={22} className="text-gray-600" />
          {notifications > 0 && (
             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
               {notifications}
             </span>
          )}
        </div>
      </div>
    </div>
  );
};