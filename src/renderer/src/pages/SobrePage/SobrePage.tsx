import { Panel, SectionText, SectionTitle } from '../../components/ui/Panel'
import * as S from './styles'

const SobrePage = () => {
  return (
    <S.Grid>
      <Panel>
        <SectionTitle>Arquitetura pensada para evolucao</SectionTitle>
        <SectionText>
          O renderer foi separado em componentes, paginas, layouts, hooks e services para manter o
          CRUD limpo hoje e sustentavel quando entrarmos com autenticacao, filtros e colecoes reais.
        </SectionText>
      </Panel>

      <Panel>
        <SectionTitle>Camada de dados mockada</SectionTitle>
        <SectionText>
          O service atual usa localStorage com async/await para simular latencia e manter a mesma
          assinatura que usariamos em chamadas ao Firestore.
        </SectionText>
      </Panel>

      <Panel>
        <SectionTitle>Boas praticas aplicadas</SectionTitle>
        <S.List>
          <li>Roteamento declarativo com React Router.</li>
          <li>Layout responsivo com sidebar colapsavel no mobile.</li>
          <li>Componentes reutilizaveis para formulario, botoes e estados vazios.</li>
          <li>Tema escuro com tokens centralizados via styled-components.</li>
        </S.List>
      </Panel>
    </S.Grid>
  )
}

export default SobrePage
