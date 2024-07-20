import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getByTeam } from '../services/players';
import PlayersList from '../components/PlayersList';

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
    <div>
      <h2>{teamName}</h2>
      <PlayersList players={playersTeam} />
    </div>
  );
};

export default Team;
