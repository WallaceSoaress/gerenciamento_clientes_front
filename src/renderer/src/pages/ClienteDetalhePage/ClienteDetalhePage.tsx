import { Button } from '@renderer/components/ui/Button'
import { Panel, SectionTitle, SectionText } from '@renderer/components/ui/Panel'
import EmptyState from '@renderer/components/ui/EmptyState'
import StatusBadge from '@renderer/components/ui/StatusBadge'
import useClienteDetalhePage from './hooks/useClienteDetalhePage'
import * as S from './styles'
import {
  ArrowLeftIcon,
  TrashIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  BriefcaseIcon
} from '@renderer/components/Icons/icons'

const ClienteDetalhePage = () => {
  const { cliente, loading, deleting, error, navigate, handleDelete } = useClienteDetalhePage()

  if (loading) {
    return (
      <S.SingleColumn>
        <Panel>
          <SectionTitle>Carregando cliente...</SectionTitle>
          <SectionText>Buscando dados completos para renderizar a ficha do cliente.</SectionText>
        </Panel>
      </S.SingleColumn>
    )
  }

  if (error || !cliente) {
    return (
      <S.SingleColumn>
        <EmptyState
          title="Cliente indisponivel"
          description={error ?? 'Nao encontramos os dados desse cliente no armazenamento local.'}
          actionLabel="Voltar para a lista"
          onAction={() => navigate('/clientes')}
        />
      </S.SingleColumn>
    )
  }

  return (
    <S.PageGrid>
      <Panel>
        <S.TopActions>
          <Button type="button" variant="ghost" onClick={() => navigate('/clientes')}>
            <ArrowLeftIcon width={16} height={16} />
            Voltar
          </Button>
          <Button type="button" variant="danger" onClick={handleDelete} disabled={deleting}>
            <TrashIcon width={16} height={16} />
            {deleting ? 'Deletando...' : 'Deletar cliente'}
          </Button>
        </S.TopActions>

        <S.HeroCard>
          <S.HeroMeta>
            <S.Avatar>{cliente.nome.slice(0, 2).toUpperCase()}</S.Avatar>
            <div>
              <S.ClientName>{cliente.nome}</S.ClientName>
              <S.ClientRole>{cliente.cargo}</S.ClientRole>
            </div>
          </S.HeroMeta>
          <StatusBadge status={cliente.status} />
        </S.HeroCard>

        <S.DetailsGrid>
          <S.InfoCard>
            <S.IconShell>
              <MailIcon width={18} height={18} />
            </S.IconShell>
            <div>
              <S.InfoLabel>Email</S.InfoLabel>
              <S.InfoValue>{cliente.email}</S.InfoValue>
            </div>
          </S.InfoCard>

          <S.InfoCard>
            <S.IconShell>
              <PhoneIcon width={18} height={18} />
            </S.IconShell>
            <div>
              <S.InfoLabel>Telefone</S.InfoLabel>
              <S.InfoValue>{cliente.telefone}</S.InfoValue>
            </div>
          </S.InfoCard>

          <S.InfoCard>
            <S.IconShell>
              <MapPinIcon width={18} height={18} />
            </S.IconShell>
            <div>
              <S.InfoLabel>Endereco</S.InfoLabel>
              <S.InfoValue>{cliente.endereco}</S.InfoValue>
            </div>
          </S.InfoCard>

          <S.InfoCard>
            <S.IconShell>
              <BriefcaseIcon width={18} height={18} />
            </S.IconShell>
            <div>
              <S.InfoLabel>Cargo</S.InfoLabel>
              <S.InfoValue>{cliente.cargo}</S.InfoValue>
            </div>
          </S.InfoCard>
        </S.DetailsGrid>
      </Panel>

      <Panel>
        <SectionTitle>Resumo operacional</SectionTitle>
        <SectionText>
          A tela foi preparada para evoluir com historico, anotações e blocos adicionais vindos do
          Firestore sem precisar mudar a estrutura do layout.
        </SectionText>

        <S.SummaryStack>
          <S.SummaryItem>
            <S.SummaryLabel>Status atual</S.SummaryLabel>
            <S.SummaryValue>{cliente.status}</S.SummaryValue>
          </S.SummaryItem>
          <S.SummaryItem>
            <S.SummaryLabel>Canal principal</S.SummaryLabel>
            <S.SummaryValue>Email</S.SummaryValue>
          </S.SummaryItem>
          <S.SummaryItem>
            <S.SummaryLabel>Persistencia</S.SummaryLabel>
            <S.SummaryValue>Mock local assincrono</S.SummaryValue>
          </S.SummaryItem>
        </S.SummaryStack>
      </Panel>
    </S.PageGrid>
  )
}

export default ClienteDetalhePage
