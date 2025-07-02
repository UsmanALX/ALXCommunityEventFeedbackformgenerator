"use client";
import { useState } from "react";

export default function JotformLinkGenerator() {
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
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Jotform Link Generator</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Event Name (e.g. CommunityMeetup)"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Event Date (e.g. April082025)"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Event Type (e.g. OnlineEvent)"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleGenerate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Generate Link
        </button>
      </div>
      
      {generatedLink && (
        <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <p className="text-sm text-gray-600 mb-2 font-medium">Generated Link:</p>
          <div className="flex items-start space-x-2">
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
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors flex-shrink-0"
              title="Copy to clipboard"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
