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

  const handleLogoClick = (teamName) => {
    console.log(`Clic en el logo de ${teamName}`);
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
    </div>
  );
};

export default App;