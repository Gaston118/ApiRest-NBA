import Map from '../components/MapView/Map';
import TeamLogo from '../components/TeamLogo';
import { Link } from 'react-router-dom';


const teamsWest = [
   
  'Dallas Mavericks', 'Denver Nuggets', 'Golden State Warriors', 'Houston Rockets', 
  'LA Clippers', 'Los Angeles Lakers', 'Memphis Grizzlies', 'Minnesota Timberwolves', 
  'New Orleans Pelicans', 'Oklahoma City Thunder', 'Phoenix Suns', 'Portland Trail Blazers',
  'Sacramento Kings', 'San Antonio Spurs', 'Utah Jazz'
];

const teamsEast = [
  'Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets',
  'Chicago Bulls', 'Cleveland Cavaliers', 'Detroit Pistons', 'Indiana Pacers', 
  'Miami Heat', 'Milwaukee Bucks', 'New York Knicks', 'Orlando Magic', 
  'Philadelphia 76ers', 'Toronto Raptors', 'Washington Wizards'
];

const Home = () => {

  return (
    <div className='flex flex-col items-center mt-20'>
      <div className='flex justify-evenly w-full flex-wrap'>
        <div className='flex flex-col items-center'>
          <h2 className='mb-4 font-bold underline text-2xl'>WESTERN CONFERENCE</h2>
          <div className='grid grid-cols-3 gap-3'>
            {teamsWest.map((teamw) => (
              <div key={teamw} >
                <div className='bg-slate-200 rounded-md w-32 h-32 flex justify-center items-center transition-transform transform hover:scale-95 hover:border-2 hover:border-black hover:rounded-custom'>
                  <Link to={`/${teamw}`} className='w-full h-full'>
                    <TeamLogo teamName={teamw} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='mb-4 font-bold underline text-2xl'>EASTERN CONFERENCE</h2>
          <div className='grid grid-cols-3 gap-3'>
            {teamsEast.map((teame) => (
              <div key={teame} >
                <div className='bg-slate-200 rounded-md w-32 h-32 flex justify-center items-center transition-transform transform hover:scale-95 hover:border-2 hover:border-black hover:rounded-custom'>
                  <Link to={`/${teame}`} className='w-full h-full'>
                    <TeamLogo teamName={teame} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full h-lvh flex flex-col justify-center items-center mt-20'>
          <h2 className='flex font-bold text-2xl mb-5'>NBA Teams Map</h2>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Home;
