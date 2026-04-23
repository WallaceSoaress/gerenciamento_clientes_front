import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: 100% 0;
  }

  100% {
    background-position: -100% 0;
  }
`

type LoadingStateProps = {
  cards?: number
}

const LoadingState = ({ cards = 3 }: LoadingStateProps): React.JSX.Element => {
  return (
    <Grid>
      {Array.from({ length: cards }).map((_, index) => (
        <Card key={index}>
          <Row $width="42%" />
          <Row $width="28%" />
          <Spacer />
          <Row $width="86%" />
          <Row $width="64%" />
          <Spacer />
          <Row $width="24%" />
        </Card>
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`

const Card = styled.div`
  display: grid;
  gap: 12px;
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.surface};
`

const Row = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
  height: 14px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 15%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.05) 85%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s linear infinite;
`

const Spacer = styled.div`
  height: 10px;
`

export default LoadingState
