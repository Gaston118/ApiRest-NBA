import { Router } from "express";
import { PlayerController } from "../controller/players.js";
import { protectRoutes } from "../middleware/auth.js";

export const createPlayerRouter = ({playerModel}) => {
    const playersRouter = Router()

    const playerController = new PlayerController({playerModel})

    playersRouter.use(protectRoutes)

    playersRouter.get('/', playerController.getAll)
    playersRouter.get('/:name', playerController.getByName)
    playersRouter.get('/team/:team', playerController.getByTeam)

    playersRouter.post('/', playerController.create)
    playersRouter.put('/:name', playerController.put)
    playersRouter.patch('/:name', playerController.patch)

    return playersRouter
}
