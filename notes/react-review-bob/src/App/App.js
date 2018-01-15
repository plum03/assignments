// import React from 'react'
import Box from './Box.js'
import ContactCard from './ContactCard.js'
import DisplayComponents from './DisplayComponents.js'

import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // console.log("clicked");
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
                // isVisible: prevState.isVisible ? false : true
            }
        })

    }
    componentDidMount

// Useful in React Wars
    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            // Get the new data based on nedtProps.match.params.id
        }
    }

    render() {
        return (
            <div>
                <DisplayComponents
                    isVisible={this.state.isVisible}
                    count={this.state.count}
                    handleClick={this.state.handleClick}
                    />
                {/* <button onClick={this.handleClick}>
                    {this.setState.isVisible ? "Hide" : "Show"}
                </button>
                {this.state.isVisible && <h1>Text here</h1>}}
                {this.state.isVisible ? <h1>Text here</h1> : <h3>Hidden text</h3>} */}
            </div>
        )
    }
}


// function App(props) {

//     const contacts = [
//         {firstName: "Bob", lastName: "Ziroll", phone: "123456789"},
//         {firstName: "Erica", lastName: "Stone", phone: "123456789"},
//         {firstName: "Emmalee", lastName: "Stone", phone: "123456789"}
// ]

//     return (
//         <div>
//             <Box text="Blue" color="blue"/>
//             <Box text="Red" color="red"/>
//             <Box text="Pink" color="pink"/>
//             <Box text="Hmm.." color=""/>


//         {contacts.map((contact) => {
//             return (
//                 <ContactCard {...contact} />
//             )
//         })}
            
//         </div>
//     )
// }

// export default App
