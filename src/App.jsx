import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShareThoughts from './components/ShareThoughts';
import SaySomething from './components/SaySomething';
import SearchBar from './components/SearchBar';
import PrivatePublic from './components/PrivatePublic';
import InstaPost from './components/InstaPost';
import './App.css';

function Home() {
    return (
        <div className="app-container">
            <ShareThoughts />
            <SaySomething />
        </div>
    );
}

function SearchPage() {
    return (
        <div className="search-page">
            <SearchBar />
            <InstaPost />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </Router>
    );
}

export default App;
