import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShareThoughts from './components/ShareThoughts';
import SaySomething from './components/SaySomething';
import SearchBar from './components/SearchBar';
import InstaPost from './components/InstaPost';
import SignUp from './components/SignUp';  // Import SignUp
import OTP from './components/OTP';  // Import OTP
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
                <Route path="/" element={<SignUp />} /> {/* SignUp page route */}
                <Route path="/otp" element={<OTP />} /> {/* OTP page route */}
                <Route path="/home" element={<Home />} /> {/* Home page route */}
                <Route path="/search" element={<SearchPage />} /> {/* Search page route */}
            </Routes>
        </Router>
    );
}

export default App;
