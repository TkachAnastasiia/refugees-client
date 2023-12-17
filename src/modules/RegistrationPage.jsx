import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createUser } from '../api/user';

export const RegistrationPage = () => {
  const [user, setUser] = useState({ name: '', lastName: '', number: '', email: '', password: '', repeatPass: '', status: '' });
  const navigate = useNavigate();
  const onSetField = (name) => (event) => {
    setUser({ ...user, [name]: event.target.value});
  };

  const sendData = () => {
    if (user.password === user.repeatPass) {
      const { repeatPass, ...rest } = user;
      createUser(rest).then(res => {
        if(res.data.token) {
          localStorage.setItem('token', res.data.token);
          navigate('/home');
        }
      }).catch(e => console.log(e));
    }
  }
  return (
    <div className="container">
      <h1>Реєстрація</h1>
      <div>
        <div className="form-group">
          <label htmlFor="name">Імʼя:</label>
          <input onBlur={onSetField('name')} className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">По батькові:</label>
          <input type="text" onBlur={onSetField('lastName')} className="form-control" id="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="number">Телефон:</label>
          <input type="text" onBlur={onSetField('number')} className="form-control" id="number" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Пошта:</label>
          <input type="text" onBlur={onSetField('email')} className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input type="password" onBlur={onSetField('password')} className="form-control" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Повторити пароль:</label>
          <input type="password" onBlur={onSetField('repeatPass')} className="form-control" id="repeatPassword" />
        </div>
        <div className="form-group">
          <label htmlFor="status">Шукаєте чи здаєте житло?:</label>
          <br />
          <label>
            Шукаю:
            <input type="radio" onBlur={onSetField('status')} name="status" value="tenant" id="tenant" />
          </label>
          &nbsp;
          <label>
            Здаю:
            <input type="radio" onBlur={onSetField('status')} name="status" value="owner" id="owner" />
          </label>
        </div>
        <button onClick={sendData} className="btn btn-default">Відправити</button>
      </div>
    </div>
  )
};
