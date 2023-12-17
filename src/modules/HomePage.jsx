import React from 'react';
import getUserData from '../utils/getUserData';

export const HomePage = () => {
  const user = getUserData();
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Вітаємо {user.name}</h1>
      </div>
      <div>

      </div>
    </div>
  )
};
