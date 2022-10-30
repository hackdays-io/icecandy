// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
    case 'POST':
      try {
        const { url } = req.body
        const { data } = await axios.get(url)
        res.status(200).json(data)
      } catch (error) {
        res.status(200).json('')
      }
      return
    default:
      break
  }
}

export default handler
