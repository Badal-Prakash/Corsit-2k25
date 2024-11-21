"use client";

export default function Sidebar({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-gray-100 fixed top-0 left-0 h-full">
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 text-lg font-bold bg-gray-800">
            Sidebar Header
          </div>

          {/* Sidebar Content */}
          <div className="flex-grow p-4">
            <p className="mb-4">
              Welcome to the sidebar! This is where you can place your text or
              other content.
            </p>
            <p>
              Feel free to customize this section with links, descriptions, or
              other components.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="ml-64 flex-grow  bg-gray-100">{children}</main>
    </div>
  );
}
