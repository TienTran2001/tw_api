import { loginController } from '@/controllers/users.controllers'
import { loginValidator } from '@/middlewares/users.middlewares'
import { Router } from 'express'

const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)

export default usersRouter
