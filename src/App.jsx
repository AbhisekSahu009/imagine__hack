// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ShareThoughts from './components/ShareThoughts';
import SaySomething from './components/SaySomething';
import SearchBar from './components/SearchBar';
import './App.css';

function Home() {
    return (
        <div className="app-container">
            <ShareThoughts />
            <SaySomething />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchBar />} />
            </Routes>
        </Router>
    );
}

export default App;
