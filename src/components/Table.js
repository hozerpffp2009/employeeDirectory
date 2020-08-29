import React from "react";

function Table(props) {
  return (
    <table className="table">
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
