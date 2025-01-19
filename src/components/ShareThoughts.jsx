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
        <div className={`share-container ${isFocused ? 'focused' : ''}`}>
            <div>
                <h1
                    style={{
                        backgroundImage: 'linear-gradient(90deg, #0042D4, #7620EA, #E600FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold',
                    }}
                >
                    Hi! Akash
                </h1>
                <h2
                    style={{
                        backgroundImage: 'linear-gradient(90deg, #0042D4, #7620EA, #E600FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold',
                    }}
                >
                    Share your thoughts
                </h2>
                <h2
                    style={{
                        backgroundImage: 'linear-gradient(90deg, #0042D4, #7620EA, #E600FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold',
                        marginBottom: '20%' ,
                    }}
                >
                    <span>{text}</span>
                </h2>
            </div>
        </div>
    );

};

export default ShareThoughts;
