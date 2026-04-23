import styled from 'styled-components'

export const CardButton = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 220px;
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.surface};
  color: inherit;
  text-align: left;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease,
    background 220ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(125, 211, 252, 0.28);
    box-shadow: ${({ theme }) => theme.shadows.floating};
    background: linear-gradient(180deg, rgba(17, 24, 39, 0.96), rgba(11, 17, 28, 0.96));
  }
`

export const CardGlow = styled.div`
  position: absolute;
  inset: -80px auto auto 50%;
  width: 170px;
  height: 170px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(125, 211, 252, 0.12) 0%, rgba(125, 211, 252, 0) 72%);
  transform: translateX(-50%);
  pointer-events: none;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

export const Avatar = styled.div`
  display: grid;
  width: 50px;
  height: 50px;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.25), rgba(91, 167, 255, 0.35));
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.08em;
`

export const Name = styled.h3`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 1.06rem;
  line-height: 1.2;
`

export const Role = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.88rem;
`

export const InfoList = styled.div`
  display: grid;
  gap: 12px;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
`

export const StatusChip = styled.span`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(74, 222, 128, 0.12);
  color: ${({ theme }) => theme.colors.success};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
`

export const ViewLabel = styled.span`
  color: ${({ theme }) => theme.colors.brand};
  font-size: 0.87rem;
  font-weight: 700;
`
