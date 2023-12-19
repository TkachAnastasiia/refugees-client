import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage } from '../modules/LoginPage';
import { RegistrationPage } from '../modules/RegistrationPage';
import { MainPage } from '../modules/MainPage';
import { HomePage } from '../modules/HomePage';
import { Header } from '../components/Header';
import { ShelterPage } from '../components/ShelterPage';

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
