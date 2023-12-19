import React from 'react';
import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Сервіс допомоги переселенцям</h1>
        <p>Якщо ви здаєте або шукаєте житло - долучайтесь до нашої ініціативи!</p>
      </div>
      <div className="text-center">
        <div className="btn-toolbar text-center">
          <Link className="btn btn-primary" to="/registration">Реєстрація</Link>
          <Link className="btn btn-primary" to="/login">Вхід</Link>
        </div>
      </div>
    </div>
  )
};
