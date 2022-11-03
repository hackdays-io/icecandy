import { FC, ReactNode, useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

type Props = {
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
  maxWidth?: string
}

const ModalBase: FC<Props> = ({ isOpen, onClose, children, maxWidth }) => {
  const cancelRef = useRef<any>()
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={() => onClose()}
      leastDestructiveRef={cancelRef}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent my={0} mx={2} maxWidth={maxWidth} maxHeight="90%">
          <AlertDialogCloseButton />
          <AlertDialogBody
            p={0}
            overflow="auto"
            css={{
              '&::-webkit-scrollbar': {
                width: '0px',
              },
            }}
          >
            {children}
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default ModalBase
