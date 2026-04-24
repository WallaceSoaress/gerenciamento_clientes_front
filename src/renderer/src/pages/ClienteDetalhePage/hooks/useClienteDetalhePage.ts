import { getClienteById, deleteCliente } from '@renderer/services/firebase/clientes'
import { Cliente } from '@renderer/types/cliente'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const useClienteDetalhePage = () => {
  const navigate = useNavigate()
  const { clienteId } = useParams()
  const [cliente, setCliente] = useState<Cliente | null>(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadCliente = async (): Promise<void> => {
      if (!clienteId) {
        setError('Cliente nao encontrado.')
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)
        const response = await getClienteById(clienteId)

        if (!response) {
          setError('Cliente nao encontrado.')
          return
        }

        setCliente(response)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Nao foi possivel carregar o cliente.')
      } finally {
        setLoading(false)
      }
    }

    void loadCliente()
  }, [clienteId])

  const handleDelete = async (): Promise<void> => {
    if (!cliente || deleting) return

    const canDelete = window.confirm(`Deseja realmente deletar ${cliente.nome}?`)
    if (!canDelete) return

    try {
      setDeleting(true)
      await deleteCliente(cliente.id)
      navigate('/clientes')
    } finally {
      setDeleting(false)
    }
  }
  return { cliente, loading, deleting, error, navigate, handleDelete }
}

export default useClienteDetalhePage
