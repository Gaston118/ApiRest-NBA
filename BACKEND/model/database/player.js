import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const playerSchema = new mongoose.Schema({
    name: String,
    position: String,
    team: String,
    number: Number,
    photo: String
});

playerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Player = mongoose.model('Player', playerSchema, 'Players');

export class PlayerModel {
    static async getAll({ position, team }) {
        try {
            if (position) {
                const filteredPlayers = await Player.find({ position: new RegExp(position, 'i') });
                return filteredPlayers;
            }

            if(team){
                const filteredPlayers = await Player.find({ team: new RegExp(team, 'i') });
                return filteredPlayers;
            }

            const allPlayers = await Player.find({});
            return allPlayers;
        } catch (error) {
            console.error('Error fetching players:', error);
            throw error;
        }
    }

    static async getByName({ name }) {
        try {
            const player = await Player.findOne({ name });
            return player;
        } catch (error) {
            console.error('Error fetching player by name:', error);
            throw error;
        }
    }

    static async getByTeam({ team }) {
        try {
            const players = await Player.find({ team });
            return players;
        } catch (error) {
            console.error('Error fetching players by team:', error);
            throw error;
        }
    }

    static async create({ input }) {
        const existingPlayer = await Player.findOne({ name: input.name });

        if (existingPlayer) {
            return { error: 'Player with the same name already exists' };
        }

        try {
            const newPlayer = await Player.create(input);
            return newPlayer;
        } catch (error) {
            console.error('Error creating player:', error);
            throw error;
        }
    }


    static async update({ name, input }) {
        try {
            const updatedPlayer = await Player.findOneAndUpdate(
                { name },
                { $set: input },
                { new: true }
            );

            return updatedPlayer;
        } catch (error) {
            console.error('Error updating player:', error);
            throw error;
        }
    }
}
