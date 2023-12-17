import React, { useState } from 'react';

export const ShelterForm = () => {
  const [shelter, setShelter] = useState({ name: '', lastName: '', number: '', email: '', password: '', repeatPass: '', status: '' });
  return (
    <div>
      <div className="form-group">
        <label htmlFor="email">Адреса:</label>
        <input type="text" onBlur={onSetField('email')} className="form-control" id="email"/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Пароль:</label>
        <input type="password" onBlur={onSetField('password')} className="form-control" id="password"/>
      </div>
      {error.errorText ? <div className="alert alert-danger" role="alert">{error.errorText}</div> : ''}
      <button onClick={sendData} className="btn btn-default">Відправити</button>
    </div>
  );
}
