import React, {Component} from 'react';
import FilterHeader from './FilterHeader.js';
import EmailTable from './EmailTable.js';

class FilterableTable extends Component {
    constructor(props) {
      super(props);
      this.state = {filterText: ''}
      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }

    handleFilterTextInput(filterText) {
      this.setState({
        filterText: filterText
      });
    }

    render() {
        return (
            <div>
              <div className="FilterTable-header">
                <FilterHeader
                  filterText={this.state.filterText}
                  onFilterTextInput={this.handleFilterTextInput}
                />
              </div>
              <div className="FilterTable-emailtable">
                <EmailTable
                  emails={this.props.emails}
                  filterText={this.state.filterText}
                />
              </div>
            </div>
        );
    }
}

export default FilterableTable;
