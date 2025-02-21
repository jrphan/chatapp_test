import { FC, useState } from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  loading?: boolean;
}

interface RippleProps {
  variant?: 'default' | 'outline';
}

const Button: FC<ButtonProps> = ({ variant = 'default', loading, onClick, children, ...props }) => {
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setRipple({ x: e.clientX - left, y: e.clientY - top });

    setTimeout(() => setRipple(null), 600);

    onClick?.(e);
  };

  return (
    <ButtonCustom
      variant={variant}
      onClick={handleClick}
      className={loading ? 'disabled' : ''}
      {...props}
    >
      {ripple && <Ripple variant={variant} style={{ left: ripple.x, top: ripple.y }} />}
      {loading ? 'Loading...' : children}
    </ButtonCustom>
  );
};

export default Button;

const ButtonCustom = styled.button<ButtonProps>`
  position: relative;
  overflow: hidden;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.1);
  border: 0.1rem solid
    ${({ theme, variant }) => (variant === 'default' ? 'transparent' : theme.border)};
  background-color: ${({ theme, variant }) => (variant === 'default' ? theme.main : 'transparent')};
  color: ${({ theme, variant }) => (variant === 'default' ? theme.body : theme.text)};

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === 'default' ? theme.mainbold : 'transparent'};
    color: ${({ theme, variant }) => (variant === 'default' ? theme.body : theme.main)};
    box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.2);
    border: 0.1rem solid
      ${({ theme, variant }) => (variant === 'default' ? 'transparent' : theme.main)};
  }

  &:active {
    transform: scale(0.85);
    box-shadow: 0 0.3rem 0.8rem rgba(0, 0, 0, 0.15);
  }

  &.disabled {
    cursor: not-allowed;
    transform: scale(1) !important;
  }
`;

const Ripple = styled.span<RippleProps>`
  position: absolute;
  width: 10rem;
  height: 10rem;
  background: ${({ theme, variant }) =>
    variant === 'default' ? 'rgba(255, 255, 255, 0.5)' : theme.main};
  border-radius: 50%;
  transform: scale(0);
  animation: rippleEffect 0.6s linear;
  pointer-events: none;

  @keyframes rippleEffect {
    to {
      transform: scale(3);
      opacity: 0;
    }
  }
`;
