import './styles.css'

export function Button({ children, ...rest }) {
  return (
    <button className="button-component"{...rest}>{children}</button>
  )
}