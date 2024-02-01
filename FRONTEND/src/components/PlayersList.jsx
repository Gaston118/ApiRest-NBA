import React from 'react';
import './PlayersList.css'

const PlayersList = ({ team, players }) => {

  return (
    <div>
        <ul className='lista'>
            {players.map((player) => (
                <li key={player.id} className='player-item'>
                <div className='foto'>
                <img src={player.photo} alt={`Foto de ${player.name}`} />
                </div>
                <div className='info'>
                <h3 className='nombre'>{player.name}</h3>
                <div className='details'>
                <p className='numero'># {player.number}</p>
                <p className='position'>{player.position}</p>
                <p className='equipo'>{player.team}</p>
                </div>
                </div>
                </li>
              ))}
        </ul>
    </div>
  );
};

export default PlayersList;
