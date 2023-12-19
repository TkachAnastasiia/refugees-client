import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getUserData from '../utils/getUserData';
import { getOwnShelters, getSheltersByCity } from '../api/shelter';

export const Catalogue = () => {
  const [shelters, setShelters] = useState([]);
  const [search, setSearch] = useState('');
  const user = getUserData();
  useEffect(() => {
    if (user.status === 'owner') {
      getOwnShelters(user.id).then(res => {
        setShelters(res.data);
      })
    }
  }, []);

  const onSearch = () => {
    getSheltersByCity(search).then(res => {
      setShelters(res.data);
    })
  };

  return (
    <div>
      {
        user.status === 'tenant' && (
          <div className="text-center">
            <h4>Пошук</h4>
            <div className="navbar-form navbar-middle" role="search">
              <div className="form-group">
                <input
                  value={search}
                  type="text"
                  onChange={(event) => setSearch(event.target.value)}
                  className="form-control"
                  placeholder="Веедіть місто"
                />
              </div>
              <button onClick={onSearch} className="btn btn-default">Шукати</button>
            </div>
          </div>
        )
      }

        <div className="container">
          { shelters.length === 0 && <h4 className="text-center">Немає результатів:</h4> }
          {shelters.map(shelter => {
              return (
                <div className="media">
                  <div className="media-left">
                    <img className="media-object" width={100} height={100} src={shelter.photo} alt="Photo of shelter" />
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{shelter.address}</h4>
                    <div>{shelter.description}</div>
                    <div>Кількість місць: {shelter.capacity}</div>
                    <div><Link to={`/shelter/${shelter._id}`}>Перейти</Link></div>
                  </div>
                </div>
              )
          })}
        </div>
    </div>
  )
}
