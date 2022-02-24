import React from "react";
import SearchBar from "../search-bar/search-bar.component";
import Title from "../title/title.component";

import './header.styles.css'

const Header = (props) =>{

    return(
    <div className="header">
        <Title/>
        <SearchBar
            placeholder='City name...'
        />
    </div>
)}

export default Header