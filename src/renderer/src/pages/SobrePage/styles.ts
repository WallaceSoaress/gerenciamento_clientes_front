import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  gap: 22px;
  margin-top: 24px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const List = styled.ul`
  margin-top: 16px;
  padding-left: 18px !important;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
`
