import { createContext, useEffect, useState, useContext, useCallback } from "react";
import { api } from "../lib/axios";

export const ClientsContext = createContext({})

export function ClientsProvider({ children }) {
  const [clientList, setClientList] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchClients = useCallback(async () => {
    try {
      setLoading(true)
      const response = await api.get('/api/v1/teste/clientes')
      const clientsList = response.data.data || [];
      setClientList(() => clientsList)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }, []);


  const deleteCLient = useCallback(async (id) => {
    try {
      setLoading(true)
      await api.delete(`/api/v1/teste/cliente/${id}`)
      await fetchClients();
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }

  }, [fetchClients])

  const createClient = useCallback(
    async (data, onSuccess) => {
      try {
        setLoading(true)
        const { TECL_NOME, TECL_ENDERECO, TECL_CIDADE, TECL_UF, TECL_TELEFONE } = data

        const response = await api.post('/api/v1/teste/cliente', {
          TECL_NOME,
          TECL_ENDERECO,
          TECL_CIDADE,
          TECL_UF,
          TECL_TELEFONE,
        })
        setClientList((state) => [response.data.data, ...state])
        setLoading(false)
        if (onSuccess) onSuccess()
      } catch (error) {
        setLoading(false)
      } 
    },
    [],
  )

  const getClientById = useCallback(async (id) => {
    try {
      setLoading(true)
      const response = await api.get(`/api/v1/teste/cliente/${id}`)

      return response.data.data[0]
    } catch (error) {
      return false
    } finally {      
      setLoading(false)
    }
  },
    []
  )
  const updateClientById = useCallback(
    async (data, onSuccess) => {
      try {
        setLoading(true)
        const { TECL_ID, TECL_NOME, TECL_ENDERECO, TECL_CIDADE, TECL_UF, TECL_TELEFONE } = data

        const response = await api.put('/api/v1/teste/cliente', {
          TECL_ID,
          TECL_NOME,
          TECL_ENDERECO,
          TECL_CIDADE,
          TECL_UF,
          TECL_TELEFONE,
        })
        setClientList((state) => state.map(client => client.TECL_ID === TECL_ID ? response.data.data : client))
        setLoading(false)
        console.log("oh eu aqui")
        if (onSuccess) onSuccess()
      } catch (error) {
        setLoading(false)
      } 
    },
    [],
  )

  useEffect(() => {
    fetchClients();
  }, [fetchClients])


  return (
    <ClientsContext.Provider
    value={{
      clientList,
      deleteCLient,
      createClient,
      getClientById,
      updateClientById,
      loading,
      }}>
      {children}
    </ClientsContext.Provider>
  )
}

function useGetClientList() {
  const context = useContext(ClientsContext);
  return context;
}

export { useGetClientList };
