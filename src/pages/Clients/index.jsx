import './styles.css';
import { useNavigate } from 'react-router-dom'

import { BsPencilFill } from 'react-icons/bs'
import { FaMinus } from 'react-icons/fa'
import { AiFillPlusCircle } from 'react-icons/ai'

import { Link } from 'react-router-dom';
import { useGetClientList } from '../../contexts/ClientContext'
import Header from '../../components/Header';
import { Loading } from '../../components/Loading';

export default function Clients() {
  const navigate = useNavigate()
  const { clientList, deleteCLient, loading } = useGetClientList()
  
  const handleUpdateCliente = (id) => {
    navigate(`/manageclients?id=${id}`)
  }
  
  return (
    <>
    {loading ? <Loading /> : (
<>

      <Header />
      <div>
        <table>
          <thead className="table-head">
            <tr>
              <th>
                <Link to="/manageclients">
                  <button>
                    <AiFillPlusCircle size={32} />
                  </button>
                </Link>
              </th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Cidade</th>
              <th>UF</th>
              <th>Telefone</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {clientList.map((client) => {
              return (
                <tr key={client.TECL_ID}>
                  <td>
                    <button onClick={() => deleteCLient(client.TECL_ID)}><FaMinus size={32} /></button>
                    <button onClick={() => handleUpdateCliente(client.TECL_ID)}><BsPencilFill size={32} /></button>
                  </td>
                  <td>{client.TECL_NOME}</td>
                  <td>{client.TECL_ENDERECO}</td>
                  <td>{client.TECL_CIDADE}</td>
                  <td>{client.TECL_UF}</td>
                  <td>{client.TECL_TELEFONE}</td>
                  <td>email@email.com</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
</>
    )}
    </>
  );
}
