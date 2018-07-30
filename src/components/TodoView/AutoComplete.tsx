import * as React from 'react';
import * as Autosuggest from 'react-autosuggest';
import {Todo} from '../../stores/ApplicationStore';
import './AutoCompleteStyle.css';

interface AutocompleteProps {
  todos: Todo[]
}

interface AutocompleteState {
  value: string,
  suggestions: Todo[] 
}

export class AutoComplete extends React.Component<AutocompleteProps,AutocompleteState>{
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };
  }

  getSuggestions = value => {
    const {todos} = this.props;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : todos.filter(lang =>
      lang.disc.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  getSuggestionValue = suggestion => suggestion.disc;

  renderSuggestion = suggestion => (
    <div>
      {suggestion.disc}
    </div>
  );

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const inputProps = {
      placeholder: 'Test Autocomplete Component',
      value: this.state.value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}