import { useEffect, useState } from 'react'
import { IFlavorExtension } from '../types/contracts'
import { useProfileNFTContractClient } from './useContractClient'

export const useGetAvailableFlavors = (profileId?: number) => {
  const [flavors, setFlavors] =
    useState<IFlavorExtension.FlavorStructStruct[]>()
  const profileClient = useProfileNFTContractClient()

  useEffect(() => {
    const fetch = async () => {
      if (!profileClient || !profileId) return
      try {
        const flavors = await profileClient?.getFlavor(profileId)
        setFlavors(flavors)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [profileId, profileClient])

  return { flavors }
}

export const useHandleFlavor = () => {
  const profileClient = useProfileNFTContractClient()

  const activate = async (profileId: number, extensionId: number) => {
    if (!profileClient) return
    try {
      await profileClient?.activateFlavor(profileId, extensionId)
    } catch (error) {
      console.log(error)
    }
  }

  const deactivate = async (profileId: number, extensionId: number) => {
    if (!profileClient) return
    try {
      await profileClient?.deactivateFlavor(profileId, extensionId)
    } catch (error) {
      console.log(error)
    }
  }

  return { activate, deactivate }
}
