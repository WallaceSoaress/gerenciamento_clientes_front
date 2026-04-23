import { initialValues } from '@renderer/constants/initialValues'
import { addCliente } from '@renderer/services/firebase/clientes'
import { ClienteFormValues } from '@renderer/types/cliente'
import { emailPattern } from '@renderer/utils/utils'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type FormErrors = Partial<Record<keyof ClienteFormValues, string>>

const useCadastrarClientePage = (): {
  values: ClienteFormValues
  errors: FormErrors
  submitting: boolean
  submitError: string | null
  navigate: ReturnType<typeof useNavigate>
  handleChange: (
    field: keyof ClienteFormValues
  ) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
} => {
  const navigate = useNavigate()
  const [values, setValues] = useState<ClienteFormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange =
    (field: keyof ClienteFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      setErrors((current) => ({ ...current, [field]: undefined }))
    }

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {}

    if (!values.nome.trim()) nextErrors.nome = 'Informe o nome do cliente.'
    if (!values.endereco.trim()) nextErrors.endereco = 'Informe o endereco.'
    if (!values.email.trim()) nextErrors.email = 'Informe o email.'
    if (values.email.trim() && !emailPattern.test(values.email)) {
      nextErrors.email = 'Use um email valido.'
    }
    if (!values.cargo.trim()) nextErrors.cargo = 'Informe o cargo.'

    return nextErrors
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      setSubmitting(true)
      setSubmitError(null)
      const createdCliente = await addCliente(values)
      navigate(`/clientes/${createdCliente.id}`)
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Nao foi possivel cadastrar o cliente.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return { values, errors, submitting, submitError, navigate, handleChange, handleSubmit }
}

export default useCadastrarClientePage
