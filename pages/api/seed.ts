import { NextApiRequest, NextApiResponse } from 'next'
import { db, seedDB } from '../../database'
import { Product } from '../../models'

type Data = {
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (process.env.NODE_ENV === 'production') res.status(401).json({ message: 'Notiene acceso a este servicio' })

  await db.connect()
  await Product.deleteMany()
  await Product.insertMany(seedDB.initialData.products)
  await db.disconnect()

  res.status(200).json({ message: 'Proceso realizado' })
}

export default handler
