import { validatePlayer, validatePartialPlayer } from '../schemas/player.js';

export class PlayerController {
    constructor({playerModel}){
        this.playerModel = playerModel
    }

    getAll = async (req, res) => {
        const { position, team} = req.query
        const players = await this.playerModel.getAll({position, team})
        res.json(players)
    }

    getByName = async (req, res) => {
        const {name} = req.params
        const player = await this.playerModel.getByName({name})
        if(player) return res.json(player)
        res.status(404).json({message: "Player not found"})
    }

    getByTeam = async (req, res) => {
        const { team } = req.params;
        const players = await this.playerModel.getByTeam({ team });
        if (players.length === 0) {
                return res.status(404).json({ message: 'Team not found' });
            }
            return res.json(players);
    }

    create = async (req, res) => {
        const result = validatePlayer(req.body)
    
        if(result.error){
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
    
       const newPlayer = await this.playerModel.create({input: result.data})
       res.status(201).json(newPlayer)
    }

    put = async (req, res) => {
        const {name} = req.params
    
        const result = validatePlayer(req.body); // Validate the request body
    
        if (result.error) {
            return res.status(400).json({ error: JSON.parse(result.error.message) });
        }
    
        const updatePlayer= await this.playerModel.update({name, input: result.data})
    
        return res.json(updatePlayer)
    }

    patch = async (req, res) => {
        const {name} = req.params
    
        const result = validatePartialPlayer(req.body); // Validate the request body
    
        if (result.error) {
            return res.status(400).json({ error: JSON.parse(result.error.message) });
        }
    
        const updatePlayer= await this.playerModel.update({name, input: result.data})
    
        return res.json(updatePlayer)
    }

}