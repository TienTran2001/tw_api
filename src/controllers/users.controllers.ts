import { Request, Response } from 'express'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body

  if (email === 'tienco201@gmail.com' && password === 'Tienco01') {
    res.status(200).json({
      message: 'Login successfully'
    })
  } else {
    res.status(400).json({
      message: 'Email or password is incorrect'
    })
  }
}
