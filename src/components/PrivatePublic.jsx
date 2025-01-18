// src/components/PrivatePublic.jsx
import React, { useState } from 'react';
import '../App.css';

const PrivatePublic = () => {
    const [selected, setSelected] = useState('Public');

    return (
        <div className="toggle-container">
            <div className={`toggle-bg ${selected === 'Private' ? 'right' : 'left'}`}></div>
            <button
                className={`toggle-btn ${selected === 'Public' ? 'active' : ''}`}
                onClick={() => setSelected('Public')}
            >
                Public
            </button>
            <button
                className={`toggle-btn ${selected === 'Private' ? 'active' : ''}`}
                onClick={() => setSelected('Private')}
            >
                Private
            </button>
        </div>
    );
};

export default PrivatePublic;
