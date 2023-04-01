import { Link } from 'react-router-dom'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import './styles.css'

export default function Header() {
  return (
    <div className="component-header-container">
      <Link to="/">
        <button>
          <IoChevronBackCircleOutline size={32} />
        </button>
      </Link>
      <h3>Header</h3>
    </div>
  )
}