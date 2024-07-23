import Map from '../MapView/Map';

const LastHome = () => {

  return (
    <div className='relative flex flex-col items-center w-auto h-screen'>
      <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: "url('/assets/backgrounds/nba2.webp')", opacity: 0.5 }}></div>
      <div className='relative flex justify-evenly w-full flex-wrap z-10'>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
          <h2 className='flex font-bold text-3xl mb-4 text-white underline'>NBA Teams Map</h2>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default LastHome;
