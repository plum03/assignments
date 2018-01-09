import React, {Component} from 'react';
import Form from "../../Form";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        let {editItem, index} = this.props;
        let formStyle = {
            display: hidden
                ? "none"
                : "initial"
        }
        let tooltip = <Tooltip id="tooltip">Click here to edit</Tooltip>
        return (
            <div>
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <button onClick={this.toggleDisplay}>Edit</button>
                </OverlayTrigger>
                <div style={formStyle}>
                    <Form {...this.props} submit={editItem}></Form>
                </div>
            </div>
        )
    }
}

export default EditForm;