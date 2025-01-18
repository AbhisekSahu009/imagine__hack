// src/components/SaySomething.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaPaperclip, FaMicrophone } from 'react-icons/fa';
import '../App.css';

const SaySomething = () => {
    const navigate = useNavigate();
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim()) {
            navigate('/search');
            setInputValue('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            handleSend();
        }
    };

    return (
        <div className={`input-container ${isFocused ? 'focused' : ''}`}>
      <textarea
          placeholder="Say something here..."
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
      />
            <div className="icons">
                <button className="icon-button"><FaPaperclip /></button>
                <button className="icon-button"><FaMicrophone /></button>
                {isFocused && (
                    <button className="send-button" onClick={handleSend}>
                        <FaArrowRight />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SaySomething;
