import React, {Component} from "react";
import VacationCard from "./VacationCard";
import locations from "../../shared/vacation.json";

function VacationSpots (props) {
    return (
        <div>
            {locations.map((location, index) => {
                return <VacationCard {...location} key={index}></VacationCard>
            })}            
        </div>
    )
}

export default VacationSpots;