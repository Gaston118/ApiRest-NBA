import axios from 'axios'

const baseUrl = '/api/players';

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log(response.data)
  return response.data;
}

export async function getByTeam(team){
  try {
  const playersByTeam = await axios.get(baseUrl + `/team/${team}`);
  console.log(playersByTeam.data)
  return playersByTeam.data
  }catch (error) {
    if (error.response && error.response.status === 404) {
      console.warn(`Not found: ${team}`);
      return null;
    } else {
      console.error('Error al obtener jugadores por equipo', error);
      return { error: 'Error al obtener jugadores por equipo' };
    }
  }
}

  export async function getByName(name){
    try {
      const player = await axios.get(baseUrl + `/${name}`);
      console.log(player.data)
      return player.data
      }catch (error) {
        if (error.response && error.response.status === 404) {
          console.warn(`Not found: ${name}`);
          return null;
        } else {
          console.error('Error al obtener jugador', error);
          return null;
        }
  }
} 


