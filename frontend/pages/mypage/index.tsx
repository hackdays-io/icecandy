import { Container, Grid, Heading } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { NextPage } from 'next'
import SingleIceCandy from '../../components/atoms/icecandy/SingleIceCandy'
import {
  useHoldingIceCandies,
  useSentAndReceivedHistories,
} from '../../hooks/useIceCandy'
import { useProfileId } from '../../hooks/useProfileContract'

const MyPage: NextPage = () => {
  const address = useAddress()
  const { holdingIceCandy } = useHoldingIceCandies(address)
  const { profileId } = useProfileId(address)
  const { sentAndReceivedHistories } = useSentAndReceivedHistories(profileId)

  return (
    <Container minWidth="800px">
      <Heading>
        not revealed icecandy: {holdingIceCandy?.notRevealed.length}
      </Heading>
      <Grid gridTemplateColumns="1fr 1fr 1fr" gap={3}>
        {holdingIceCandy?.notRevealed.map((e) => (
          <SingleIceCandy
            tokenURI={e.tokenURI}
            tokenId={e.tokenId.toNumber()}
            iceCandyType={0}
            key={e.tokenId.toNumber()}
          />
        ))}
      </Grid>
      <Heading mt={10}>
        revealed icecandy: {holdingIceCandy?.revealed.length}
      </Heading>
      <Grid gridTemplateColumns="1fr 1fr 1fr" gap={3}>
        {holdingIceCandy?.revealed.map((e) => (
          <SingleIceCandy
            tokenURI={e.tokenURI}
            tokenId={e.tokenId.toNumber()}
            iceCandyType={1}
            key={e.tokenId.toNumber()}
          />
        ))}
      </Grid>
      <Heading mt={10}>lucky icecandy: {holdingIceCandy?.lucky.length}</Heading>
      <Grid gridTemplateColumns="1fr 1fr 1fr" gap={3}>
        {holdingIceCandy?.lucky.map((e) => (
          <SingleIceCandy
            tokenURI={e.tokenURI}
            tokenId={e.tokenId.toNumber()}
            iceCandyType={1}
            key={e.tokenId.toNumber()}
          />
        ))}
      </Grid>
      <Heading mt={10}>
        unlucky icecandy: {holdingIceCandy?.unlucky.length}
      </Heading>
      <Grid gridTemplateColumns="1fr 1fr 1fr" gap={3}>
        {holdingIceCandy?.unlucky.map((e) => (
          <SingleIceCandy
            tokenURI={e.tokenURI}
            tokenId={e.tokenId.toNumber()}
            iceCandyType={1}
            key={e.tokenId.toNumber()}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default MyPage
