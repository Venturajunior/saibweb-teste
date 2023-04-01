import './styles.css'

export function Input({ name, label, className, error, inputProps }) {
  const classname = `input-component ${className ? className : ''}`
  
  return (
    <div className={classname}>
      <label htmlFor={name}>{label}</label>
      <input name={name} type="text" {...inputProps} />
      {!!error && <span className='component-input-error'>{error}</span>}
    </div>
  )
}