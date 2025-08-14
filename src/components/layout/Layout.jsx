// layout.jsx
import { useState } from 'react';
// import Header from '../component/Header';

import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import SideBar from '../Sidebar';




const Layout = () => {
  

  return (
    <div className="flex h-screen bg-[#E2E8F0] relative">
      <SideBar/>
      
      <div className="flex-1 flex flex-col lg:ml-0">
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;