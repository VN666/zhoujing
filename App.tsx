import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Home } from './views/Home';
import { RectificationList } from './views/RectificationList';
import { DataDashboard } from './views/DataDashboard';
import { Tools } from './views/Tools';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen shadow-2xl overflow-hidden relative">
        <Header />
        <div className="h-full">
            {children}
        </div>
        <NavBar />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rectification" element={<RectificationList />} />
            <Route path="/dashboard" element={<DataDashboard />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}