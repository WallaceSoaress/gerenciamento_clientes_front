import styled from 'styled-components'

export const Shell = styled.div`
  min-height: 100vh;
`

export const Overlay = styled.button<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 20;
  border: 0;
  background: rgba(2, 6, 23, 0.62);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 180ms ease;

  @media (min-width: 961px) {
    display: none;
  }
`

export const MainContent = styled.main`
  min-height: 100vh;
  padding: 24px 20px 36px;

  @media (min-width: 961px) {
    margin-left: 280px;
    padding: 28px 30px 38px;
  }
`
