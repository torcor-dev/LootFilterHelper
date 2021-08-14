import PropTypes from 'prop-types'
import {useEffect, useMemo, useState} from "react";
import {synchCol} from '../utils/columnUtils'
import {filterAPIPut} from "../utils/apiHelpers";
import { uniqueId } from 'lodash';

function InputField({ 
  label, 
  type="text", 
  title="",
  field, 
  defaultValue="", 
  filterId, 
  className, 
  labelClassName="",
  apiOptions=null,
  setExternalState=null,
  min=0,
  max=100,
}) {
  const [previousValue, setPreviousValue] = useState(defaultValue)
  const [value, setValue] = useState(defaultValue)
  const prefix = label ? label : "input_"
  const [id] = useState(() => uniqueId(prefix))
  // Warning: Prop `id` did not match. Server: "input16" Client: "input2"

  //useEffect(() => {
  //  if (value === "") {
  //    setValue(defaultValue);
  //  }
  //}, [value, defaultValue]);
  
  function onChange(e) {
    if (type === "number" 
      && (
        e.target.value > max 
        || e.target.value < min 
        && e.target.value !== ""
      )
    ) {
      return
    }
    if (type === "number" && e.target.value !== "") {
      setValue(Math.floor(e.target.value))
      return
    }
    setValue(e.target.value)
  }

  function onBlur() {
    let v = value
    if (type === "number" && v === "") {
      setValue(min)
      v = min
    }
    if (setExternalState) {
      setExternalState(v)
    }
    if (v !== previousValue) {
      filterAPIPut(field, v, filterId, apiOptions)
      setPreviousValue(v)
    }
  }

  function onFocus(e) {
    e.target.select()
  }

  return (
    <>
      {label && 
        <label 
          className={labelClassName} 
          htmlFor={id}
          title={title}
        >
          {label}
        </label>
      }
      <input 
        type={type} 
        title={title}
        id={id} 
        value={value} 
        onBlur={onBlur}
        onChange={onChange}
        className={className ? className : ""}
        onFocus={onFocus}
      />
    </>
  )
}

InputField.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  field: PropTypes.string,
  defaultValue: PropTypes.any,
  filterId: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  apiOptions: PropTypes.object,
  setExternalState: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
}

export default InputField
