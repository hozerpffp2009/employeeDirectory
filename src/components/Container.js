import React, {Component} from "react";
import Search from "./Search";
import Table from "./Table";
import api from "../utils/api";

class Container extends Component {
  state = {
    result: {},
    search: "",
    filterBy: "fName",
    currentSort: "default",
    sortField: "",
  };

  componentDidMount() {
    api.getEmployee()
      .then((response) => {
        console.log(Response);
        this.setState({
          result: response.data.results.map((event, input) => ({
            fName: event.name.first,
            lName: event.name.last,
            picture: event.picture.large,
            email: event.email,
            phone: event.phone,
            key: input,
          })),
        });
      })
      .catch((err) => console.log("error", err));
  }

  searchEmp = (search) => {
    console.log(this.state.result);
    var filterEmp = this.state.result.filter(
      (person) => person.fName === search
    );
    this.setState({
      result: filterEmp,
    });
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmp(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
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

            {[this.state.result].map((item) => (
              <Table
                picture={item.picture}
                fName={item.fName}
                lName={item.lName}
                email={item.email}
                phone={item.phone}
                key={item.key}
              />

            ))}
          </table>
        </div>
      </div>
    );
  };
};

export default Container;
