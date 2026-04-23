import styled from 'styled-components'

export const Panel = styled.section`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 1.15rem;
  line-height: 1.2;
`

export const SectionText = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`
