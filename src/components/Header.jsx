import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import getUserData from '../utils/getUserData';

export const Header = () => {
  const user = getUserData();
  const navigate = useNavigate();

  const onLogOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Знайди прихисток</Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          {
            user ? (
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/home">Особистий Кабінет</Link></li>
                <li><a onClick={onLogOut}>Вихід</a></li>
              </ul>
            ) : (
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/registration">Реєстрація</Link></li>
                <li><Link to='/login'>Вхід</Link></li>
              </ul>
            )
          }
        </div>
      </div>
    </nav>
  )
};
