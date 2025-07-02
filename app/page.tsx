"use client";
import { useState } from "react";

export default function Home() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const handleGenerate = () => {
    const formattedEventName = eventName.trim().replace(/\s+/g, "");
    const formattedDate = eventDate.trim().replace(/\s+/g, "");
    const formattedType = eventType.trim().replace(/\s+/g, "");
    const combined = `${formattedEventName}%20${formattedDate}%20${formattedType}`;
    const url = `https://sandtech.jotform.com/250711619462556?event=${combined}`;
    setGeneratedLink(url);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Jotform Link Generator
        </h1>
        
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Event Name (e.g. CommunityMeetup)"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          />
          
          <input
            type="text"
            placeholder="Event Date (e.g. April082025)"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          />
          
          <input
            type="text"
            placeholder="Event Type (e.g. OnlineEvent)"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          />
          
          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Generate Link
          </button>
        </div>
        
        {generatedLink && (
          <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
            <p className="text-sm text-gray-600 mb-3 font-medium">Generated Link:</p>
            <div className="flex items-start space-x-3">
              <a
                href={generatedLink}
                className="text-blue-600 underline break-all flex-1 text-sm hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {generatedLink}
              </a>
              <button
                onClick={handleCopy}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors flex-shrink-0"
                title="Copy to clipboard"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
