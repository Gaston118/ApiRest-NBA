import TeamLogo from '../TeamLogo';
import { Link } from 'react-router-dom';

const teamsEast = [
  'Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets',
  'Chicago Bulls', 'Cleveland Cavaliers', 'Detroit Pistons', 'Indiana Pacers', 
  'Miami Heat', 'Milwaukee Bucks', 'New York Knicks', 'Orlando Magic', 
  'Philadelphia 76ers', 'Toronto Raptors', 'Washington Wizards'
];

const ThirdHome = () => {

  return (
    <div className='relative flex flex-col items-center w-auto h-screen'>
      <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: "url('/assets/backgrounds/homeconferences.webp')", opacity: 0.5 }}></div>
      <div className='relative flex justify-evenly w-full flex-wrap z-10'>
        <div className='flex flex-col items-center'>
          <h2 className='mt-10 mb-4 text-white font-bold underline text-2xl'>EASTERN CONFERENCE</h2>
          <div className='grid grid-cols-5 gap-3'>
            {teamsEast.map((teame) => (
              <div key={teame} >
                <div className='bg-slate-200 rounded-md w-32 h-32 flex justify-center items-center transition-transform transform hover:scale-95 hover:border-2 hover:border-black hover:rounded-custom'>
                  <Link to={`/team/${teame}`} className='w-full h-full'>
                    <TeamLogo teamName={teame} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdHome;
