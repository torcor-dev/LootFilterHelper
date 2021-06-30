import icons from "../styles/icons"

export default function Icon(props) {
  return (
    <svg 
      className="icon"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg" >
      {icons[props.type] ? icons[props.type] : icons.bug }
    </svg>
  )
}
