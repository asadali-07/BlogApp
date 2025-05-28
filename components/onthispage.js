// filepath: d:\WEBDEVELOPMENT\NextJs\ai-assisted-blog\components\onthispage.js
"use client";
import React, { useEffect, useState } from 'react';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (typeof document !== 'undefined' && htmlContent) {
      // Parse the HTML content and extract h2 headings
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      const h2Elements = tempDiv.querySelectorAll('h2');
      const h2Data = Array.from(h2Elements).map(h2 => ({
        text: h2.textContent,
        id: h2.id
      }));
      setHeadings(h2Data);
    }
  }, [htmlContent]);

  // If no headings, show a message
  if (headings.length === 0) {
    return (
      <div className="text-gray-500 dark:text-gray-400 text-sm italic">
        No section headings found in this article.
      </div>
    );
  }

  return (
    <nav className="toc-nav">
      <ul className="space-y-2 text-sm">
        {headings.map((heading, index) => (
          <li key={index} className="py-1 border-l-2 border-purple-200 dark:border-purple-800 pl-3 hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
            <a 
              href={`#${heading.id}`}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors block"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default OnThisPage;