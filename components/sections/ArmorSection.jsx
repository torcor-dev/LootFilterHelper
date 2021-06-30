import ButtonRow from "../ButtonRow";
import Section from "./Section";
import ToggleButton from "../ToggleButton";

export default function ArmorSection() {
  const tierStyles = "text-xl font-extrabold"

  return (
    <Section name="Armor Bases">
        <ButtonRow>
          <ToggleButton name="Helmets" icon="Helmets" /> 
          <ToggleButton name="Boots" icon="Boots"/> 
          <ToggleButton name="Gloves" icon="Gloves"/> 
          <ToggleButton name="Body Armour" icon="Body Armour" /> 
          <ToggleButton name="Shields" icon="Shields"/> 
        </ButtonRow>
        <ButtonRow styles="mt-5">
          <div className="w-full">
            <h2 className="text-center text-lg font-bold">AR</h2>
          </div>
          <div className="w-full">
            <h2 className="text-center text-lg font-bold">EVA</h2>
          </div>
          <div className="w-full">
            <h2 className="text-center text-lg font-bold">ES</h2>
          </div>
        </ButtonRow>
        <ButtonRow>
          <ToggleButton styles={tierStyles} name="T1" /> 
          <ToggleButton styles={tierStyles} name="T1" /> 
          <ToggleButton styles={tierStyles} name="T1" /> 
        </ButtonRow>
        <ButtonRow styles="">
          <ToggleButton styles={tierStyles} name="T2" /> 
          <ToggleButton styles={tierStyles} name="T2" /> 
          <ToggleButton styles={tierStyles} name="T2" /> 
        </ButtonRow>
        <ButtonRow styles="">
          <ToggleButton styles={tierStyles} name="T3" /> 
          <ToggleButton styles={tierStyles} name="T3" /> 
          <ToggleButton styles={tierStyles} name="T3" /> 
        </ButtonRow>
        <ButtonRow styles="">
          <ToggleButton styles={tierStyles} name="All" /> 
          <ToggleButton styles={tierStyles} name="All" /> 
          <ToggleButton styles={tierStyles} name="All" /> 
        </ButtonRow>
    </Section>
  )
}
