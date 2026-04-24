import { useNavigate } from 'react-router-dom'
import EmptyState from '../../components/ui/EmptyState'
import * as S from './styles'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <EmptyState
        title="Pagina nao encontrada"
        description="A rota solicitada nao existe neste painel. Volte para a listagem de clientes para continuar."
        actionLabel="Ir para clientes"
        onAction={() => navigate('/clientes')}
      />
    </S.Wrapper>
  )
}

export default NotFoundPage
