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
          <div className='client-list-container'>
            <table>
              <thead className="table-head">
                <tr>
                  <th className='td-icon'>
                    <Link to="/manageclients">
                      <button className='icon-button'>
                        <AiFillPlusCircle size={24} />
                      </button>
                    </Link>
                  </th>
                  <th></th>
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
                      <td className='td-icon'>
                        <button className='icon-button' onClick={() => deleteCLient(client.TECL_ID)}><FaMinus size={24} /></button>
                      </td>
                      <td>
                        <button className='icon-button' onClick={() => handleUpdateCliente(client.TECL_ID)}><BsPencilFill size={24} /></button>
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
