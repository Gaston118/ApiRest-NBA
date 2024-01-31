import { useState, useEffect } from 'react'
import './App.css'
import { getAll } from './services/players';
import TeamLogo from './components/TeamLogo';

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

  const handleLogoClick = (teamName) => {
    console.log(`${teamName}`);
    setSelectedTeam(teamName);
  };

  return (
    <div className="container">
      <img className="logo-nba" src="/assets/nba.svg" alt="NBA Logo" />
      <h1 className='titulo'>NBA API</h1>

      <div className="team-grid">
        {teams.map((team) => (
          <div key={team} className="card">
            <TeamLogo teamName={team} onClick={handleLogoClick} />
          </div>
        ))}
      </div>

      {selectedTeam && (
        <div>
          <h2>Jugadores de {selectedTeam}</h2>
          <ul>
            {players
              .filter((player) => player.team === selectedTeam)
              .map((player) => (
                <li key={player.id}>{player.name}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;