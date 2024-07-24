import { Link } from "react-router-dom"

const TopNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-start p-1 bg-transparent">
      <div className=""></div>
      <Link to={'/'}><img className="w-28 h-auto" src="/assets/LogoNBA.png" alt="NBA Logo" /></Link>
      <h1 className='flex text-3xl text-white items-center'>NBA API</h1>
      <div className="flex flex-row items-center text-white ml-auto mt-3.5 mr-3.5 border-2 border-gray-500 py-1 px-2 rounded-full transition ease-in-out hover:bg-slate-400 transform hover:-translate-y-1 hover:scale-110">
          <a className="flex" href="https://github.com/Gaston118/ApiRest-NBA" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
          <span>View source code</span></a>
      </div>
    </div>
  )
}

export default TopNavbar