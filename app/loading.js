"use client";
import React, { useState, useEffect } from "react";
import NextTopLoader from "nextjs-toploader";

export default function AppLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NextTopLoader
        color="#FF0000"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        zIndex={1600}
        showAtBottom={false}
      />
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500"></div>
            <p className="mt-4 text-lg text-white">Loading...</p>
          </div>
        </div>
      )}
    </>
  );
}
