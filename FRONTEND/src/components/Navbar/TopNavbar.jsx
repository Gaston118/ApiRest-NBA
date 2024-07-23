import { Link } from "react-router-dom"

const TopNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-start p-1 bg-transparent">
      <div className=""></div>
      <Link to={'/'}><img className="w-28 h-auto" src="/assets/LogoNBA.png" alt="NBA Logo" /></Link>
      <h1 className='flex text-3xl items-center'
        style={{
          background: 'linear-gradient(to right, #1e3a8a, #2445a3, #571896, #991b1b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >NBA API</h1>
    </div>
  )
}

export default TopNavbar