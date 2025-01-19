// src/components/SaySomething.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaPaperclip, FaMicrophone } from 'react-icons/fa';
import '../App.css';
import axios from "axios";

const SaySomething = () => {
    const navigate = useNavigate();
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleSend = async () => {
        if (inputValue.trim()) {
            try {
                const response = await axios.post('http://localhost:8080/api/say-something', {
                    message: inputValue,
                });

                console.log('Response from backend:', response.data);

                // You can display the response or handle it as needed
                alert(`Gemini Data: ${JSON.stringify(response.data.geminiData)}`);
                setInputValue('');
                navigate('/search'); // Navigate after sending
            } catch (error) {
                console.error('Error sending message:', error);
            }
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
