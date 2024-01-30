import {createRequire} from 'node:module'
const require = createRequire(import.meta.url)
let players = require('../../players.json')

export class PlayerModel {
    static async getAll ({ position }) {
        if(position){
            const filteredPlayers = players.filter(
                player => player.position.toLowerCase() === position.toLowerCase()
            )
            return filteredPlayers
        }
        return players
    }

    static async getByName ({name}){
        const player = players.find(player => player.name === name)
        if(player) return player
    }

    static async create ({input}){
        const newPlayer = {
            ...input
        }
    
        players = players.concat(newPlayer)
        return newPlayer
    }

    static async update({name , input}){
        const playerIndex = players.findIndex(player => player.name === name)
        if(playerIndex===-1) return false

        players[playerIndex]={
            ...players[playerIndex],
            ...input
        }

        return players[playerIndex]
    }
}