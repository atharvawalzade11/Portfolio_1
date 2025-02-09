import React, { useState, useEffect, useRef } from 'react';
import { CONTACT } from '../constants';

const Contact = () => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="border-b border-neutral-800 pb-20 text-center text-amber-50">
      {/* Heading */}
      <h2 className="my-10 text-4xl font-bold text-white">Get in Touch</h2>

      {/* Contact Info */}
      <div className="space-y-4 text-lg tracking-tight">
        <p className="text-neutral-400">{CONTACT.address}</p>
        <p className="text-neutral-400">{CONTACT.phoneNo}</p>

        {/* Email Section */}
        <div className="relative inline-block" ref={dropdownRef}>
          {/* Email Button */}
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="border-b border-gray-500 text-white transition-all duration-300 ease-in-out hover:text-purple-400 hover:border-purple-400"
          >
            {CONTACT.email}
          </button>

          {/* Dropdown Options */}
          {showOptions && (
            <div className="absolute left-1/2 mt-2 w-48 -translate-x-1/2 transform rounded-lg bg-gray-900 p-2 shadow-lg">
              <a
                href={`mailto:${CONTACT.email}`}
                className="block px-4 py-2 text-white transition-all duration-300 hover:text-purple-400"
              >
                Default Mail App
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-white transition-all duration-300 hover:text-purple-400"
              >
                Gmail
              </a>
              <a
                href={`https://outlook.live.com/owa/?path=/mail/action/compose&to=${CONTACT.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-white transition-all duration-300 hover:text-purple-400"
              >
                Outlook
              </a>
              <a
                href={`https://compose.mail.yahoo.com/?to=${CONTACT.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-white transition-all duration-300 hover:text-purple-400"
              >
                Yahoo Mail
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
