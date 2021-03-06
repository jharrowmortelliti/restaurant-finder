import React from 'react';
import Geosuggest from 'react-geosuggest';
require("./styles/geosuggest.css");

export default class Searchbox extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Geosuggest
        placeholder="Enter location"
        autoActivateFirstSuggest={false}
        onSuggestSelect={this.onSuggestSelect.bind(this)} />
    );
  }

  onSuggestSelect(suggest){
    this.props.onSubmit(suggest)
  } 
}
