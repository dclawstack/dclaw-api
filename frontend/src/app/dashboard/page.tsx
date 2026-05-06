"use client";

import { useState } from "react";

const METHODS = ["GET", "POST", "PUT", "DELETE"];

export default function DashboardPage() {
  const [endpointUrl, setEndpointUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [tested, setTested] = useState(false);

  function handleTest() {
    if (!endpointUrl.trim()) return;
    setTested(true);
  }

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-6">API Workspace</h2>
      <div className="max-w-2xl space-y-4 mb-8">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Endpoint URL</label>
            <input
              type="text"
              value={endpointUrl}
              onChange={(e) => setEndpointUrl(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              placeholder="https://api.example.com/v1/users"
            />
          </div>
          <div className="w-32">
            <label className="block text-sm font-medium mb-1">Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
            >
              {METHODS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={handleTest}
          className="px-4 py-2 bg-[#0D9488] text-white rounded-md hover:bg-[#0F766E] transition"
        >
          Test Endpoint
        </button>
      </div>

      {tested && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Status code</p>
            <p className="text-3xl font-bold text-[#0D9488]">200</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Response time</p>
            <p className="text-lg font-semibold">124 ms</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Schema validation</p>
            <p className="text-lg font-semibold">Passed</p>
          </div>
        </div>
      )}
    </div>
  );
}
