import React from "react";

// Table function for employees
function Table(props) {
  return (
    <table className="table table-hover">
        <thead>
          <tr>
      <td>
        <img src={props.picture} className="img-fluid" alt="..." />
      </td>
      <td> {props.fName} </td>
      <td> {props.lName} </td>
      <td> {props.email} </td>
      <td> {props.phone} </td>
      </tr>
      </thead>
    </table>
  );
}

// Export table
export default Table;
