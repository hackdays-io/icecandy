import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const { data } = await axios.post(
          `https://api.twitter.com/oauth/request_token?oauth_consumer_key=${process.env.TWITTER_CONSUMER_KEY}&oauth_callback=http%3A%2F%2Flocalhost%3A3000%2Fprofile%2Fnew`,
          {},
          {
            headers: {
              Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
            },
          }
        )
        res.status(200).json(data)
      } catch (error) {
        res.status(200).json('')
      }
      return
    case 'POST':
      try {
        const { oauth_token, oauth_verifier } = req.body
        const { data } = await axios.post(
          `https://api.twitter.com/oauth/access_token?oauth_token=${oauth_token}&oauth_verifier=${oauth_verifier}`
        )
        res.status(200).json(data)
      } catch (error) {
        res.status(200).json('')
      }
    default:
      break
  }
}

export default handler
