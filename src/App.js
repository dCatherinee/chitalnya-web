import React from 'react';
import GlobalStyle from './globalStyles.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home.js';
import Features from './pages/FeaturesPage/Features.js';
import Rules from './pages/RulesPage/Rules.js';
import Subscription from './pages/SubscriptionPage/Subscription.js';
import { Navbr, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbr />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/features' exact element={<Features />} />
        <Route path='/rules' exact element={<Rules />} />
        <Route path='/subscription' exact element={<Subscription />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
