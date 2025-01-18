// src/App.jsx
import ShareThoughts from './components/ShareThoughts';
import SaySomething from './components/SaySomething';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <ShareThoughts />
            <SaySomething />
        </div>
    );
}

export default App;
