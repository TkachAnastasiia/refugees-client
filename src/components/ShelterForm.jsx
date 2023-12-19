import React, { useState } from 'react';
import { createShelter } from '../api/shelter';
import getUserData from '../utils/getUserData';

export const ShelterForm = () => {
  const user = getUserData();
  const [shelter, setShelter] = useState({ city: '', address: '', capacity: 0, photo: '', description: '' });
  const onSetField = (name) => (event) => {
    setShelter({ ...shelter, [name]: event.target.value});
  };

  const sendData = () => {
    createShelter({ ...shelter, owner: user.id }).then(res => {
      setShelter({ city: '', address: '', capacity: 0, photo: '', description: '' });
    }).catch(e => console.log(e));
  }

  function convertImageToBase64(input) {
    const file = input.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const base64Image = e.target.result;
        setShelter({ ...shelter, photo: base64Image});
      };
      // Read the image as a data URL
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="city">Місто:</label>
        <input type="text" value={shelter.city} onChange={onSetField('city')} className="form-control" id="city"/>
      </div>
      <div className="form-group">
        <label htmlFor="address">Адреса:</label>
        <input type="text" value={shelter.address} onChange={onSetField('address')} className="form-control" id="address"/>
      </div>
      <div className="form-group">
        <label htmlFor="capacity">Кількість місць:</label>
        <input type="number" value={shelter.capacity} onChange={onSetField('capacity')} className="form-control" id="capacity"/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Опис:</label>
        <textarea value={shelter.description} onChange={onSetField('description')} className="form-control" id="description"/>
      </div>
      <div className="form-group">
        <label htmlFor="photo">Фото:</label>
        <input type="file" onChange={convertImageToBase64} className="form-control" id="photo"/>
      </div>
      <button onClick={sendData} className="btn btn-default">Відправити</button>
    </div>
  );
}
