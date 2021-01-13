import React, {Component} from "react";

class Search extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.props.onNewInput}/>
                <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        );
    }
}
export default Search;