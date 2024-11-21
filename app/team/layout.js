"use client";

import { TeamProvider } from "@/context/TeamContext";
import Sidebar from "@/components/SideBar";

export default function TeamLayout({ children }) {
  return (
    <TeamProvider>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <section className="flex-1 p-6">{children}</section>
      </div>
    </TeamProvider>
  );
}
