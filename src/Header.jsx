import React from 'react'

const Header = ({title}) => {
  return (
    <header className='Header'>{title}</header>
  )
}

Header. defaultProps = {title: 'Header!!'}
export default Header