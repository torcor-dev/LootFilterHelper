import ToggleButton, {buttonChoices} from "./ToggleButton";

function makeButtons(props) {
  const buttons = [];
  for (let i = 0; i < props.tiers; i++) {
    buttons.push(
      <ToggleButton 
        name={`T${i+1}`} 
        styles="text-xl font-bold" 
        key={`${props.name}_T${i+1}`} 
        onClick={props.handleClick}
      />)
  }
  buttons.push(
    <ToggleButton 
      name="All" 
      styles="text-xl font-bold" 
      key={`${props.name}_All`} 
    />)  
  return buttons
}

export default function TierColumn(props) {
  return (
    <div id={`${props.name}_column`} className="w-full">
      <h2 className="text-center text-lg font-bold">{props.heading}</h2>
      {makeButtons(props)}
    </div>

  )
}
