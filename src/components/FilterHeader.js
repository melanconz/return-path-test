import React, {Component} from 'react';

class FilterHeader extends Component {
  constructor(props){
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleFilterOptionInputChange = this.handleFilterOptionInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleFilterOptionInputChange(e) {
    this.props.onFilterDropDown(e.target.value);
  }

    render() {
        return (
            <form className="FilterTable-header form" >
                <select
                  className="FilterTable-header dropdownitem"
                  onChange={this.handleFilterOptionInputChange}
                  value={this.props.option}
                  >
                    <option value="Show All">Show All</option>
                    <option value="Home">Home</option>
                    <option value="Inbox">Inbox</option>
                    <option value="Business">Business</option>
                    <option value="Finance">Finance</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Travel">Travel</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Social Networking">Social Networking</option>
                    <option value="News">News</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Education">Education</option>
                    <option value="Jobs">Jobs</option>
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
