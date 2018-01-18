import React, { Component } from 'react'

import axios from 'axios'

import Hit from './Hit'

import './Hit/Hit.css'


const hitUrl = "http://api.vschool.io:6543/hitlist.json"

export default class HitList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: []
        }
    }

    componentDidMount () {
        axios.get(hitUrl)
            .then((response) => {
                this.setState({
                    hits: response.data
                })

            })
    }

    render() {
    
        let {hits} = this.state;
        console.log(hits)
        return (
            <div className="page-wrapper">
                <h1 className="page-title">Hit List</h1>
                <div className="list-wrapper">
                    {hits.map((hit, i) => {
                        return <Hit index={i} {...hit}></Hit>
                    })}
                </div>
            </div>
            
        )
    }
}
