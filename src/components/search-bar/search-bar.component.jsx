import React from "react";

const SearchBar = (props) => {


    // const search = (e) => {
    //     if (e.key === 'Enter') {
    //         props.setLocation(e.target.value)
    //     }
    // }

    return (
        <div className="search">
            <input
                className="searchBar"
                type="search"
                 placeholder={props.placeholder}
                // onKeyDown={search}
            />
        </div>
    )
}

export default SearchBar