import { Routes, Route, Navigate } from 'react-router-dom';
import { MarvelPage, DcPage, SearchPage } from '../../heroes';
import { Navbar } from '../../ui';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />}></Route>
          <Route path="dc" element={<DcPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="hero" element={<DcPage />}></Route>
          <Route path="/" element={<Navigate to="/marvel" />}></Route>
        </Routes>
      </div>
    </>
  );
};
