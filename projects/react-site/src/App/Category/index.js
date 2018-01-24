import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import {getCategory} from '../../redux/category'

import Category from './Category'

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
        let categories = ["science", "bible", "sports"];
        console.log(categories);
        return (
            <div>
                {/* map through the categories array and create <Link to="/trivia/{category}/">  */}
            </div>
        )
    }
    /* <div>
                {categories.map((category, i) => {
                    let {name, id} = category;
                    return (
                    <Category key={i + name} name={name} id={id}></Category>
                )})}

            </div>  */

}

function mapStateToProps(state) {
    return state.categories
}

export default connect(mapStateToProps, {getCategories})(Categories)
