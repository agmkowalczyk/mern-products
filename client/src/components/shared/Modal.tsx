import { ReactNode, useEffect, useState } from "react"
import styled, { css, keyframes } from "styled-components"

interface Props {
  title: string
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = ({ title, isOpen, onClose, children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)

  const close = () => {
    setIsModalClosing(true)
    setTimeout(() => {
      onClose()
      setIsModalClosing(false)
    }, 300)
  }

  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen])

  return (
    <>
      {isModalOpen && (
        <>
          <ModalOverlay onClick={close} />
          <ModalContent $closing={isModalClosing}>
            <ModalHeader>{title}</ModalHeader>
            <CloseBtn onClick={close}> 🡺 </CloseBtn>
            {children}
          </ModalContent>
        </>
      )}
       
    </>
  )
}

export default Modal

const ModalOverlay = styled.div<{ $closing?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: opacity 0.3s ease-in-out;
`
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(50%);
  }
}
`
const slideOut = keyframes`
  from {
    transform: translateX(50%);
  }

  to {
    transform: translateX(170%);
  }
`
const ModalContent = styled.div<{ $closing?: boolean }>`
  background: #f8f6f4;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  transform: translateX(170%);
  animation: ${props =>
    !props.$closing
      ? css`
          ${slideIn} 0.3s ease-out forwards
        `
      : css`
          ${slideOut} 0.3s ease-in-out
        `};

  width: 80vw;
  border-radius: 8px;
  margin-left: auto;
  box-shadow:
    0 4px 20px 0 rgb(0 0 0 / 10%),
    0 1px 2px 0 rgb(0 0 0 / 6%);
  height: 85vh;
  position: relative;
  position: absolute;
  overflow-y: auto;
  right: 50%;
  top: 2rem;

  @media (min-width: 600px) {
    width: 30rem;
    right: 17rem;
    height: 28rem;
  }
`
const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`
const ModalHeader = styled.h3`
  text-align: left;
  margin-top: 2.8rem;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`
