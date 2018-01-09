import React, {Component} from "react";

class App extends Component {
constructor(props) {
super(props);
this.state = {
counter: 0
}
this.add = this.add.bind(this);
this.reset = this.reset.bind(this);
}

// Triggers alert everytime the DOM updates
componentDidUpdate() {
alert("Hooray! I updated!!")
}

// This will only call render when the conditions w/in function are true
shouldComponentUpdate(nextProps, nextState) {
console.log(`previous: ${this.state.counter}\nnext: ${nextState.counter}`)
return this.state.counter !== nextState.counter;
}

add() {
this.setState((prevState) => {
return {
counter: prevState.counter + 1
}
})
}

reset() {
this.setState({
counter: 0
})
}

// Triggers alert with every keypress telling which key was pressed
componentDidMount() {
// alert("I have mounted!");
window.addEventListener("keyup", (e) => {
alert(e.key);
}) // Will only run after DOM has mounted
}
// This clears the event listener before proceeding through program
componentWillUnmount() {
window.removeEventListener("keyup");
}
// This function will only be called once, right after the component mounts
render() {
let {counter} = this.state;
return (
<div>
<h3>{counter}</h3>
<button onClick={this.add} >+</button>
<button onClick={this.reset}>Reset</button>
</div>
)
}
}

export default App;