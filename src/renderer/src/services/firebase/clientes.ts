import type { Cliente, ClienteFormValues } from '../../types/cliente'

const STORAGE_KEY = 'devclinicas:clientes'

const mockClientes: Cliente[] = [
  {
    id: 'cli-001',
    nome: 'Mariana Costa',
    email: 'mariana.costa@lumina.com',
    telefone: '(85) 98871-1452',
    endereco: 'Rua Tiburcio Cavalcante, 318 - Meireles, Fortaleza',
    cargo: 'Coordenadora de Atendimento',
    status: 'ATIVO'
  },
  {
    id: 'cli-002',
    nome: 'Rafael Nogueira',
    email: 'rafael.nogueira@nexus.com',
    telefone: '(11) 98213-6654',
    endereco: 'Avenida Paulista, 1811 - Bela Vista, Sao Paulo',
    cargo: 'Gerente Comercial',
    status: 'ATIVO'
  },
  {
    id: 'cli-003',
    nome: 'Camila Bezerra',
    email: 'camila.bezerra@aurora.com',
    telefone: '(21) 97341-2290',
    endereco: 'Rua Voluntarios da Patria, 440 - Botafogo, Rio de Janeiro',
    cargo: 'Especialista de Produto',
    status: 'ATIVO'
  }
]

const delay = (ms = 320): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

const generateId = (): string => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }

  return `cli-${Date.now()}`
}

const readClientes = (): Cliente[] => {
  if (typeof window === 'undefined') return mockClientes

  const storedValue = window.localStorage.getItem(STORAGE_KEY)

  if (!storedValue) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mockClientes))
    return mockClientes
  }

  try {
    return JSON.parse(storedValue) as Cliente[]
  } catch {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mockClientes))
    return mockClientes
  }
}

const writeClientes = (clientes: Cliente[]): void => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(clientes))
}

const buildPhoneFallback = (nome: string): string => {
  const seed = nome.replace(/\D/g, '').slice(0, 8).padEnd(8, '0')

  return `(85) 9${seed.slice(0, 4)}-${seed.slice(4, 8)}`
}

export const getClientes = async (): Promise<Cliente[]> => {
  await delay()
  return readClientes()
}

export const getClienteById = async (clienteId: string): Promise<Cliente | null> => {
  await delay(180)
  const clientes = readClientes()
  return clientes.find((cliente) => cliente.id === clienteId) ?? null
}

export const addCliente = async (payload: ClienteFormValues): Promise<Cliente> => {
  await delay()

  const clientes = readClientes()
  const novoCliente: Cliente = {
    id: generateId(),
    nome: payload.nome.trim(),
    email: payload.email.trim().toLowerCase(),
    telefone: payload.telefone?.trim() || buildPhoneFallback(payload.nome),
    endereco: payload.endereco.trim(),
    cargo: payload.cargo.trim(),
    status: 'ATIVO'
  }

  writeClientes([novoCliente, ...clientes])
  return novoCliente
}

export const deleteCliente = async (clienteId: string): Promise<void> => {
  await delay(250)
  const clientes = readClientes()
  writeClientes(clientes.filter((cliente) => cliente.id !== clienteId))
}
