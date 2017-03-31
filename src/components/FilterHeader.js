import React, {Component} from 'react';

class FilterHeader extends Component {
  constructor(props){
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

    render() {
        console.log(this.props.filterText);
        return (
            <form className="FilterTable-header form">
                <select className="FilterTable-header dropdownitem">
                    <option value="all">Show All</option>
                </select>
                <input
                  className="FilterTable-header searchitem"
                  type="text"
                  placeholder="Search for a sender..."
                  value={this.props.filterText}
                  onChange={this.handleFilterTextInputChange}
                />
            </form>
        );
    }
}

export default FilterHeader;
