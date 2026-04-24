import { useEffect, useState } from 'react'
import type { Cliente } from '../types/cliente'
import { getClientes } from '../services/firebase/clientes'

export const useClientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadClientes = async (): Promise<void> => {
    try {
      setLoading(true)
      setError(null)
      const response = await getClientes()
      setClientes(response)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Nao foi possivel carregar os clientes.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      void loadClientes()
    }, 0)

    return () => window.clearTimeout(timeoutId)
  }, [])

  return {
    clientes,
    loading,
    error,
    reload: loadClientes
  }
}
