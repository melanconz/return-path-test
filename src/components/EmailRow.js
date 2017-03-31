import React, {Component} from 'react';

class EmailRow extends Component {
    render() {
        var organize = (this.props.email.organize ? "checked"
            : "");
        var sender = this.props.email.sender;
        var domain = this.props.email.domain;
        var email = this.props.email.email;
        var folder = this.props.email.folder;
        return (
        <tr>
          <td className="table-organize">
            <input className="checkbox" type="checkbox" checked={organize} />
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
         <td className="table-data data data-row-tab">
           <select className="dropdownitem">
               <option value="all">{folder}</option>
           </select>
         </td>
       </tr>
     );
  }
}

export default EmailRow;
