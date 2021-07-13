import PropTypes from 'prop-types'
import {useEffect, useState} from "react";
import {synchCol} from '../utils/columnUtils'
import {filterAPIPut} from "../utils/apiHelpers";

function InputField({ label, type="text", field, defaultValue="", filterId }) {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  
  function onChange(e) {
    setValue(e.target.value)
  }

  function onBlur() {
    filterAPIPut(field, value, filterId)
  }

  return (
    <>
      {label && <label htmlFor={field}>{label.text}</label>}
      <input 
        type={type} 
        id={field} 
        value={value} 
        onBlur={onBlur}
        onChange={onChange}
      />
    </>
  )
}

InputField.propTypes = {
  label: PropTypes.object,
  type: PropTypes.string,
  field: PropTypes.string,
  value: PropTypes.string,
}

export default InputField
