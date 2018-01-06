import React, {Component} from "react";
import Form from "./Form";
import Gallery from "./Gallery";

function App(props) {
    return (
        <div>
            <header>
                <h1>Title of Something</h1>
            </header>

            <Form></Form>

            <Gallery></Gallery>

            <footer>
                <p>&copy:2018</p>
            </footer>
        </div>
    )
}

export default App;