import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserRole } from '../types';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  notifications: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>(UserRole.REGIONAL_MANAGER); // Default to Regional Manager to show most features
  const [notifications] = useState(5);

  return (
    <AppContext.Provider value={{ role, setRole, notifications }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};