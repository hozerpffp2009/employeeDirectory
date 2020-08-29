import React from "react";

function Table(props) {
  return (
    <table className="table">
       <tr>
              <th>Photo</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
      <tr>
        <td>
          <img alt={props.picture} className="img-fluid" src={props.picture} />
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
