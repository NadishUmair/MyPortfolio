'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes } from 'react-icons/fa';

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:scale-110 transition-all duration-300 ease-out";

const tooltips = [
  "Let's talk 🤖",
  "Got questions?",
  "Ask me anything 💬",
  "Need help?",
  "Let's chat 💡",
];

const ChatBot = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState(0);

  const chatRef = useRef(null);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

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

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTooltipIndex((prev) => (prev + 1) % tooltips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

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

      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
        setIsTyping(false);
      }, 1000); // Simulate typing delay
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong.' },
      ]);
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Tooltip & Toggle Button */}
      <div className="relative group">
        <button
          onClick={toggleChat}
          className={btnCls}
          aria-label="Toggle Chat"
        >
          {isOpen ? <FaTimes size={20} /> : <FaComments size={20} />}
        </button>
        {!isOpen && (
          <div className={`bottom-14 right-0 bg-violet-600 text-white text-xs px-2 py-1 rounded  group-hover:opacity-100 transition-all duration-300`}>
            {tooltips[tooltipIndex]}
          </div>
        )}
      </div>

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
              {isTyping && (
                <div className="bg-indigo-800/40 self-start text-white text-sm px-3 py-2 rounded-lg w-fit">
                  <span className="dot-flashing"></span>
                </div>
              )}
              <div ref={scrollRef}></div>
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

      {/* Typing Animation CSS */}
      <style jsx>{`
        .dot-flashing {
          display: inline-block;
          position: relative;
          width: 1em;
          height: 1em;
        }

        .dot-flashing:after {
          content: ' ';
          display: block;
          width: 0.6em;
          height: 0.6em;
          border-radius: 50%;
          background: #16f2b3;
          animation: dotFlashing 1s infinite linear alternate;
        }

        @keyframes dotFlashing {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default ChatBot;
