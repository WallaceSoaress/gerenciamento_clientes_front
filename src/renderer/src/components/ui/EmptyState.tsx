import styled from 'styled-components'
import { Button } from './Button'

type EmptyStateProps = {
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

const EmptyState = ({
  title,
  description,
  actionLabel,
  onAction
}: EmptyStateProps): React.JSX.Element => {
  return (
    <Wrapper>
      <Orb aria-hidden="true" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      {actionLabel && onAction ? (
        <Button type="button" variant="secondary" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 14px;
  justify-items: center;
  padding: 42px 24px;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.surface};
  text-align: center;
`

const Orb = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(125, 211, 252, 0.22) 0%, rgba(125, 211, 252, 0) 70%);
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 1.18rem;
`

const Description = styled.p`
  max-width: 520px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`

export default EmptyState
