import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getByTeam } from '../services/players';
import PlayersList from '../components/Players/PlayersList';

const Team = () => {
  const { teamName } = useParams();
  const [playersTeam, setPlayersTeam] = useState([]);

  useEffect(() => {
    const fetchTeamPlayers = async () => {
      try {
        const teamPlayers = await getByTeam(teamName);
        setPlayersTeam(teamPlayers);
      } catch (error) {
        console.error(`Error fetching players for ${teamName}:`, error);
      }
    };

    fetchTeamPlayers();
  }, [teamName]);

  return (
    <div className='relative flex flex-col items-center'>
      <div className='absolute inset-0 bg-cover bg-center h-screen' style={{ backgroundImage: "url('/assets/backgrounds/nba9.webp')", opacity: 0.5 }}></div>
      <div className='relative flex flex-col items-center w-full flex-grow'>
        <PlayersList team={teamName} players={playersTeam} />
      </div>
    </div>
  );
};

export default Team;
