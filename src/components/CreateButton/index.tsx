import { HTMLAttributes } from 'react'

import { PlusCircle } from '@phosphor-icons/react'
import { Container } from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  disabled?: boolean
}

export function CreateButton({ disabled = false, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick} disabled={disabled}>
      Criar <PlusCircle size={18} />
    </Container>
  )
}
