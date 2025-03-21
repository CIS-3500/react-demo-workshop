import React, { useState, useEffect } from "react";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Starter Extension</h1>
          {/* Render the Hello component with the person prop */}
          <Hello person="World" />
        </div>
      </div>
    </div>
  );
}

export default App;