'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes } from 'react-icons/fa'; // Added FaTimes

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";

const ChatBot = () => {
    const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);
  const inputRef = useRef(null);

  const toggleChat = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      setTimeout(() => inputRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await res.json();
      const reply = data.reply;

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong.' },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={btnCls}
        aria-label="Toggle Chat"
      >
        {isOpen ? <FaTimes size={20} /> : <FaComments size={20} />}
      </button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mt-4 w-80 h-96 rounded-xl shadow-lg flex flex-col 
              border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] text-white"
          >
            {/* Header */}
            <div className="text-[#16f2b3] text-base font-bold px-4 py-3 border-b border-indigo-800">
              Chat with me 👋
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`text-sm p-2 rounded-lg max-w-xs ${
                    msg.role === 'user'
                      ? 'bg-blue-500/20 self-end text-blue-100 ml-auto'
                      : 'bg-indigo-800/40 self-start text-white'
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 p-3 border-t border-indigo-800">
              <input
                ref={inputRef}
                type="text"
                className="flex-1 px-3 py-2 text-sm rounded-md border border-indigo-700 bg-[#0d1224] text-white placeholder:text-gray-400 focus:outline-none"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-4 py-2 rounded-md text-sm hover:from-violet-600 hover:to-pink-500 transition-all"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
