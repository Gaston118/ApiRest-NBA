import express, { json } from 'express';
import cors from 'cors';
import { createPlayerRouter } from './routes/player-routes.js';

export const createApp = ({playerModel}) => {
    const app = express()
    
    app.disable('x-powered-by')
    app.use(json())
    app.use(cors())

    app.get('/', (req, res) =>{
        res.json({message: "hola mundo!"})
    })

    app.use('/players', createPlayerRouter({playerModel}))

    const PORT = process.env.PORT ?? 3001

    app.listen(PORT, () =>{
        console.log(`Server running on port ${PORT}`)
    })

}
