import styled from 'styled-components'

type FieldBaseProps = {
  label: string
  hint?: string
  error?: string
}

type InputFieldProps = FieldBaseProps & React.InputHTMLAttributes<HTMLInputElement>
type TextAreaFieldProps = FieldBaseProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const FieldShell = ({
  label,
  hint,
  error,
  children
}: FieldBaseProps & { children: React.ReactNode }): React.JSX.Element => {
  return (
    <Wrapper>
      <Header>
        <Label>{label}</Label>
        {hint ? <Hint>{hint}</Hint> : null}
      </Header>
      {children}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </Wrapper>
  )
}

export const InputField = ({
  label,
  hint,
  error,
  ...props
}: InputFieldProps): React.JSX.Element => {
  return (
    <FieldShell label={label} hint={hint} error={error}>
      <Input $hasError={Boolean(error)} {...props} />
    </FieldShell>
  )
}

export const TextAreaField = ({
  label,
  hint,
  error,
  ...props
}: TextAreaFieldProps): React.JSX.Element => {
  return (
    <FieldShell label={label} hint={hint} error={error}>
      <TextArea $hasError={Boolean(error)} {...props} />
    </FieldShell>
  )
}

const Wrapper = styled.label`
  display: grid;
  gap: 10px;
`

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`

const Label = styled.span`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 0.92rem;
  font-weight: 700;
`

const Hint = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.78rem;
`

const controlStyles = `
  width: 100%;
  border: 1px solid var(--field-border);
  border-radius: 18px;
  background: rgba(7, 12, 22, 0.92);
  color: var(--field-color);
  outline: none;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;

  &::placeholder {
    color: rgba(148, 163, 184, 0.65);
  }

  &:focus {
    border-color: rgba(125, 211, 252, 0.45);
    box-shadow: 0 0 0 4px rgba(125, 211, 252, 0.1);
  }
`

const Input = styled.input<{ $hasError: boolean }>`
  --field-border: ${({ $hasError, theme }) =>
    $hasError ? 'rgba(248, 113, 113, 0.5)' : theme.colors.border};
  --field-color: ${({ theme }) => theme.colors.textStrong};
  ${controlStyles}
  min-height: 52px;
  padding: 0 16px;
`

const TextArea = styled.textarea<{ $hasError: boolean }>`
  --field-border: ${({ $hasError, theme }) =>
    $hasError ? 'rgba(248, 113, 113, 0.5)' : theme.colors.border};
  --field-color: ${({ theme }) => theme.colors.textStrong};
  ${controlStyles}
  min-height: 132px;
  padding: 16px;
  resize: vertical;
`

const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.8rem;
`
