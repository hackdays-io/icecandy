import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as ReactDOMServer from 'react-dom/server'
import { Profile } from '../../../types/contracts'
import { profileNFTContractClient } from '../middleware/contractClient'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const profileContract: Profile = (await profileNFTContractClient()) as Profile
  const profile = await profileContract.getProfile(1)

  const { data: image } = await axios.get(profile.imageURI, {
    responseType: 'arraybuffer',
  })
  const base64 = Buffer.from(image, 'binary').toString('base64')

  const domSvg = ReactDOMServer.renderToString(
    <svg
      x="${x}"
      y="${y}"
      width="${panelSize}"
      height="${panelSize}"
      viewBox="0 0 ${panelSize} ${panelSize}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      rect
      <image width="50" height="50" href={`data:image/jpg;base64,${base64}`} />
      <text x="10" y="30" font-family="Verdana" font-size="35" fill="black">
        {profile.handle}
      </text>
    </svg>
  )

  res.status(200).setHeader('Content-Type', 'image/svg+xml').send(domSvg)
}

export default handler
