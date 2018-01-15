import React from 'react'
import Box from './Box.js'
import ContactCard from './ContactCard.js'

function App(props) {

    const contacts = [
        {firstName: "Bob", lastName: "Ziroll", phone: "123456789"},
        {firstName: "Erica", lastName: "Stone", phone: "123456789"},
        {firstName: "Emmalee", lastName: "Stone", phone: "123456789"}
]

    return (
        <div>
            <Box text="Blue" color="blue"/>
            <Box text="Red" color="red"/>
            <Box text="Pink" color="pink"/>
            <Box text="Hmm.." color=""/>


        {contacts.map((contact) => {
            return (
                <ContactCard {...contact} />
            )
        })}
            
        </div>
    )
}

export default App
