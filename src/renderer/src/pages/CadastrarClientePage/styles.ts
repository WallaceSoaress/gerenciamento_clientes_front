import { Panel } from '@renderer/components/ui/Panel'
import styled from 'styled-components'

export const PageGrid = styled.div`
  display: grid;
  gap: 22px;
  margin-top: 24px;

  @media (min-width: 1080px) {
    grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.8fr);
    align-items: start;
  }
`

export const FieldsGrid = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 28px;
  margin-bottom: 16px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 22px;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
  }
`

export const SubmitError = styled.p`
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.9rem;
`

export const AsideCard = styled(Panel)`
  position: sticky;
  top: 24px;
  overflow: hidden;
  background:
    radial-gradient(circle at top right, rgba(125, 211, 252, 0.12), transparent 34%),
    ${({ theme }) => theme.colors.surface};
`

export const AsideLabel = styled.span`
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(125, 211, 252, 0.12);
  color: ${({ theme }) => theme.colors.brand};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const AsideTitle = styled.h2`
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 1.4rem;
  line-height: 1.15;
`

export const AsideText = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`

export const PreviewCard = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 24px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
`

export const PreviewName = styled.p`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 1.05rem;
  font-weight: 700;
`

export const PreviewMeta = styled.p`
  color: ${({ theme }) => theme.colors.brand};
  font-size: 0.9rem;
`

export const PreviewLine = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
`

export const PreviewAddress = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`
