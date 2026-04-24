import { useNavigate } from 'react-router-dom'
import CardCliente from '../../components/CardCliente/CardCliente'
import EmptyState from '../../components/ui/EmptyState'
import LoadingState from '../../components/ui/LoadingState'
import { useClientes } from '../../hooks/useClientes'
import * as S from './styles'

const ClientesListPage = () => {
  const navigate = useNavigate()
  const { clientes, loading, error, reload } = useClientes()

  const totalClientes = clientes.length
  const clientesAtivos = clientes.filter((cliente) => cliente.status === 'ATIVO').length

  return (
    <S.PageSection>
      <S.HeroPanel>
        <S.HeroContent>
          <S.Eyebrow>Painel de relacionamento</S.Eyebrow>
          <S.HeroTitle>
            Clientes centralizados em uma interface escura, clara e pronta para crescer.
          </S.HeroTitle>
          <S.HeroDescription>
            Cards clicaveis, feedback visual suave, responsividade e camada de servico assincrona
            para encaixar o Firestore depois.
          </S.HeroDescription>
        </S.HeroContent>

        <S.MetricGrid>
          <S.MetricCard>
            <S.MetricLabel>Total de clientes</S.MetricLabel>
            <S.MetricValue>{totalClientes}</S.MetricValue>
          </S.MetricCard>
          <S.MetricCard>
            <S.MetricLabel>Status ativo</S.MetricLabel>
            <S.MetricValue>{clientesAtivos}</S.MetricValue>
          </S.MetricCard>
        </S.MetricGrid>
      </S.HeroPanel>

      {loading ? <LoadingState cards={4} /> : null}

      {!loading && error ? (
        <EmptyState
          title="Falha ao carregar clientes"
          description={error}
          actionLabel="Tentar novamente"
          onAction={() => {
            void reload()
          }}
        />
      ) : null}

      {!loading && !error && clientes.length === 0 ? (
        <EmptyState
          title="Nenhum cliente cadastrado"
          description="Comece criando o primeiro cliente para preencher a listagem e testar o fluxo completo."
          actionLabel="Cadastrar cliente"
          onAction={() => navigate('/clientes/novo')}
        />
      ) : null}

      {!loading && !error && clientes.length > 0 ? (
        <S.CardsGrid>
          {clientes.map((cliente) => (
            <CardCliente
              key={cliente.id}
              cliente={cliente}
              onClick={(id) => navigate(`/clientes/${id}`)}
            />
          ))}
        </S.CardsGrid>
      ) : null}
    </S.PageSection>
  )
}

export default ClientesListPage
