import styled from 'styled-components'
import type { ClienteStatus } from '../../types/cliente'

type StatusBadgeProps = {
  status: ClienteStatus
}

const StatusBadge = ({ status }: StatusBadgeProps): React.JSX.Element => {
  return <Badge>{status}</Badge>
}

const Badge = styled.span`
  display: inline-flex;
  padding: 9px 13px;
  border-radius: 999px;
  background: rgba(74, 222, 128, 0.13);
  color: ${({ theme }) => theme.colors.success};
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
`

export default StatusBadge
