import {useState} from 'react';
import Autosuggest from 'react-autosuggest';
import theme from '../styles/components/AutoSuggestInput.module.css'

function SuggestionItem({ name }) {
  return (
    <div className="text-xl text-red-500 cursor-pointer">
    {name}
    </div>
  )

}


// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div className="text-xl text-red-500 cursor-pointer">
    {suggestion.name}
    {" "}
    {suggestion.year}
  </div>
);

export default function AutoSuggestInput({onItemSelect, suggestionData}) {
  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState([])


  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : suggestionData.filter(item =>
      item.name.toLowerCase().includes(inputValue)
    );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = suggestion => suggestion.name;

  function onChange(e, { newValue }) {
    setValue(newValue)
  }

  function onSuggestionsFetchRequested({ value }) {
    setSuggestions(getSuggestions(value))
  }

  function onSuggestionsClearRequested() {
    setSuggestions([])
  }

  function onKeyDown(e) {
    // Handle enter key down in input, without the user having
    // explicitly selected the item manually (i.e. they typed the
    // whole value)
    if (e.keyCode === 13) {
      const [suggestion] = suggestions.filter(
        x => getSuggestionValue(x).toLowerCase() === value.toLowerCase()
      )
      if (suggestion) {
        onSuggestionSelected(e, { suggestion })
      }
    }
  }

  function onSuggestionSelected(
    event, { 
      suggestion, 
      suggestionValue, 
      suggestionIndex, 
      sectionIndex, 
      method 
    }
  ) {
    // Enter is handled in onKeyDown.
    if (method !== "enter") {
      onItemSelect(suggestion)
    }
  }

  const inputProps = {
    placeholder: "Type a language.",
    value: value,
    onChange: onChange,
    onKeyDown: onKeyDown,
  }

  return (
    <Autosuggest 
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={SuggestionItem}
      inputProps={inputProps}
      theme={theme}
      onSuggestionSelected={onSuggestionSelected}
    />
  )
}
