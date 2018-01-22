import React from 'react'

function Category(props) {
    let {name} = props;

    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default Category
