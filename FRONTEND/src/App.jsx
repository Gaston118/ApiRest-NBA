import { useState, useEffect } from 'react'
import { getAll , getByName, getByTeam } from './services/players';
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
  const [players, setPlayers] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [playersTeam, setPlayersTeam] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAll()
    .then(players => setPlayers( players ))  
    .catch(e => console.error("error getAll players", e))
  }, [])

  const handleLogoClick = async (teamName) => {
    if(teamName !== selectedTeam){
      console.log(`${teamName}`);
      setSelectedTeam(teamName);

      //USO EL getByTeam 
      try {
        const teamPlayers = await getByTeam(teamName);
        setPlayersTeam(teamPlayers);
      } catch (error) {
        console.error(`Error fetching players for ${teamName}:`, error);
      }
    }
    else
    {
      setSelectedTeam('')
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new window.FormData(event.target)
    const query = data.get("query")
    console.log(query)
    
    if(!teams.includes(query)){
    try{
      if(query !== ''){
        const player = await getByName(query)
        if(player !== null){
          setSelectedPlayer(player)
        }
      }
      else{
        console.error('Busqueda no valida')
        return null
      }
    }catch{
      console.error(`Error fetching player for ${query}:`, error);
    }
    }
    else{
      try {
        const teamPlayers = await getByTeam(query);
        setPlayersTeam(teamPlayers);
        setSelectedTeam(query)
      } catch (error) {
        console.error(`Error fetching players for ${query}:`, error);
      }
    }
    setSearchQuery('');
  }

  const handleGoBack = () => {
    setSelectedTeam(null);
    setSelectedPlayer(null);
  };

  return (
    <div className="container">
      <header>
      <img className="logo-nba" src="/assets/nba.svg" alt="NBA Logo" />
      <h1 className='titulo'>NBA API</h1>

      <div>
        <form className='form' onSubmit={handleSubmit}>
          <input 
          name='query' 
          className='input' 
          placeholder='Search Player, Team, Pos'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}>
          </input>
          <button className='boton' type='submit'><span className="material-symbols-outlined">search</span></button>
        </form>
      </div>
      {(selectedTeam || selectedPlayer) && (
          <button className='boton-go-back' onClick={handleGoBack}>
            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
            Go Back</button>
        )}
      </header>

      <main>
      <div className="team-grid">
        {!selectedTeam && !selectedPlayer && teams.map((team) => (
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
        <PlayersList team={selectedTeam} players={playersTeam} />
      )}

      {selectedPlayer &&
        <PlayersList team={selectedPlayer.team} players={selectedPlayer} />
      }

      </main>
    </div>
  );
};

export default App;