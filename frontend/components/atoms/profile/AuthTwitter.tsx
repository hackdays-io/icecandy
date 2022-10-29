import { Button } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

type Props = {
  setAccountData: (params: { userName: string }) => void
}

const AuthTwitter: FC<Props> = ({ setAccountData }) => {
  const { query, pathname } = useRouter()
  const [twitterName, setTwitterName] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        if (query.oauth_token && query.oauth_verifier) {
          setIsLoading(true)
          const { data } = await axios.post('/api/auth/twitter', {
            oauth_token: query.oauth_token,
            oauth_verifier: query.oauth_verifier,
          })
          const params = new URLSearchParams(data)
          const userName = params.get('screen_name')
          if (!userName) return
          setTwitterName(userName)
          setAccountData({ userName })
          history.replaceState('', '', pathname)
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
      }
    }
    fetch()
  }, [query])

  const getToken = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get(`/api/auth/twitter`)
      location.href = `https://api.twitter.com/oauth/authorize?${data}`
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  return (
    <Button
      onClick={() => {
        getToken()
      }}
      isLoading={isLoading}
      disabled={!!twitterName}
      rounded="full"
      backgroundColor="#1C9BF0"
      color="white"
    >
      Twitter{twitterName && `: ${twitterName}`}
    </Button>
  )
}

export default AuthTwitter
