import InitialHome from '../components/Home/InitialHome'
import SecondHome from '../components/Home/SecondHome';
import ThirdHome from '../components/Home/ThirdHome';
import LastHome from '../components/Home/LastHome';

const AppHome = () => {
  return (
    <div className="snap-y snap-mandatory w-full h-screen overflow-auto">
          <div className="snap-center">
            <InitialHome />
          </div>
          <div className="snap-center">
            <SecondHome />
          </div>
          <div className="snap-center">
            <ThirdHome />
          </div>
          <div className="snap-center">
            <LastHome />
          </div>
    </div>
  )
}

export default AppHome