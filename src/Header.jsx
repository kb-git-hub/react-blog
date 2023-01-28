import { Link } from 'react-router-dom'
import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'
import { useContext } from 'react'
import useWindowSize from './hooks/useWindowSize'

const Header = ({title}) => {
  const {width} = useWindowSize()
  return (
    <header className='Header'>
      <Link to='/'>{title}</Link>
      {width < 609 ? <FaMobileAlt /> 
        : width < 992 ? <FaTabletAlt /> 
            : <FaLaptop /> 
      }

      </header>
  )
}

export default Header