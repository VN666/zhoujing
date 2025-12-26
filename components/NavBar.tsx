import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ClipboardList, BarChart2, Briefcase, User } from 'lucide-react';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: '首页', icon: Home },
    { path: '/rectification', label: '整改单', icon: ClipboardList },
    { path: '/dashboard', label: '数据看板', icon: BarChart2 },
    { path: '/tools', label: '工作台', icon: Briefcase },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-between items-center z-50">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center space-y-1 ${
            isActive(item.path) ? 'text-blue-600' : 'text-gray-400'
          }`}
        >
          <item.icon size={24} strokeWidth={isActive(item.path) ? 2.5 : 2} />
          <span className="text-[10px]">{item.label}</span>
        </button>
      ))}
    </div>
  );
};