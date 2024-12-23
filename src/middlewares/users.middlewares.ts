import { NextFunction, Request, Response } from 'express'

export const loginValidator = (req: Request, res: Response, next: NextFunction): void => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400).json({
      message: 'Email and password are required'
    })
  }
  next()
}
