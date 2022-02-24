import React from "react";

import './display-search-result.style.css'

const Results = (props) =>{
    console.log(props.data)
    if (props.data !== ['']) {
        return(<div className="dataResults">
        {props.data.map((element, index)=>{
            return(<p key = {index} className="dataItem">{element.name}, {element.region}, {element.country}</p>)
        })}
    </div>)
    }


}

export default Results