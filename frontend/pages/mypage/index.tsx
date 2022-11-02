import { Container, Grid, Heading } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { NextPage } from 'next'
import SingleIceCandy from '../../components/atoms/icecandy/SingleIceCandy'
import { useHoldingIceCandy } from '../../hooks/useIceCandy'

const MyPage: NextPage = () => {
  const address = useAddress()
  const { holdingIceCandy } = useHoldingIceCandy(address)

  return (
    <Container minWidth="800px">
      <Heading>食べていないIceCandy</Heading>
      <Grid gridTemplateColumns="1fr 1fr 1fr" gap={3}>
        {holdingIceCandy?.notEatenIceCandy.map((iceCandy) => (
          <SingleIceCandy
            tokenURI={iceCandy.tokenURI}
            tokenId={iceCandy.tokenId.toNumber()}
            canEat={true}
          />
        ))}
      </Grid>
      <Heading mt={10}>食べたIceCandy</Heading>
      <Grid gridTemplateColumns="1fr 1fr 1fr" gap={3}>
        {holdingIceCandy?.eatenIceCandy.map((iceCandy) => (
          <SingleIceCandy
            tokenURI={iceCandy.tokenURI}
            tokenId={iceCandy.tokenId.toNumber()}
            canEat={false}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default MyPage
