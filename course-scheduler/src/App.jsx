import './assets/App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
    return (
        <>
            <NavBar />
            <div className='container'>
                <div className='col-md-9'>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App;