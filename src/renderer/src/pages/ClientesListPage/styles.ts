import { Panel } from '@renderer/components/ui/Panel'
import styled from 'styled-components'

export const PageSection = styled.div`
  display: grid;
  gap: 22px;
  margin-top: 24px;
`

export const HeroPanel = styled(Panel)`
  display: grid;
  gap: 24px;
  background:
    radial-gradient(circle at top right, rgba(125, 211, 252, 0.18), transparent 28%),
    linear-gradient(180deg, rgba(17, 24, 39, 0.98), rgba(11, 17, 28, 0.98));

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.6fr);
    align-items: end;
  }
`

export const HeroContent = styled.div`
  max-width: 720px;
`

export const Eyebrow = styled.span`
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(125, 211, 252, 0.12);
  color: ${({ theme }) => theme.colors.brand};
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const HeroTitle = styled.h2`
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  line-height: 1.08;
`

export const HeroDescription = styled.p`
  margin-top: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.98rem;
  line-height: 1.8;
`

export const MetricGrid = styled.div`
  display: grid;
  gap: 14px;
  align-content: end;
`

export const MetricCard = styled.div`
  padding: 18px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.03);
`

export const MetricLabel = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.84rem;
`

export const MetricValue = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
`

export const CardsGrid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`
