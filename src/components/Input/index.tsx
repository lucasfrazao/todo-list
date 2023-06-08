import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder: string
  type: HTMLInputTypeAttribute
}

export function Input({ label, placeholder, type, ...rest }: InputProps) {
  return (
    <Container>
      <label htmlFor="" hidden>
        {label}
      </label>
      <input type={type} placeholder={placeholder} {...rest} />
    </Container>
  )
}
