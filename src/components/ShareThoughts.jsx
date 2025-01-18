// src/components/ShareThoughts.jsx
import { useState, useEffect } from 'react';
import '../App.css';

const ShareThoughts = () => {
    const [text, setText] = useState('');
    const fullText = 'here!';
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(interval);
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`input-container ${isFocused ? 'focused' : ''}`}>
            <div>
                <h1 style={{color: '#1E90FF'}}>Hi! Akash</h1>
                <h2 style={{color: '#C71585'}}>
                    Share your thoughts
                </h2>
                <h2 style={{color: '#C71585'}}>
                     <span>{text}</span>
                </h2>

            </div>
        </div>
    );
};

export default ShareThoughts;
