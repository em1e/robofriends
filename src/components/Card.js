import React from 'react';
import './Card.css';


const Card = ({ name, email, id }) => {
  return (
    <div className='box zone grow'>
      <img className='center' alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;