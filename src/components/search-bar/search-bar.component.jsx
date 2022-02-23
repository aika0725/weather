import React from "react";

const SearchBar = ({placeholder, setCity})=>{
    const search=(e)=> {
         if(e.key === 'Enter') {
             setCity(e.target.value)
         }     
    }

    return(
    <input
    className="search"
    type="search"
    placeholder= {placeholder}
    onKeyDown={search}
    />
)}

export default SearchBar