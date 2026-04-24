import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Aside = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 30;
  display: flex;
  width: min(100vw, 288px);
  flex-direction: column;
  gap: 28px;
  padding: 24px 20px;
  background:
    linear-gradient(180deg, rgba(20, 28, 44, 0.98) 0%, rgba(12, 16, 27, 0.98) 100%),
    ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.floating};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-105%')});
  transition:
    transform 220ms ease,
    box-shadow 220ms ease;

  @media (min-width: 961px) {
    transform: translateX(0);
    width: 280px;
    box-shadow: none;
  }
`

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

export const BrandMark = styled.div`
  display: grid;
  height: 46px;
  width: 46px;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.brand} 0%, #5ba7ff 100%);
  color: #08111f;
  font-size: 0.94rem;
  font-weight: 800;
  letter-spacing: 0.08em;
`

export const BrandName = styled.p`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 1rem;
  font-weight: 700;
`

export const BrandCaption = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.82rem;
`

export const MobileCloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textStrong};

  @media (min-width: 961px) {
    display: none;
  }
`

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 15px;
  border: 1px solid transparent;
  border-radius: 18px;
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  font-size: 0.96rem;
  font-weight: 600;
  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateX(3px);
    color: ${({ theme }) => theme.colors.textStrong};
    background: rgba(255, 255, 255, 0.04);
    border-color: ${({ theme }) => theme.colors.border};
  }

  &.active {
    color: ${({ theme }) => theme.colors.textStrong};
    background: linear-gradient(135deg, rgba(125, 211, 252, 0.18), rgba(125, 211, 252, 0.06));
    border-color: rgba(125, 211, 252, 0.18);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }
`

export const SidebarFooter = styled.div`
  margin-top: auto;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.surfaceMuted};
`

export const FooterTag = styled.span`
  display: inline-flex;
  margin-bottom: 10px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(125, 211, 252, 0.14);
  color: ${({ theme }) => theme.colors.brand};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.84rem;
  line-height: 1.6;
`
