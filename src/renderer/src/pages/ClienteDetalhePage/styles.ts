import styled from 'styled-components'

export const SingleColumn = styled.div`
  margin-top: 24px;
`

export const PageGrid = styled.div`
  display: grid;
  gap: 22px;
  margin-top: 24px;

  @media (min-width: 1100px) {
    grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.75fr);
    align-items: start;
  }
`

export const TopActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const HeroCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 26px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  background:
    radial-gradient(circle at top right, rgba(125, 211, 252, 0.12), transparent 32%),
    rgba(255, 255, 255, 0.02);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const HeroMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Avatar = styled.div`
  display: grid;
  width: 60px;
  height: 60px;
  place-items: center;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.25), rgba(91, 167, 255, 0.35));
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.08em;
`

export const ClientName = styled.h2`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 1.42rem;
`

export const ClientRole = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const DetailsGrid = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 22px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const InfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.surfaceMuted};
`

export const IconShell = styled.div`
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border-radius: 14px;
  background: rgba(125, 211, 252, 0.12);
  color: ${({ theme }) => theme.colors.brand};
`

export const InfoLabel = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.82rem;
`

export const InfoValue = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.textStrong};
  line-height: 1.6;
`

export const SummaryStack = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 24px;
`

export const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.surfaceMuted};
`

export const SummaryLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.88rem;
`

export const SummaryValue = styled.span`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 0.88rem;
  font-weight: 700;
`
