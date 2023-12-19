import React from 'react';
import { ShelterForm } from '../components/ShelterForm';
import { Catalogue } from '../components/Catalogue';
import getUserData from '../utils/getUserData';

export const HomePage = () => {
  const user = getUserData();
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Вітаємо {user.name}</h1>
      </div>
      <div>
        {
          user.status === 'owner' ?
            <div className="container">
              <h3>Додати житло:</h3>
              <ShelterForm />
              <h3>Ваше житло:</h3>
              <Catalogue />
            </div> :
            <Catalogue />
        }
      </div>
    </div>
  )
};
