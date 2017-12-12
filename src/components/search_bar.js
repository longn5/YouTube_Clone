import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {input_val: 'Search'};
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input_val}
          onChange={event => this.setState({input_val: event.target.value})}/>
      </div>
    );
  }
}

export default SearchBar;
