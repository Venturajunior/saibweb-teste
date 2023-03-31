import { Link } from 'react-router-dom'
import './styles.css'

import BackButton  from '../../assets/back.png'

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
                <button>
                  <img src={BackButton} alt="" />
                </button>
      </Link>
      <h1>Header</h1>
    </div>
  )
}