import { Button } from '@renderer/components/ui/Button'
import { InputField, TextAreaField } from '@renderer/components/ui/FormField'
import { Panel, SectionText, SectionTitle } from '@renderer/components/ui/Panel'
import useCadastrarClientePage from './hooks/useCadastrarClientePage'
import * as S from './styles'

const CadastrarClientePage = () => {
  const { values, errors, submitting, submitError, navigate, handleChange, handleSubmit } =
    useCadastrarClientePage()

  return (
    <S.PageGrid>
      <Panel as="form" onSubmit={handleSubmit}>
        <SectionTitle>Novo cliente</SectionTitle>
        <SectionText>
          Os campos principais seguem o fluxo do layout e a estrutura fica pronta para migrar de
          localStorage para Firestore depois.
        </SectionText>

        <S.FieldsGrid>
          <InputField
            label="Nome"
            placeholder="Ex.: Mariana Costa"
            value={values.nome}
            onChange={handleChange('nome')}
            error={errors.nome}
          />

          <InputField
            label="Email"
            type="email"
            placeholder="mariana@empresa.com"
            value={values.email}
            onChange={handleChange('email')}
            error={errors.email}
          />

          <InputField
            label="Cargo"
            placeholder="Coordenadora de Atendimento"
            value={values.cargo}
            onChange={handleChange('cargo')}
            error={errors.cargo}
          />

          <InputField
            label="Telefone"
            hint="Opcional"
            placeholder="(85) 99999-0000"
            value={values.telefone}
            onChange={handleChange('telefone')}
          />
        </S.FieldsGrid>

        <TextAreaField
          label="Endereco"
          placeholder="Rua, numero, bairro, cidade"
          value={values.endereco}
          onChange={handleChange('endereco')}
          error={errors.endereco}
        />

        {submitError ? <S.SubmitError>{submitError}</S.SubmitError> : null}

        <S.Actions>
          <Button type="button" variant="secondary" onClick={() => navigate('/clientes')}>
            Cancelar
          </Button>
          <Button type="submit" disabled={submitting}>
            {submitting ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
        </S.Actions>
      </Panel>

      <S.AsideCard>
        <S.AsideLabel>Preview de dados</S.AsideLabel>
        <S.AsideTitle>Cadastro com foco em consistencia</S.AsideTitle>
        <S.AsideText>
          Campos principais, validacao simples e persistencia assicrona deixam a troca por Firestore
          direta no service.
        </S.AsideText>

        <S.PreviewCard>
          <S.PreviewName>{values.nome || 'Cliente sem nome'}</S.PreviewName>
          <S.PreviewMeta>{values.cargo || 'Cargo do cliente'}</S.PreviewMeta>
          <S.PreviewLine>{values.email || 'email@empresa.com'}</S.PreviewLine>
          <S.PreviewLine>{values.telefone || '(00) 00000-0000'}</S.PreviewLine>
          <S.PreviewAddress>
            {values.endereco || 'Endereco do cliente aparece aqui.'}
          </S.PreviewAddress>
        </S.PreviewCard>
      </S.AsideCard>
    </S.PageGrid>
  )
}

export default CadastrarClientePage
