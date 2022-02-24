import React from "react";
import ActivityShowcase from "../activity-showcase/activity-showcase.component";
import Button from "../button/button.component";

import './activities.styles.css'

const Activities =()=>{

    return(
        <div className="activities-contanier">
        <ActivityShowcase/>
        <Button/>
        </div>
    )
}

export default Activities