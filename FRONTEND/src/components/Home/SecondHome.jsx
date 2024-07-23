import TeamLogo from '../TeamLogo';
import { Link } from 'react-router-dom';

const teamsWest = [
   
    'Dallas Mavericks', 'Denver Nuggets', 'Golden State Warriors', 'Houston Rockets', 
    'LA Clippers', 'Los Angeles Lakers', 'Memphis Grizzlies', 'Minnesota Timberwolves', 
    'New Orleans Pelicans', 'Oklahoma City Thunder', 'Phoenix Suns', 'Portland Trail Blazers',
    'Sacramento Kings', 'San Antonio Spurs', 'Utah Jazz'
  ];

const SecondHome = () => {
  return (
    <div className='relative flex flex-col items-center w-full h-screen'>
      <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: "url('/assets/backgrounds/nba3.webp')", opacity: 0.5 }}></div>
      <div className='relative flex justify-evenly w-full flex-wrap z-10'>
        <div className='flex flex-col items-center'>
          <h2 className='mt-10 mb-4 text-white font-bold underline text-2xl'>WESTERN CONFERENCE</h2>
          <div className='grid grid-cols-5 gap-3'>
            {teamsWest.map((teamw) => (
              <div key={teamw}>
                <div className='bg-slate-200 rounded-md w-32 h-32 flex justify-center items-center transition-transform transform hover:scale-95 hover:border-2 hover:border-black hover:rounded-custom'>
                  <Link to={`/${teamw}`} className='w-full h-full'>
                    <TeamLogo teamName={teamw} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondHome