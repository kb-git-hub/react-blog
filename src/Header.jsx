import { Link } from 'react-router-dom'

const Header = ({title}) => {
  return (
    <header className='Header'>
      <Link to='/'>{title}</Link>
      </header>
  )
}

export default Header