import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 6px 0 4px;

  @media (max-width: 720px) {
    flex-wrap: wrap;
    align-items: flex-start;
  }
`

export const MobileMenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textStrong};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  @media (min-width: 961px) {
    display: none;
  }
`

export const TitleGroup = styled.div`
  flex: 1;
  min-width: 220px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: clamp(1.55rem, 2vw, 2.15rem);
  line-height: 1.1;
`

export const Description = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.96rem;
`

export const StatusPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 0.84rem;
  font-weight: 600;

  @media (max-width: 720px) {
    width: 100%;
    justify-content: center;
  }
`
