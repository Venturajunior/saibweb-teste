import { Link } from 'react-router-dom'
import { IoChevronBackCircle } from 'react-icons/io5'
import './styles.css'

export default function Header({ title = "Teste ReactJs - SaibWeb" }) {
  return (
    <div className="component-header-container">
      <Link to="/">
        <button>
          <IoChevronBackCircle size={32} />
        </button>
      </Link>
      <h3>{title}</h3>
    </div>
  )
}