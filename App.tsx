import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import BallDontLie from './pages/BallDontLie';
import OpenRiviera from './pages/OpenRiviera';
import IslandPadelTour from './pages/IslandPadelTour';
import WorkInProgress from './pages/WorkInProgress';
import { AppRoutes } from './types';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path={AppRoutes.HOME} element={<Home />} />
          <Route path={AppRoutes.ABOUT} element={<About />} />
          <Route path={AppRoutes.BDL} element={<BallDontLie />} />
          <Route path={AppRoutes.OPEN_RIVIERA} element={<OpenRiviera />} />
          <Route path={AppRoutes.PADEL_TOUR} element={<IslandPadelTour />} />
          <Route path={AppRoutes.WIP} element={<WorkInProgress />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;