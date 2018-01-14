import React from 'react'
import services from '../../shared/services.json'
import Service from './Service'

function Services(props) {
    return (
        <div>
            {services.map((service) => {
                return (
                    <Service {...service}></Service>
                )
            })}
        </div>
    )
}

export default Services
