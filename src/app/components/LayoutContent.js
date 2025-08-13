"use client";

import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'
import { useSidebar } from '../context/SidebarContext'

export default function LayoutContent({ children }) {
  const { isCollapsed } = useSidebar();

  return (
    <div className={`page-container ${isCollapsed ? 'page-sidebar-collapsed' : ''}`}>
      <Sidebar />
      <div className="page-content">
        <TopNavbar />
        {children}
      </div>
    </div>
  );
}

