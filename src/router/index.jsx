import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { MainPage } from '../pages/MainPage';
import { HomePage } from '../pages/HomePage';
import { Header } from '../components/Header';
import { ShelterPage } from '../pages/ShelterPage';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shelter/:shelterId" element={<ShelterPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
