import { FC } from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  loading?: boolean;
  label?: string;
}

const Input: FC<InputProps> = ({ disabled = false, loading, children, ...props }) => {
  return <InputCustom disabled={disabled} {...props} />;
};

export default Input;
const InputCustom = styled.input<InputProps>`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 0.1rem solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  &:hover {
    transition: all 0.3s ease-in-out;
    border: 0.1rem solid ${({ theme }) => theme.main};
  }

  &:focus {
    outline: none;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.main};
    border: 0.1rem solid ${({ theme }) => theme.main};
  }

  &::placeholder {
    color: ${({ theme }) => `${theme.text}60`};
  }

  &:disabled {
    opacity: 0.9;
    cursor: not-allowed;
    box-shadow: none;
    background-color: ${({ theme }) => theme.border};
    border: 0.1rem solid ${({ theme }) => theme.border};
    &::placeholder {
      color: #00000060;
    }
  }
`;
