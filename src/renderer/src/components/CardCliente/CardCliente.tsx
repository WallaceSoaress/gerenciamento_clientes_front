import type { Cliente } from '../../types/cliente'
import { MailIcon, PhoneIcon } from '../Icons/icons'
import * as S from './styles'

type CardClienteProps = {
  cliente: Cliente
  onClick: (id: string) => void
}

const CardCliente = ({ cliente, onClick }: CardClienteProps) => {
  return (
    <S.CardButton type="button" onClick={() => onClick(cliente.id)}>
      <S.CardGlow aria-hidden="true" />

      <S.CardHeader>
        <S.Avatar>{cliente.nome.slice(0, 2).toUpperCase()}</S.Avatar>
        <div>
          <S.Name>{cliente.nome}</S.Name>
          <S.Role>{cliente.cargo}</S.Role>
        </div>
      </S.CardHeader>

      <S.InfoList>
        <S.InfoItem>
          <MailIcon width={16} height={16} />
          <span>{cliente.email}</span>
        </S.InfoItem>
        <S.InfoItem>
          <PhoneIcon width={16} height={16} />
          <span>{cliente.telefone}</span>
        </S.InfoItem>
      </S.InfoList>

      <S.Footer>
        <S.StatusChip>{cliente.status}</S.StatusChip>
        <S.ViewLabel>Ver detalhes</S.ViewLabel>
      </S.Footer>
    </S.CardButton>
  )
}

export default CardCliente
