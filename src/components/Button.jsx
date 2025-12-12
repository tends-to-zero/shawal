const Button = ({text, className, children}) => {
  return (
    <div >
      <button className={`hover:scale-110 transition-transform duration-300 rounded-4xl cursor-pointer ${className}`}>
        {text}{children}
      </button>
    </div>
  )
}

export default Button
