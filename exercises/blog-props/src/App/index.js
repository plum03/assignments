import React, { Component } from 'react';
import Header from './Header';
import BlogList from './BlogList';
import Footer from './Footer';
import './App.css';


class App extends Component {
    render() {
        return (
            <div>
                <Header ></Header>
                <BlogList></BlogList>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;