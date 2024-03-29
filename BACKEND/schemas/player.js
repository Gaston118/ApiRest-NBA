import z from 'zod'

const NBATeams = {
    ATLANTA_HAWKS: 'Atlanta Hawks',
    BOSTON_CELTICS: 'Boston Celtics',
    BROOKLYN_NETS: 'Brooklyn Nets',
    CHARLOTTE_HORNETS: 'Charlotte Hornets',
    CHICAGO_BULLS: 'Chicago Bulls',
    CLEVELAND_CAVALIERS: 'Cleveland Cavaliers',
    DALLAS_MAVERICKS: 'Dallas Mavericks',
    DENVER_NUGGETS: 'Denver Nuggets',
    DETROIT_PISTONS: 'Detroit Pistons',
    GOLDEN_STATE_WARRIORS: 'Golden State Warriors',
    HOUSTON_ROCKETS: 'Houston Rockets',
    INDIANA_PACERS: 'Indiana Pacers',
    LA_CLIPPERS: 'LA Clippers',
    LOS_ANGELES_LAKERS: 'Los Angeles Lakers',
    MEMPHIS_GRIZZLIES: 'Memphis Grizzlies',
    MIAMI_HEAT: 'Miami Heat',
    MILWAUKEE_BUCKS: 'Milwaukee Bucks',
    MINNESOTA_TIMBERWOLVES: 'Minnesota Timberwolves',
    NEW_ORLEANS_PELICANS: 'New Orleans Pelicans',
    NEW_YORK_KNICKS: 'New York Knicks',
    OKLAHOMA_CITY_THUNDER: 'Oklahoma City Thunder',
    ORLANDO_MAGIC: 'Orlando Magic',
    PHILADELPHIA_76ERS: 'Philadelphia 76ers',
    PHOENIX_SUNS: 'Phoenix Suns',
    PORTLAND_TRAIL_BLAZERS: 'Portland Trail Blazers',
    SACRAMENTO_KINGS: 'Sacramento Kings',
    SAN_ANTONIO_SPURS: 'San Antonio Spurs',
    TORONTO_RAPTORS: 'Toronto Raptors',
    UTAH_JAZZ: 'Utah Jazz',
    WASHINGTON_WIZARDS: 'Washington Wizards'
  };
  

const playerSchema = z.object({
    name: z.string(),
    number: z.number().int().min(0).max(99),
    team: z.string().refine((value) => Object.values(NBATeams).includes(value), {
        message: 'Invalid NBA team'
      }),
    position: z.enum(['G', 'SG', 'SF', 'PF', 'C']),
    photo: z.string().url({
        message: 'Photo must be a valid URL'
      })
})

export function validatePlayer(object){
    return playerSchema.safeParse(object)
}

export function validatePartialPlayer(input){
    return playerSchema.partial().safeParse(input)
}
