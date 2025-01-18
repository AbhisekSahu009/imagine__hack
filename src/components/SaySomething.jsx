// src/components/SaySomething.jsx
import React, { useState } from 'react';
import '../App.css';

const SaySomething = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim()) {
            console.log("Message sent:", inputValue);
            setInputValue('');
        }
    };

    return (
        <div className={`input-container ${isFocused ? 'focused' : ''}`}>
      <textarea
          placeholder="Say Something..."
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setInputValue(e.target.value)}
      />
            <div className="icons">
                <button className="icon-button">📎</button>
                <button className="icon-button">🎤</button>
                {isFocused && (
                    <button className="send-button" onClick={handleSend}>
                        ➤
                    </button>
                )}
            </div>
        </div>
    );
};

export default SaySomething;
