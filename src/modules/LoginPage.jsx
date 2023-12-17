import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../api/user';

export const LoginPage = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [error, setError] = useState({ errorText: '' });
  const navigate = useNavigate();
  const onSetField = (name) => (event) => {
    setLogin({ ...login, [name]: event.target.value});
  };

  const sendData = () => {
    loginUser(login).then(res => {
      if(res.data.token) {
        localStorage.setItem('token', res.data.token);
        navigate('/home');
      } else if (res.data.error) {
        setError({ errorText: res.data.error });
      }
    }).catch(e => console.log(e));
  }

  return (
    <div className="container">
      <h1>Вхід</h1>
      <div className="form-group">
        <label htmlFor="email">Пошта:</label>
        <input type="text" onBlur={onSetField('email')} className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Пароль:</label>
        <input type="password" onBlur={onSetField('password')} className="form-control" id="password" />
      </div>
      {error.errorText ? <div className="alert alert-danger" role="alert">{error.errorText}</div> : ''}
      <button onClick={sendData} className="btn btn-default">Відправити</button>
    </div>
  )
};
