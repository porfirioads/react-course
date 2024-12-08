import { Routes, Route, Navigate } from 'react-router-dom';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { DcPage } from '../heroes/pages/DcPage';
import { LoginPage } from '../auth/pages/LoginPage';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="marvel" element={<MarvelPage />}></Route>
        <Route path="dc" element={<DcPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="/" element={<Navigate to="/marvel" />}></Route>
      </Routes>
    </>
  );
};
