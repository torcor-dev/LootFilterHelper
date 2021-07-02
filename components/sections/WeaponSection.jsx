import Section from "./Section"
import ToggleButton from "../ToggleButton"
import {useEffect, useState} from "react"
function WeaponSection() {
  const [btnName, setBtnName] = useState("W1")
  const [btnStyle, setBtnStyle] = useState(Array("text-xl", "text-red-500") )
  const [btnStates, setBtnStates] = useState({
    btn1: {
      name: "Button 1",
      style: Array("text-xl", "text-red-500")
    },
    btn2: {
      name: "Button 2",
      style: Array("text-xl", "text-red-500")
    },
    btn3: {
      name: "Button 3",
      style: Array("text-xl", "text-red-500")
    },
  })

  function updateName() {
    btnName === "W1" ? setBtnName("W2") : setBtnName("W1")
    if (btnStyle[1] === "text-red-500") {
      setBtnStyle(Array("text-xl", "text-blue-500"))
    } else {
       setBtnStyle(Array("text-xl", "text-red-500"))
    }
  }
  function updateButtons(btn) {
    if(btn === "Button 1") {
      setBtnStates({
        btn1: {
          name: "Button 1",
          style: Array("text-xl", "text-blue-500")
        },
        btn2: {
          name: "Button 2",
          style: Array("text-xl", "text-yellow-500")
        },
        btn3: {
          name: "Button 3",
          style: Array("text-xl", "text-green-500")
        },
      })
    } 
    if (btn === "Button 2") {
      setBtnStates({
        btn1: {
          name: "Button 1",
          style: Array("text-xl", "text-blue-500")
        },
        btn2: {
          name: "New Button 2",
          style: Array("text-xl", "text-yellow-500")
        },
        btn3: {
          name: "Button 3",
          style: Array("text-xl", "text-green-500")
        },
      })
    } 
    if (btn === "Button 3") {
      const newStateObj = Object.assign({}, btnStates)
      newStateObj.btn3.name = "Attribute Change"
      setBtnStates(newStateObj)

    }

  }

  return (
    <Section name="Weapons">
      <ToggleButton 
        name={btnStates.btn1.name}
        onClick={updateButtons}
        styles={btnStates.btn1.style.join(" ")}
      />
      <ToggleButton 
        name={btnStates.btn2.name}
        onClick={updateButtons}
        styles={btnStates.btn2.style.join(" ")}
      />
      <ToggleButton 
        name={btnStates.btn3.name}
        onClick={updateButtons}
        styles={btnStates.btn3.style.join(" ")}
      />
    </Section>
  )
}

export default WeaponSection
