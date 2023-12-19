import React, { useState, useEffect } from 'react';
import getUserData from '../utils/getUserData';
import { useParams } from 'react-router-dom';
import { getShelterById, sendShelterMessage } from '../api/shelter';

export const ShelterPage = () => {
  const [shelter, setShelter] = useState(null);
  const [message, setMessage] = useState('');
  const user = getUserData();
  const { shelterId } = useParams();
  useEffect(() => {
    getShelterById(shelterId).then(res => {
      setShelter(res.data);
    });
  }, []);

  const onSendMessage = () => {
    const newShelter = shelter;
    newShelter.messages.push({ message, authorName: user.name });
    sendShelterMessage(newShelter).then(() => {
      setMessage('');
    });
  }
  return (
    <div>
      <div className="container">
        <div className="media">
          { shelter && (
            <div className="media-left">
              <img className="media-object" width={100} height={100} src={shelter.photo} alt="Photo of shelter" />
            </div>
          ) }
          <div className="media-body">
            {
              shelter && (
                <div>
                  <h4 className="media-heading">{shelter.address}</h4>
                  <div>{shelter.description}</div>
                  <div>Кількість місць: {shelter.capacity}</div>
                </div>
              )
            }
            {
              user.status === 'tenant' ? (
                <div>
                  <div className="form-group">
                    <label htmlFor="message">Написати власнику:</label>
                    <textarea value={message} onChange={(event) => setMessage(event.target.value)} className="form-control" id="message"/>
                  </div>
                  <button onClick={onSendMessage} className="btn btn-default">Відправити</button>
                </div>
              ) : (
                  <div>
                    {shelter && (
                      shelter.messages.map(message => {
                        return (
                          <div>
                            <h5 className="media-heading">Від: { message.authorName }</h5>
                            <div>{ message.message }</div>
                          </div>
                        )
                      })
                    )}
                  </div>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}
