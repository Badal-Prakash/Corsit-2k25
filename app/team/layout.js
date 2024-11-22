"use client";

import { TeamProvider } from "@/context/TeamContext";
import Sidebar from "@/components/SideBar";

export default function TeamLayout({ children }) {
  return (
    <TeamProvider>
      <div className="flex h-screen">
        <aside className=" lg:block lg:w-1/5 bg-gray-800 p-4">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-auto bg-gray-100 lg:w-4/5">
          {children}
        </main>
      </div>
    </TeamProvider>
  );
}
