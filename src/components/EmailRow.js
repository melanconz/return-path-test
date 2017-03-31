import React, {Component} from 'react';

const folderColors = {
  'Home': '#e6ee9c',
  'Inbox': '#9fa8da',
  'Business': '#b2dfdb',
  'Finance': '#ffccbc',
  'Real Estate': '#cfd8dc',
  'Travel': '#c8e6c9',
  'Entertainment': '#d7ccc8',
  'Social Networking': '#b3e5fc',
  'News': '#ffcdd2',
  'Shopping': '#f8bbd0',
  'Education': '#ffecb3',
  'Jobs': '#ffe0b2'
}

class EmailRow extends Component {
  constructor(props) {
    super(props);
    var folder = this.props.email.folder;
    var borderStyling = {borderRight: 'thick solid ' + folderColors[folder] };
    var organize = (this.props.email.organize ? 'checked' : '');
    var selectDisable = (organize === "checked" ? 'disabled' : '');
    this.state = {
      organize: organize,
      selectDisable: selectDisable,
      folder: folder,
      borderStyling: borderStyling
    }
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleFolderChange = this.handleFolderChange.bind(this);
  }

  handleCheckBoxChange(e) {
    if (this.state.organize === '') {
      this.setState({
        organize: 'checked',
        selectDisable: 'disabled'
      });
    } else {
      this.setState({
        organize: '',
        selectDisable: ''
      });
    }
  }

  handleFolderChange(e) {
    this.setState({
      folder: e.target.value
    });
    var borderStyling = {borderRight: 'thick solid ' + folderColors[e.target.value] };
    this.setState({
      borderStyling: borderStyling
    });
  }


    render() {
      var sender = this.props.email.sender;
      var domain = this.props.email.domain;
      var email = this.props.email.email;
      var borderStyling = this.state.borderStyling;
        return (
        <tr>
          <td className="table-organize">
            <input
              className="checkbox"
              type="checkbox"
              checked={this.state.organize}
              onChange={this.handleCheckBoxChange}
            />
         </td>
         <td className="table-data data">
           {sender}
         </td>
         <td className="table-data data">
           {domain}
         </td>
         <td className="table-data data">
           {email}
         </td>
         <td className="table-data data" style={borderStyling}>
           <select
             className="dropdownitem"
             value={this.state.folder}
             disabled={this.state.selectDisable}
             onChange={this.handleFolderChange}
             >
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
         </td>
       </tr>
     );
  }
}

export default EmailRow;
