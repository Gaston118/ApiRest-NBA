import './PlayersList.css'

const PlayersList = ({ team, players }) => {

  return (
    <div className='flex flex-col w-full flex-grow'>
      <h2 className='flex justify-center items-center text-black font-bold text-3xl mb-4 mt-20 shadow-custom'>
        {team} - 2023-24
      </h2>
      <div className='flex flex-row overflow-x-auto mt-6 justify-center'>
        <ul className='grid grid-cols-4 gap-2'>
          {players && players.map((player) => (
            <li key={player.id} className='bg-slate-300 rounded-lg shadow-lg overflow-hidden p-4 border-4 border-gray-500 hover:border-blue-500 hover:shadow-2xl transition-all duration-300'>
              <div className='flex items-center space-x-4'>
                <div className='w-28 h-28'>
                  <img
                    src={player.photo}
                    alt={`Foto de ${player.name}`}
                    className='w-full h-full object-cover rounded-full'
                  />
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-xl font-semibold'>{player.name}</h3>
                  <div className='text-gray-700'>
                    <p className='text-sm'># {player.number}</p>
                    <p className='text-sm'>{player.position}</p>
                    <p className='text-sm'>{player.team}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayersList;
