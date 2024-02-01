import { useState, useEffect } from 'react'
import { getAll , getByTeam } from './services/players';
import TeamLogo from './components/TeamLogo';
import PlayersList from './components/PlayersList';
import './App.css'

const teams = [
  'Atlanta Hawks',
  'Boston Celtics',
  'Brooklyn Nets',
  'Charlotte Hornets',
  'Chicago Bulls',
  'Cleveland Cavaliers',
  'Dallas Mavericks',
  'Denver Nuggets',
  'Detroit Pistons',
  'Golden State Warriors',
  'Houston Rockets',
  'Indiana Pacers',
  'LA Clippers',
  'Los Angeles Lakers',
  'Memphis Grizzlies',
  'Miami Heat',
  'Milwaukee Bucks',
  'Minnesota Timberwolves',
  'New Orleans Pelicans',
  'New York Knicks',
  'Oklahoma City Thunder',
  'Orlando Magic',
  'Philadelphia 76ers',
  'Phoenix Suns',
  'Portland Trail Blazers',
  'Sacramento Kings',
  'San Antonio Spurs',
  'Toronto Raptors',
  'Utah Jazz',
  'Washington Wizards'
]

const App = () => {
  const [players, setPlayers] = useState(null)
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    getAll().then(players =>
      setPlayers( players )
    )  
  }, [])

  const handleLogoClick = async (teamName) => {
    if(teamName !== selectedTeam){
      console.log(`${teamName}`);
      setSelectedTeam(teamName);
      //USO EL getByTeam 
      const teamPlayers = await getByTeam(teamName)
      setPlayers(teamPlayers)
    }
    else
    {
      setSelectedTeam('')
    }
  };

  return (
    <div className="container">
      <img className="logo-nba" src="/assets/nba.svg" alt="NBA Logo" />
      <h1 className='titulo'>NBA API</h1>

      <div className="team-grid">
        {!selectedTeam && teams.map((team) => (
          <div key={team} className="card">
            <TeamLogo teamName={team} onClick={handleLogoClick} />
          </div>
        ))}

        {selectedTeam && 
          <div key={selectedTeam} className="card">
          <div className='selected-team'>
          <TeamLogo teamName={selectedTeam} onClick={handleLogoClick} />
          </div>
        </div>
        }
      </div>

      {selectedTeam && (
        <PlayersList team={selectedTeam} players={players} />
      )}
    </div>
  );
};

export default App;