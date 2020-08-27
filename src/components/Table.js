import React from "react";

function Table(props) {
  return (
    <table className="table">
      {/* <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr> */}
      <tr>
        <td>
          <img alt={props.title} className="img-fluid" src={props.src} />
        </td>
        <td> {props.fName} </td>
        <td> {props.lName} </td>
        <td> {props.email} </td>
        <td> {props.phone} </td>
      </tr>
    </table>
  );
}

export default Table;
