import React, {Component} from "react";
import Search from "./Search";
import Table from "./Table";
import api from "../utils/api";

class Container extends Component {
  state = {
    result: [],
    search: "",
    filterBy: "fName",
    currentSort: "default",
    sortField: "",
  };

  componentDidMount() {
    api
      .getEmployee()
      .then((response) => {
        console.log(response);
        this.setState({
          result: response.data.results.map((emp, idx) => ({
            fName: emp.name.first,
            lName: emp.name.last,
            picture: emp.picture.large,
            email: emp.email,
            phone: emp.phone,
            key: idx,
          })),
        });
      })
      .catch((err) => console.log("error", err));
  }

  searchEmp = (search) => {
    console.log(search);
    var filterEmp = this.state.result.filter(
      (person) => person.fName === search
    );
    this.setState({
      result: filterEmp,
    });
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    console.log("name", name);
    console.log("value", value);
    this.searchEmp(value);
    this.setState({
      [name]: value
    });
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
          <h2>Employee Directory</h2>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Search
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>

        <div className="row">
          <table className="table">
            <tr>
              <th>Photo</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>

            {[... this.state.result].map((item) => 
            <Table 
            picture={item.picture}
            fName={item.fName}
            lName={item.lName}
            email={item.email}
            phone={item.phone}
            key={item.key}
            />
            )}
          </table>
        </div>
      </div>
    );
  }
}

export default Container;
