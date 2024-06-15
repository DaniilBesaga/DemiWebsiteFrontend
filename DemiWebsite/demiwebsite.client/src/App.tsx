import './App.css';
import 'remixicon/fonts/remixicon.css'
import Company from './pages/Company';
import News from './pages/News';
import NewsItem from './pages/NewsItem';
import Recruit from './pages/Recruit';
import Works from './pages/Works';
import WorkItem from './components/WorkItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UseOfTheSite from './pages/UseOfTheSite';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/company" element={<Company />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:month" element={<News />} />
                <Route path="/news/byid/:id" element={<NewsItem />} />
                <Route path="/recruit" element={<Recruit />} />
                <Route path="/works" element={<Works />} />
                <Route path="/works/:id" element={<WorkItem />} />
                <Route path="/policy" element={<PrivacyPolicy />} />
                <Route path="/siteusing" element={<UseOfTheSite />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFoundPage/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;