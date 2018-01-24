import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import {getCategory} from '../../redux/category'


class Category extends Component {
    constructor(props) {
        super(props);
        // this.state = {     categories: props.categories || [] }
    }

    componentDidMount() {
        this
            .props
            .getCategory();
    }

    componentWillReceiveProps(nextProps) {
        // if (this.state.categories.length !== nextProps.categories.length) {
        // this.setState( {         categories: nextProps.categories     }) }
    }

    render() {
        // let categories = this.state.categories
        let categories = ["Animated Movies", "Biology", "Random Trivia", "TV Trivia", "Who Sings It (2000)", "Vampire"];
        console.log(categories);
        
        return (
            // map through the categories array and create <Link to="/trivia/{category}/">
            <div>
                {categories.map((category, i) => {
                    return (
                        <Link to={`/${category}`} key={i + category}>{category}</Link>
                    )
                })}               
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.categories
}

export default connect(mapStateToProps, {getCategory})(Category)
