import * as React from "react";
import * as Autosuggest from "react-autosuggest";

import {Todo} from "../../stores/ApplicationStore";

import {FormField} from "mineral-ui/Form";
import TextInput from "mineral-ui/TextInput";
import "./AutoCompleteStyle.css";

interface IAutocompleteProps {
  source: any[];
  value: string;
  onChange: (event: any, obj: any) => void;
  getSuggestions: (value: string, source: any) => any[];
  getFormatedString: (value: any) => string;
}

interface IAutocompleteState {
  suggestions: any[];
}

export class AutoComplete extends React.Component<IAutocompleteProps, IAutocompleteState> {
  constructor(props) {
    super(props);
    this.state = {suggestions: []};
  }

  public render() {
    const {value, onChange} = this.props;

    const inputProps = {
      onChange,
      value,
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

  private renderSuggestion = (suggestion) => (
    <div>
      {this.props.getFormatedString(suggestion)}
    </div>
  )

  private onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.props.getSuggestions(value, this.props.source),
    });
  }

  private onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  }

  private renderInputComponent = (inputProps) => {
    return (
      <FormField label="Test">
        <TextInput {...inputProps}/>
      </FormField>
    );
  }
}
