import React from "react";

// search function for employees
function Search(props) {
    
    return (
        <form className="search">
            <div className="form-group" >
        <label htmlFor= "language" id="formLabel">Search:&nbsp;</label>
        <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search employee by name"
        id="search"
        />&nbsp;
        <br/>
        {/* <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button> */}
            </div>
            <button className="btn btn-primary m-2" onClick = {e => this.sortName(e, "name.a")}>
                Sort Names A-Z
            </button>
            <button className="btn btn-primary " onClick={e => this.sortName(e, "name.z")}> Sort Names Z - A</button>
        </form>
    );
}


export default Search;