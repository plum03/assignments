import React, { Component } from 'react'
import axios from 'axios'

const colorUrl = "http://www.colr.org/json/color/random"

export default class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "blue"
        }
        this.getColor = this.getColor.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.getColor()
    }

    getColor(){
        axios.get(colorUrl)
            .then((response) => {
                // console.log(response.data)
                // console.log(response.data.new_color)
                let newColor = response.data.new_color
                // console.log(newColor)
                this.setState({
                    backgroundColor: newColor
                })
            })
    }

    handleClick(e) {
        this.getColor()
    }

    render() {
        let {backgroundColor} = this.state
        console.log(backgroundColor)
        let style = {
            backgroundColor: `#${backgroundColor}`,
            padding: "50px",
            width: "33%",
            borderRadius: "20px",
            textAlign: "center",
            color: "white",
            fontFamily: "Arial",
            fontSize: "28px"
        }

        return (
            <div className="color-wrapper" style={style} onClick={this.handleClick}>
                <h1>Click to Change the Color</h1>
            </div>
        )
    }
}
