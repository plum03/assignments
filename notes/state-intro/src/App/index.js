import React, {Component} from "react";
import './index.css';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            counter: 0,
            color: "lime"
        };
        this.handleClick = this
            .handleClick
            .bind(this);
        this.reset = this
            .reset
            .bind(this);
        this.changeColor = this
            .changeColor
            .bind(this);
        // When using a constructor method within a Class, you must bind the constructor
        // to the Method using .bind()
    }
    // Create Method to handle click event in render()
    handleClick(e) {
        let name = e.target.name;
        this.setState((prevState) => {
            // add more logic here if needed
            return {
                counter: name === "add" ? prevState.counter + 1 : prevState.counter -1
                // counter: prevState.counter + 1
            };
        });
    }

    reset() {
        this.setState({counter: 0});
    }

    changeColor() {
        this.setState((prevState) => {
            return {
                color: prevState.color === "lime" ? "black" : "lime"
            };
        });
    }

    render() {
        let {counter, color} = this.state; // Use destructuring to avoid having to retype this.state.counter
        let boxStyle = {
            backgroundColor: color
        }; // color here refers to this.state.color

        return (
            <div>
                <p>{counter}</p>
                {/* counter now references this.state.counter */}
                <button name="add" onClick={this.handleClick}>+</button>
                <button name="subtract" onClick={this.handleClick}>-</button>

                <button onClick={this.reset}>Reset</button>

                <div style={boxStyle} className="box" onMouseOver={this.changeColor}></div>
            </div>
        )
    }
}

export default App;