import React, {Component} from 'react';
import EmailRow from './EmailRow.js';

class EmailTable extends Component {

  render() {
    var rows = [];
    var filterText = this.props.filterText.toUpperCase();
    var filterOption = this.props.option;
    this.props.emails.forEach((email) => {
      var sender = email.sender.toUpperCase();
      var folder = email.folder;
      if (sender.indexOf(filterText) === -1) {
        return;
      }
      if(folder !== filterOption && filterOption !== "Show All"){
        return;
      }
      rows.push(<EmailRow email={email} key={email.email} / >);
    });
    return (
        <table>
            <thead>
                <tr>
                    <th className="table-organize">Organize</th>
                    <th className="table-data">Sender</th>
                    <th className="table-data">Domain</th>
                    <th className="table-data">Email</th>
                    <th className="table-data">Folder</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
  }
}

export default EmailTable;
