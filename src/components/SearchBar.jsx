// src/components/SearchBar.jsx
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import '../App.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search Here Anything" />
            <button className="mic-button">
                <FaMicrophone />
            </button>
        </div>
    );
};

export default SearchBar;
