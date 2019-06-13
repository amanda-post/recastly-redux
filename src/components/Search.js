import React from 'react';

 
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }
  

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit() {
    this.props.handleSearchInputChange(this.state.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
