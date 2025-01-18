// src/components/SearchBar.jsx
import React from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import PrivatePublic from './PrivatePublic';
import '../App.css';

const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="search-bar">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search Here Anything" />
                <button className="mic-button">
                    <FaMicrophone />
                </button>
            </div>

            {/* PrivatePublic Component Below Search Bar */}
            <PrivatePublic />
        </div>
    );
};

export default SearchBar;
