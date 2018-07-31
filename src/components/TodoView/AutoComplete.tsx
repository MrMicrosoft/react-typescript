import * as React from 'react';
import * as Autosuggest from 'react-autosuggest';
import TextInput from 'mineral-ui/TextInput';
import {FormField} from 'mineral-ui/Form'
import './AutoCompleteStyle.css';

interface AutocompleteProps {
  source: any[],
  value: string,
  onChange: (event: any, obj: any)=>void,
  getSuggestions: (value: string, source: any)=>any[],
  getFormatedString: (value: any)=>string
}

interface AutocompleteState {
  suggestions: any[]
}

export class AutoComplete extends React.Component<AutocompleteProps,AutocompleteState>{
  constructor(props) {
    super(props);
    this.state = {suggestions: []}
  }

  renderSuggestion = suggestion => (
    <div>
      {this.props.getFormatedString(suggestion)}
    </div>
  );

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.props.getSuggestions(value, this.props.source)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderInputComponent = inputProps => {
    return (
      <FormField label="Test">
        <TextInput {...inputProps}/>
      </FormField>
    )
  }

  render() {
    const {value, onChange} = this.props;

    const inputProps = {
      value,
      onChange
    };

    return (
      <Autosuggest
        renderInputComponent={this.renderInputComponent}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.props.getFormatedString}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}