import styled, { css } from 'styled-components'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  fullWidth?: boolean
}

const variantStyles = {
  primary: css`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.brand} 0%, #5ba7ff 100%);
    color: #07111d;
    border-color: transparent;

    &:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 12px 24px rgba(91, 167, 255, 0.18);
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textStrong};
    border-color: ${({ theme }) => theme.colors.border};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.surfaceMuted};
      border-color: rgba(125, 211, 252, 0.3);
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textMuted};
    border-color: transparent;

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.textStrong};
      background: rgba(255, 255, 255, 0.04);
    }
  `,
  danger: css`
    background: rgba(248, 113, 113, 0.14);
    color: ${({ theme }) => theme.colors.danger};
    border-color: rgba(248, 113, 113, 0.26);

    &:hover:not(:disabled) {
      background: rgba(248, 113, 113, 0.2);
    }
  `
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  min-height: 48px;
  padding: 0 18px;
  border: 1px solid transparent;
  border-radius: 16px;
  font-size: 0.94rem;
  font-weight: 700;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease,
    border-color 180ms ease,
    color 180ms ease;
  ${({ variant = 'primary' }) => variantStyles[variant]};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.58;
  }
`
