import { Link } from "react-router-dom"

const TopNavbar = () => {
  return (
        <div className="flex items-center p-3 bg-gray-800 to-transparent">
            <Link to={'/'}><img className="w-32 h-auto" src="/assets/LogoNBA.png" alt="NBA Logo" /></Link>
            <h1 className='text-4xl'
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