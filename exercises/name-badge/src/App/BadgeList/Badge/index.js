import React, {Component} from 'react'
import './Badge.css'

export default class Badge extends Component {
    constructor(props) {
        super(props);
        let {
            firstName,
            lastName,
            email,
            birthPlace,
            phone,
            favFood,
            bio
        } = props; //destructure props for shorthand version
        this.state = {
            badge: {
                firstName,
                lastName,
                email,
                birthPlace,
                phone,
                favFood,
                bio
            },
            backgroundColor: props.badgeColor
        }
    }
    render() {
        let {
            firstName,
            lastName,
            email,
            birthPlace,
            phone,
            favFood,
            bio
        } = this.state.badge;
        let color = this.state.backgroundColor;
        let style = {
            backgroundColor: color
        };
        return (
            <div className='badge-wrapper'>
                <div className='badge-banner' style={style}>HELLO</div>
                <div className='person-info'>
                    <p >Name: {firstName}
                        {lastName}</p>
                    <p >Phone: {phone}</p>
                    <p >Place of Birth: {birthPlace}</p>
                    <p >Favorite Food: {favFood}</p>
                    <p >Email: {email}</p>
                </div>
                <div className='bio'>{bio}</div>
            </div>
        );
    }
}