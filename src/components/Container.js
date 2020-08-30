import React, {Component} from "react";
import Search from "./Search";
import Table from "./Table";
import api from "../utils/api";
import "./style.css";

// Inheriting container from component
class Container extends Component {
  state = {
    result: [],
    search: "",
    filterBy: "fName",
    currentSort: "default",
    sortField: "",
  };
// Hook call that gets called after being mounted to the dom.
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

  // function to filter through employees.
  searchEmp = (search) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [ searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
    React.useEffect(() => {
      const results = this.state.result.filter(person =>
        person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
        
    }, [searchTerm]);
    console.log(search);

    return (
      <div className="App">
        <input type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}>
        </input>
      </div>
    )
    // var filterEmp = this.state.result.filter(
    //   (person) => person.toLowerCase().includes(search.toLowerCase())
    // );
    // setSearchResults(result);
    // this.setState({
    //   result: filterEmp,
    // });
  };

// Handle any changes made to searchEmp function
  handleInputChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const value = event.target.value;
    const name = event.target.name;
    this.searchEmp(value);
    this.setState({
      [name]: value,
    });
  };

  // Renders data
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
              sortName={this.item}
            />
          </div>
        </div>
        <table className="table table-hover">
        <thead>
            <tr>
              <th>Employee Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            </thead>
    </table>
       
            {[...this.state.result].map((item) => (
              <Table
                picture={item.picture}
                fName={item.fName}
                lName={item.lName}
                email={item.email}
                phone={item.phone}
                key={item.key}
              />
            ))}
      
       
      </div>
    );
  }
}

// Export container
export default Container;
