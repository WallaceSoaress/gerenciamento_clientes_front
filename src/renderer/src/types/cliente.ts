export type ClienteStatus = 'ATIVO'

export type Cliente = {
  id: string
  nome: string
  email: string
  telefone: string
  endereco: string
  cargo: string
  status: ClienteStatus
}

export type ClienteFormValues = {
  nome: string
  endereco: string
  email: string
  cargo: string
  telefone?: string
}
