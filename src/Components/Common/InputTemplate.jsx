import React from 'react'

const InputTemplate = ({className, onChange, value, placeholder, type, onFocus, onBlur, onClick, style, readOnly}) => {
  return (
    <input readOnly={readOnly} style={style} onClick={onClick} onFocus={onFocus} onBlur={onBlur} type={type} onChange={onChange} value={value} className={className} placeholder={placeholder} />
  )
}

export default InputTemplate