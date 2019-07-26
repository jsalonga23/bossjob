import React, { Component } from 'react';

class Search extends Component {

    handleSearch = e => {
        console.log(e.target.value);

    }

  render() {


    return (
        <div>
          <input type="text" onChange={this.handleSearch} />
        </div>
    );
  }
}

export default Search;
