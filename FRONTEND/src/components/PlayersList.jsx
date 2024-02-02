import React from 'react';
import './PlayersList.css'

const PlayersList = ({ team, players }) => {
  const isSinglePlayer = !Array.isArray(players);

  return (
    <div>
      <h2 className='h2'>{team} - 2023-24</h2>
        <ul className='lista'>
            {!isSinglePlayer ? ( 
              players && players.map((player) => (
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
              ))
            ) : (
              players && (
              <li key={players.id} className='player-item'>
              <div className='foto'>
              <img src={players.photo} alt={`Foto de ${players.name}`} />
              </div>
              <div className='info'>
              <h3 className='nombre'>{players.name}</h3>
              <div className='details'>
                <p className='numero'># {players.number}</p>
                <p className='position'>{players.position}</p>
                <p className='equipo'>{players.team}</p>
              </div>
              </div>
            </li>
              )
            )}
        </ul>
    </div>
  );
};

export default PlayersList;
