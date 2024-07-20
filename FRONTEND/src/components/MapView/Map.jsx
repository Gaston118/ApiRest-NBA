import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'

const teams = [
    { name: 'Atlanta Hawks', location: 'Atlanta, GA', position: [33.7550, -84.3900], logo: '/assets/images/Atlanta_Hawks.png' },
    { name: 'Boston Celtics', location: 'Boston, MA', position: [42.3662, -71.0647], logo: '/assets/images/Boston_Celtics.png' },
    { name: 'Brooklyn Nets', location: 'Brooklyn, NY', position: [40.6826, -73.9755], logo: '/assets/images/Brooklyn_Nets.png' },
    { name: 'Charlotte Hornets', location: 'Charlotte, NC', position: [35.2130, -80.8398], logo: '/assets/images/Charlotte_Hornets.png' },
    { name: 'Chicago Bulls', location: 'Chicago, IL', position: [41.8807, -87.6742], logo: '/assets/images/Chicago_Bulls.png' },
    { name: 'Cleveland Cavaliers', location: 'Cleveland, OH', position: [41.4961, -81.6934], logo: '/assets/images/Cleveland_Cavaliers.png' },
    { name: 'Dallas Mavericks', location: 'Dallas, TX', position: [32.7907, -96.8100], logo: '/assets/images/Dallas_Mavericks.png' },
    { name: 'Denver Nuggets', location: 'Denver, CO', position: [39.7392, -104.9903], logo: '/assets/images/Denver_Nuggets.png' },
    { name: 'Detroit Pistons', location: 'Detroit, MI', position: [42.3362, -83.0458], logo: '/assets/images/Detroit_Pistons.png' },
    { name: 'Golden State Warriors', location: 'San Francisco, CA', position: [37.7680, -122.3878], logo: '/assets/images/Golden_State_Warriors.png' },
    { name: 'Houston Rockets', location: 'Houston, TX', position: [29.7573, -95.3690], logo: '/assets/images/Houston_Rockets.png' },
    { name: 'Indiana Pacers', location: 'Indianapolis, IN', position: [39.7684, -86.1581], logo: '/assets/images/Indiana_Pacers.png' },
    { name: 'LA Clippers', location: 'Los Angeles, CA', position: [34.0522, -118.3], logo: '/assets/images/LA_Clippers.png' },
    { name: 'Los Angeles Lakers', location: 'Los Angeles, CA', position: [34.0522, -118.2437], logo: '/assets/images/Los_Angeles_Lakers.png' },
    { name: 'Memphis Grizzlies', location: 'Memphis, TN', position: [35.1495, -90.0490], logo: '/assets/images/Memphis_Grizzlies.png' },
    { name: 'Miami Heat', location: 'Miami, FL', position: [25.7617, -80.1918], logo: '/assets/images/Miami_Heat.png' },
    { name: 'Milwaukee Bucks', location: 'Milwaukee, WI', position: [43.0389, -87.9065], logo: '/assets/images/Milwaukee_Bucks.png' },
    { name: 'Minnesota Timberwolves', location: 'Minneapolis, MN', position: [44.9778, -93.2650], logo: '/assets/images/Minnesota_Timberwolves.png' },
    { name: 'New Orleans Pelicans', location: 'New Orleans, LA', position: [29.9511, -90.0715], logo: '/assets/images/New_Orleans_Pelicans.png' },
    { name: 'New York Knicks', location: 'New York, NY', position: [40.7831, -73.9712], logo: '/assets/images/New_York_Knicks.png' },
    { name: 'Oklahoma City Thunder', location: 'Oklahoma City, OK', position: [35.4676, -97.5164], logo: '/assets/images/Oklahoma_City_Thunder.png' },
    { name: 'Orlando Magic', location: 'Orlando, FL', position: [28.5383, -81.3792], logo: '/assets/images/Orlando_Magic.png' },
    { name: 'Philadelphia 76ers', location: 'Philadelphia, PA', position: [39.9526, -75.1652], logo: '/assets/images/Philadelphia_76ers.png' },
    { name: 'Phoenix Suns', location: 'Phoenix, AZ', position: [33.4484, -112.0740], logo: '/assets/images/Phoenix_Suns.png' },
    { name: 'Portland Trail Blazers', location: 'Portland, OR', position: [45.5152, -122.6784], logo: '/assets/images/Portland_Trail_Blazers.png' },
    { name: 'Sacramento Kings', location: 'Sacramento, CA', position: [38.5816, -121.4944], logo: '/assets/images/Sacramento_Kings.png' },
    { name: 'San Antonio Spurs', location: 'San Antonio, TX', position: [29.4241, -98.4936], logo: '/assets/images/San_Antonio_Spurs.png' },
    { name: 'Toronto Raptors', location: 'Toronto, ON', position: [43.6511, -79.3470], logo: '/assets/images/Toronto_Raptors.png' },
    { name: 'Utah Jazz', location: 'Salt Lake City, UT', position: [40.7608, -111.8910], logo: '/assets/images/Utah_Jazz.png' },
    { name: 'Washington Wizards', location: 'Washington, DC', position: [38.8951, -77.0369], logo: '/assets/images/Washington_Wizards.png' }
];

const Map = () => {
  return (
    <div className='leaflet-container'>
        <MapContainer center={[42.3662019, -71.0647209]} zoom={13} scrollWheelZoom={false}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {teams.map((team) => (
                <Marker key={team.name} position={team.position}>
                <Popup>
                    <div className="flex items-center">
                    <img src={team.logo} alt={`${team.name} Logo`} className="w-12 h-12 mr-2" />
                    <div>
                        <h3 className="font-bold">{team.name}</h3>
                        <p>{team.location}</p>
                    </div>
                    </div>
                </Popup>
                </Marker>
            ))}
        </MapContainer>
    </div>
  )
}

export default Map