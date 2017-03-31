import React, {Component} from 'react';
import FilterHeader from './FilterHeader.js';
import EmailTable from './EmailTable.js';

class FilterableTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        option: 'Show All'
      }
      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
      this.handleFilterDropDown = this.handleFilterDropDown.bind(this);
    }

    handleFilterTextInput(filterText) {
      this.setState({
        filterText: filterText
      });
    }

    handleFilterDropDown(option) {
      this.setState({
        option: option
      });
    }

    render() {
        return (
            <div>
              <div className="FilterTable-header">
                <FilterHeader
                  filterText={this.state.filterText}
                  onFilterTextInput={this.handleFilterTextInput}
                  onFilterDropDown={this.handleFilterDropDown}
                />
              </div>
              <div className="FilterTable-emailtable">
                <EmailTable
                  emails={this.props.emails}
                  filterText={this.state.filterText}
                  option={this.state.option}
                />
              </div>
            </div>
        );
    }
}

export default FilterableTable;
