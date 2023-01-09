import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
  }

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    default:
      return res.status(404).json({ message: 'Debe de especificar el query de busqueda' })
  }
}
