import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage } from '../modules/LoginPage';
import { RegistrationPage } from '../modules/RegistrationPage';
import { MainPage } from '../modules/MainPage';
import { HomePage } from '../modules/HomePage';

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
