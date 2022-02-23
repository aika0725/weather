import React from "react";
import SearchBar from "../search-bar/search-bar.component";

const Header = (props) =>{
    
    return(
    <div className="header">
        <SearchBar
            placeholder='City name'
            setCity={props.setCity}
        />
    </div>
)}

export default Header