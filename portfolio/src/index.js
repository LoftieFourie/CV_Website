import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './home'; // Correct import path and filename
import AmaProject from './projects/ama'; // Correct import path and filename
import BFMProject from './projects/bfm';
import FreshaProject from './projects/fresha';
import PortfolioProject from './projects/portfolio';
import TuneProject from './projects/tune';
import VipinProject from './projects/vipin';
import APJExp from './Experience/apj';
import LinxExp from './Experience/linx';
import ArtsInt from './Interests/arts';
import SportsInt from './Interests/sports';
import AchievementsSkills from './Skills/achievements';
import Languages from './Skills/lang';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/ama' element={<AmaProject />} />
            <Route path='/projects/BFM' element={<BFMProject />} />
            <Route path='/projects/Fresha-Findings' element={<FreshaProject />} />
            <Route path='/projects/Portfolio-Website' element={<PortfolioProject />} />
            <Route path='/projects/Tune-Therapy' element={<TuneProject />} />
            <Route path='/projects/VIPIN' element={<VipinProject />} />
            <Route path='/experience/APJ-Automation' element={<APJExp />} />
            <Route path='/experience/Linx' element={<LinxExp />} />
            <Route path='/interests/Sports' element={<SportsInt />} />
            <Route path='/interests/Arts' element={<ArtsInt />} />
            <Route path='/skills/Achievements' element={<AchievementsSkills />} />
            <Route path='/skills/Languages' element={<Languages />} />
            {/* Add a route for CardComponent, if needed */}
            <Route path='*' element={<Home />} /> {/* Default route */}
        </Routes>
    </BrowserRouter>
);

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);
