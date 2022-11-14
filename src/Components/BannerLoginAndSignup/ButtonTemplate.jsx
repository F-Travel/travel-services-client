import React from 'react'

const ButtonTemplate = ({className, onClick, disable, children}) => {
  return (
    <button className={className} onClick={onClick} disabled={disable}>{children}</button>
  ) 
}

export default ButtonTemplate