import React, { Component } from 'react'

export default class BadgeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badges: [],
            badgeColor: this.color || "lime"
        }
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm(newBadge) {
        this.setState(prevState => {
            let { badges, badgeColor } = prevState;
            let color = badgeColor === 'red' ? 'blue' : 'red'
            return {
                badges: [...badges, newBadge],
                badgeColor: color
            };
        });
    }

    render() {
        let { badges, badgeColor } = this.state;
        return (
            <div className='badgelist-wrapper'>
                <Form submit={this.formSubmit}></Form>
                {badges.map((badge, index) => {
                    
                    return <Badge backgroundColor={badgeColor} {...badge} key={index} ></Badge>;
                })}
            </div>
        )
    }
}
