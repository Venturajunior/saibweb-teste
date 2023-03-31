import './styles.css';
import AddButton from '../../assets/plus.png'
import DeleteButton from '../../assets/minus.png'
import EditButton from '../../assets/edit.png'
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

export default function Clients() {
  return (
    <>
    <Header />
    <div>
      <table>
        <thead className="table-head">
          <tr>
            <th>
              <Link to="/manageclients">
                <button>
                  <img src={AddButton} alt="" />
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
          <tr>
            <td>
              <img src={DeleteButton} alt="" />
              <img src={EditButton} alt="" />
            </td>
            <td>Sebastião Júnior - mudei</td>
            <td>Rua não informada22</td>
            <td>Goiânia</td>
            <td>GO</td>
            <td>62981367601</td>
            <td>fulano1@fulano1.com.br</td>
          </tr>
          <tr>
            <td>
              <img src={DeleteButton} alt="" />
              <img src={EditButton} alt="" />
            </td>
            <td>Sebastião Júnior - mudei</td>
            <td>Rua não informada22</td>
            <td>Goiânia</td>
            <td>GO</td>
            <td>62981367601</td>
            <td>fulano1@fulano1.com.br</td>
          </tr>
          <tr>
            <td>
              <img src={DeleteButton} alt="" />
              <img src={EditButton} alt="" />
            </td>
            <td>Sebastião Júnior - mudei</td>
            <td>Rua não informada22</td>
            <td>Goiânia</td>
            <td>GO</td>
            <td>62981367601</td>
            <td>fulano1@fulano1.com.br</td>
          </tr>
          <tr>
            <td>
              <img src={DeleteButton} alt="" />
              <img src={EditButton} alt="" />
            </td>
            <td>Sebastião Júnior - mudei</td>
            <td>Rua não informada22</td>
            <td>Goiânia</td>
            <td>GO</td>
            <td>62981367601</td>
            <td>fulano1@fulano1.com.br</td>
          </tr>

        </tbody>
      </table>
    </div>
    </>
  );
}
