import React, {Component} from "react";
import Form from "../../Form";

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {},
            hidden: true
        }
        this.toggleDisplay = this
            .toggleDisplay
            .bind(this);
    }

    toggleDisplay() {
        this.setState((prevState) => {
            return {
                hidden: !prevState.hidden
            }
        })
    }

    render() {
        let {hidden} = this.state;
        let { edit, index} = this.props;
        let formStyle = {
            display: hidden
                ? "none"
                : "initial"
        }
        return (
            <div >
                <button onClick={this.toggleDisplay}>Edit</button>
                <div style={formStyle}>
                    <Form submit={edit}{...this.props} ></Form>
                </div>

            </div>
        )
    }
}

export default EditForm;